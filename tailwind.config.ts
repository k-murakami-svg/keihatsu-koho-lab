import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#1E3A5F',
          50: '#F0F4F8',
          100: '#D9E2EC',
        },
        mustard: {
          DEFAULT: '#D4A437',
          50: '#FAF6E8',
          100: '#F0E2A8',
          700: '#B8902F',
        },
        text: '#2B2B2B',
        border: '#E0E0E0',
        cream: '#FAF8F2',
      },
      fontFamily: {
        serif: ['"Noto Serif JP"', 'serif'],
        sans: ['"Noto Sans JP"', 'sans-serif'],
        en: ['"Inter"', 'sans-serif'],
      },
      maxWidth: {
        container: '1200px',
      },
      lineHeight: {
        body: '1.7',
      },
    },
  },
  plugins: [],
}

export default config
