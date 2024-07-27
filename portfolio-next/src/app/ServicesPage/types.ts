import { ButtonColorVariants } from '@/components/Button/Button'

export type ServiceItemProps = {
    description: string
    price: number
}

export type ServiceCard = {
    name: string
    color: string
    button: ButtonColorVariants
    title: string
    items: ServiceItemProps[]
    totalPrice: number
    motivation: string
    link: string
}
