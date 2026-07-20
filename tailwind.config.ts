import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx,mdx}', './components/**/*.{ts,tsx}', './content/**/*.mdx'],
  theme: {
    extend: {
      colors: {
        abyss: '#0C1226',
        deep: '#0E1530',
        panel: '#141B38',
        gold: '#D0AC5C',
        'gold-bright': '#E9C97E',
        'gold-dim': '#8F7440',
        parchment: '#F0E3C8',
        cream: '#E9E2D0',
        ink: '#241C10',
        mist: '#9AA3C4',
      },
      fontFamily: {
        display: ['Georgia', 'serif'],
        body: ['Georgia', 'serif'],
        mono: ['monospace'],
      },
      maxWidth: { prose: '42rem' },
      letterSpacing: { editorial: '0.15em', wide: '0.25em', ultra: '0.4em' },
    },
  },
  plugins: [],
};
export default config;
