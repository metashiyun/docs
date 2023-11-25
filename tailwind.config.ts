import type {Config} from 'tailwindcss'

const config: Config = {
    content: [
        './kikaku/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            fontFamily: {
                "hei": ["source-sans-3", "source-han-sans-cjk-sc", "sans-serif"],
                "ming": ["source-serif-4", "source-han-serif-sc", "serif"],
                "kai": ["adobe-kaiti-std", "cursive"]
            }
        },
    },
    plugins: [],
}
export default config
