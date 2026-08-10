import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0B1020',
        slate: '#1A2138',
        paper: '#F5F1E8',
        gold: '#C9A227',
        graphite: '#6E7691',
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      maxWidth: { reading: '38rem' },
    },
  },
  plugins: [],
};
export default config;
