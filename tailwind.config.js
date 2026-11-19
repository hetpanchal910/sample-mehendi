/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                henna: {
                    50: '#fdf4f0',
                    100: '#fae6de',
                    200: '#f6d1c2',
                    300: '#efb19b',
                    400: '#e5856b',
                    500: '#d75f41',
                    600: '#be4326',
                    700: '#9b331c',
                    800: '#7e2c1a',
                    900: '#67271a',
                    950: '#3c120a',
                },
                gold: {
                    50: '#fbf9eb',
                    100: '#f6f1cc',
                    200: '#ede09b',
                    300: '#e2ca62',
                    400: '#d8b235',
                    500: '#c59a23',
                    600: '#aa7a1a',
                    700: '#875a18',
                    800: '#71481b',
                    900: '#603c1c',
                    950: '#381f0b',
                },
                sage: {
                    50: '#f4f7f4',
                    100: '#e5ebe4',
                    200: '#ced9cd',
                    300: '#abbfa9',
                    400: '#849f82',
                    500: '#638062',
                    600: '#4d654c',
                    700: '#3d503d',
                    800: '#334133',
                    900: '#2c372c',
                    950: '#151d15',
                },
                warmcream: {
                    50: '#fdfcf9',
                    100: '#faf6ee',
                    200: '#f5edd9',
                    300: '#ede0be',
                    400: '#e3cf9d',
                    500: '#d5b97d',
                }
            },
            fontFamily: {
                serif: ['"Playfair Display"', 'Georgia', 'serif'],
                cormorant: ['"Cormorant Garamond"', 'Georgia', 'serif'],
                sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
            },
            animation: {
                'spin-slow': 'spin 30s linear infinite',
                'spin-reverse-slow': 'spinReverse 35s linear infinite',
                'float': 'float 6s ease-in-out infinite',
                'float-delayed': 'float 7s ease-in-out 2s infinite',
                'shimmer': 'shimmer 2.5s infinite linear',
                'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
            },
            keyframes: {
                spinReverse: {
                    '0%': { transform: 'rotate(360deg)' },
                    '100%': { transform: 'rotate(0deg)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
                    '50%': { transform: 'translateY(-12px) rotate(2deg)' },
                },
                pulseSubtle: {
                    '0%, 100%': { opacity: '1', transform: 'scale(1)' },
                    '50%': { opacity: '0.88', transform: 'scale(1.02)' },
                },
                shimmer: {
                    '0%': { backgroundPosition: '-200% 0' },
                    '100%': { backgroundPosition: '200% 0' },
                }
            }
        },
    },
    plugins: [],
}