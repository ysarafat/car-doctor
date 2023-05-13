/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: '#FF3811',
                dark: '#444444',
                'deep-dark': '#151515',
                'light-dark': '#737373',
                'light-text': '#E8E8E8',
                form: '#F3F3F3',
            },
        },
    },
    plugins: [require('daisyui')],
};
