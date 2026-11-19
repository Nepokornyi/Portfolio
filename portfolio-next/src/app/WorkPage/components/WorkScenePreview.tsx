import { ComponentType } from 'react'

type WorkScenePreviewProps = {
    Scene: ComponentType
}

export const WorkScenePreview = ({ Scene }: WorkScenePreviewProps) => {
    return (
        <div className="relative order-last w-full overflow-clip border-primary-hairline [container-type:size] max-lg:aspect-[3/4] max-lg:max-h-[85svh] max-lg:scene-landscape:aspect-[3/2] lg:order-none lg:row-span-2 lg:h-full lg:min-h-[350px] lg:border-r">
            <div className="absolute -inset-px">
                <Scene />
            </div>
        </div>
    )
}
