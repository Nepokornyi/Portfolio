export type DemoComponent = 'Input' | 'Textarea' | 'Button'

export type DemoFieldProps = {
    label?: string
    placeholder?: string
    children?: string
}

export type DemoProp = keyof DemoFieldProps

export type DemoFormField = {
    component: DemoComponent
    props: DemoFieldProps
}

export type CodeTokenKind = 'plain' | 'component' | 'prop' | 'value'

export type CodeToken = {
    text: string
    kind: CodeTokenKind
    // Links the token to what it renders: a field's opening tag (no prop) or one prop value
    link?: { field: number; prop?: DemoProp }
}
