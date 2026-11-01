import { DemoFormField } from '@/app/ContactPage/types'

export const demoFormFields: DemoFormField[] = [
    { component: 'Input', props: { label: 'Name', placeholder: 'Elon Musk' } },
    {
        component: 'Input',
        props: { label: 'Email', placeholder: 'elon@musk.com' },
    },
    { component: 'Textarea', props: { label: 'Message', placeholder: 'Hi!' } },
    { component: 'Button', props: { children: 'send' } },
]

export const TYPE_DELAY_MS = 35
export const RESTART_DELAY_MS = 2500
