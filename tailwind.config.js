/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: '#90A1FF',
                secondary: '#130B1D',
                dark: '#08040D',
                darken: '#030007',
                gray: '#BFBFBF',
            },
        },
    },
    plugins: [],
}
