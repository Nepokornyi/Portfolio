import { CodeToken, DemoFormField } from '@/app/ContactPage/types'

const ATTRIBUTE_PROPS = ['label', 'placeholder'] as const

const plain = (text: string): CodeToken => ({ text, kind: 'plain' })

const buildFieldTokens = (
    { component, props }: DemoFormField,
    field: number,
): CodeToken[] => {
    const tokens: CodeToken[] = [
        plain('    <'),
        { text: component, kind: 'component', link: { field } },
    ]

    for (const prop of ATTRIBUTE_PROPS) {
        const value = props[prop]
        if (value === undefined) continue
        tokens.push(
            plain(' '),
            { text: prop, kind: 'prop' },
            plain('='),
            { text: '"', kind: 'value' },
            { text: value, kind: 'value', link: { field, prop } },
            { text: '"', kind: 'value' },
        )
    }

    if (props.children === undefined) return [...tokens, plain(' />\n')]

    return [
        ...tokens,
        plain('>'),
        {
            text: props.children,
            kind: 'plain',
            link: { field, prop: 'children' },
        },
        plain('</'),
        { text: component, kind: 'component' },
        plain('>\n'),
    ]
}

export const buildCodeTokens = (fields: DemoFormField[]): CodeToken[] => [
    plain('export const Contact = () => (\n  <'),
    { text: 'Form', kind: 'component' },
    plain('>\n'),
    ...fields.flatMap(buildFieldTokens),
    plain('  </'),
    { text: 'Form', kind: 'component' },
    plain('>\n)'),
]

// The first `count` characters of the code, still split into tokens
export const sliceTokens = (tokens: CodeToken[], count: number) => {
    const sliced: CodeToken[] = []
    let charsLeft = count

    for (const token of tokens) {
        if (charsLeft <= 0) break
        const text = token.text.slice(0, charsLeft)
        sliced.push({ ...token, text })
        charsLeft -= text.length
    }

    return sliced
}

// The fields whose opening tag is typed, with the part of each prop value typed so far
export const getTypedFields = (
    fields: DemoFormField[],
    typedTokens: CodeToken[],
) => {
    const typedFields: DemoFormField[] = []

    for (const { text, link } of typedTokens) {
        if (!link) continue
        if (link.prop) typedFields[link.field].props[link.prop] = text
        else
            typedFields[link.field] = {
                component: fields[link.field].component,
                props: {},
            }
    }

    return typedFields
}
