import { ServiceCard } from './types'

export const servicesContent: ServiceCard[] = [
    {
        name: 'start',
        color: 'primary-light-green',
        button: 'lightGreen',
        title: 'Starter Pack',
        items: [
            {
                description: 'Basic website design and development',
                price: 1500,
            },
            { description: 'Basic SEO setup:', price: 500 },
            {
                description: 'Basic website maintenance and support',
                price: 600,
            },
            { description: 'Shared website hosting', price: 120 },
            { description: 'Domain registration', price: 15 },
            {
                description: 'Basic third-party service integration',
                price: 0,
            },
        ],
        totalPrice: 2735,
        motivation:
            'Ideal for small businesses or startups that need a basic online presence',
        link: '',
    },
    {
        name: 'pro',
        color: 'primary-dark-blue',
        button: 'darkBlue',
        title: 'Pro Pack',
        items: [
            {
                description: 'Advanced website design and development',
                price: 2500,
            },
            {
                description: 'Advanced SEO setup',
                price: 1000,
            },
            {
                description: 'Advanced website maintenance',
                price: 1200,
            },
            { description: 'VPS website hosting', price: 240 },
            { description: 'Domain registration', price: 15 },
            {
                description: 'Advanced third-party service integration',
                price: 0,
            },
        ],
        totalPrice: 4955,
        motivation:
            'Ideal for growing businesses that need more advanced features.',
        link: '',
    },
    {
        name: 'enterprise',
        color: 'primary-blue',
        button: 'blue',
        title: 'Enterprise Pack',
        items: [
            {
                description: 'Custom website design & development',
                price: 5000,
            },
            {
                description: 'Comprehensive SEO setup',
                price: 2000,
            },
            {
                description: 'Comprehensive Website Maintenance',
                price: 2400,
            },
            { description: 'Dedicated website hosting', price: 480 },
            { description: 'Domain registration', price: 15 },
            {
                description: 'Comprehensive third-party service integration',
                price: 0,
            },
        ],
        totalPrice: 9985,
        motivation:
            'Ideal for large businesses or e-commerce sites that need a lot of customization.',
        link: '',
    },
]
