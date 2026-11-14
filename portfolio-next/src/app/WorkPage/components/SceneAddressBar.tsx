type SceneAddressBarProps = {
    // Without the protocol, for example 'cc.skoda-auto.com'
    address: string
}

// The address bar of a prototype scene: a web address for the title of AppWindow.
export const SceneAddressBar = ({ address }: SceneAddressBarProps) => (
    <span className="mx-auto w-[45%] bg-primary-input-background py-[0.2em] text-center text-[0.8em]">
        <span className="opacity-60">{address}</span>
    </span>
)
