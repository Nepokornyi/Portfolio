import { defineConfig, globalIgnores } from 'eslint/config'
import nextVitals from 'eslint-config-next/core-web-vitals'

export default defineConfig([
    ...nextVitals,
    {
        rules: {
            'react/react-in-jsx-scope': 'off',
            'react/self-closing-comp': ['error', { component: true, html: true }],
        },
    },
    globalIgnores(['.next/**', 'out/**', 'build/**', 'next-env.d.ts']),
])
