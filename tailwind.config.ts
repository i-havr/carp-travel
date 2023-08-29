import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: { inter: ['var(--font-inter)'] },
      backgroundColor: {
        input: 'rgba(255, 255, 255, 0.1)',
        'input-hover': 'rgba(255, 255, 255, 0.2)',
      },
      colors: { 'error-input': 'rgba(255, 87, 87, 1)' },
    },
  },
  plugins: [],
};
export default config;
