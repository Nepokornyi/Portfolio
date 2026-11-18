import { ComponentType } from 'react'

type WorkScenePreviewProps = {
    Scene: ComponentType
}

export const WorkScenePreview = ({ Scene }: WorkScenePreviewProps) => {
    return (
        <div className="flex items-center justify-center order-last lg:order-none lg:row-span-2 lg:h-full lg:min-h-[350px] border-b border-r border-primary-hairline p-6 lg:[container-type:size]">
            <div className="w-full max-w-[220px] sm:max-w-none">
                <Scene />
            </div>
        </div>
    )
}
