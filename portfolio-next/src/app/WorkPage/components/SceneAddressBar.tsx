type SceneAddressBarProps = {
    address: string
}

export const SceneAddressBar = ({ address }: SceneAddressBarProps) => (
    <span className="mx-auto w-[45%] bg-primary-input-background py-[0.2em] text-center text-[0.8em]">
        <span className="opacity-60">{address}</span>
    </span>
)
