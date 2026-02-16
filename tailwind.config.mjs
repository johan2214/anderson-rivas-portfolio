/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'bg-black': '#000000',
        'acc-green': '#39FF14',
        'acc-green-dim': 'rgba(57, 255, 20, 0.1)',
        'card-bg': '#0A0A0A',
        'card-border': '#1A1A1A',
        'text-white': '#FFFFFF',
        'text-gray': '#888888',
      },
      fontFamily: {
        'main': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}