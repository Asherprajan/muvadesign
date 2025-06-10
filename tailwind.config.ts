import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'telegraf': ['var(--font-telegraf)', 'sans-serif'],
        'inter': ['var(--font-inter)', 'sans-serif'],
      },
      colors: {
        'muva-cream': '#F5F0E6',
        'muva-beige': '#E8DFD0',
        'muva-orange': '#FF5C1D',
      },
    },
  },
  plugins: [],
}
export default config 