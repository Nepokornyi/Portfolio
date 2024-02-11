/* eslint-disable react/no-unknown-property */
import React, { useRef } from 'react'

import { Canvas, useFrame, extend } from '@react-three/fiber'
import { Depth, Fresnel, LayerMaterial } from 'lamina'
import { OrbitControls } from '@react-three/drei'

import CustomLayer from './CustomLayer'

// custom layer
extend({ CustomLayer })

const Planet = () => {
    const materialRef = useRef()

    useFrame((state) => {
        const { clock } = state
        materialRef.current.time = clock.getElapsedTime()
    })

    return (
        <mesh position={[0, 0, 0]} rotation={[0, Math.PI, 0]} scale={1.5}>
            <icosahedronGeometry args={[2, 11]} />
            <LayerMaterial lightning={'lambert'}>
                {/* First layer is our own custom layer that's based of the FBM shader */}
                {/* 
                Notice how we can use *any* uniforms as prop here 👇
                You can tweak the colors by adding a colorA or colorB prop!
                */}
                <customLayer ref={materialRef} time={0.0} lacunarity={2.3} />
                {/* Second layer is a depth based gradient that we "add" on top of our custom layer */}
                <Depth
                    colorA={'blue'}
                    colorB={'aqua'}
                    alpha={0.9}
                    mode={'add'}
                />
                {/* Third Layer is a Fresnel shading effect that we add on */}
                <Fresnel color={'#feb3d9'} mode={'add'} />
            </LayerMaterial>
        </mesh>
    )
}

export const Sphere = () => {
    return (
        <Canvas
            style={{
                position: 'absolute',
                top: 0,
                right: 0,
                height: '100%',
                width: '60%',
                objectFit: 'contain',
                zIndex: -1,
            }}
            camera={{ position: [0, 0, 8] }}
        >
            <ambientLight intensity={0.03} />
            <directionalLight position={[0.3, 0.15, 0]} intensity={2} />
            <Planet />
            <OrbitControls />
        </Canvas>
    )
}
