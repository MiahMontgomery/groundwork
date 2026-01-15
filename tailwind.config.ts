import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brown: {
          50: '#faf8f6',
          100: '#f5f1eb',
          200: '#e8ddd0',
          300: '#d4c4b0',
          400: '#b89d7a',
          500: '#9d7a5c',
          600: '#7d6149',
          700: '#5c4837',
          800: '#3d3025',
          900: '#2a1f18',
          950: '#1a1410',
        },
        warm: {
          50: '#fefaf6',
          100: '#fdf4e8',
          200: '#fae8cc',
          300: '#f6d5a5',
          400: '#f0b872',
          500: '#e89a4a',
          600: '#d97d2a',
          700: '#b8621f',
          800: '#954e1d',
          900: '#79421c',
        },
        slate: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        },
        gold: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            color: '#334155',
          },
        },
      },
    },
  },
  plugins: [],
}
export default config
