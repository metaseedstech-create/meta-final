/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        blue: {
          50: 'rgb(var(--color-blue-50) / <alpha-value>)',
          100: 'rgb(var(--color-blue-100) / <alpha-value>)',
          200: 'rgb(var(--color-blue-200) / <alpha-value>)',
          300: 'rgb(var(--color-blue-300) / <alpha-value>)',
          400: 'rgb(var(--color-blue-400) / <alpha-value>)',
          500: 'rgb(var(--color-blue-500) / <alpha-value>)',
          600: 'rgb(var(--color-blue-600) / <alpha-value>)',
          700: 'rgb(var(--color-blue-700) / <alpha-value>)',
          800: 'rgb(var(--color-blue-800) / <alpha-value>)',
          900: 'rgb(var(--color-blue-900) / <alpha-value>)',
          950: 'rgb(var(--color-blue-950) / <alpha-value>)',
        },
        sky: {
          50: 'rgb(var(--color-sky-50) / <alpha-value>)',
          100: 'rgb(var(--color-sky-100) / <alpha-value>)',
          200: 'rgb(var(--color-sky-200) / <alpha-value>)',
          300: 'rgb(var(--color-sky-300) / <alpha-value>)',
          400: 'rgb(var(--color-sky-400) / <alpha-value>)',
          500: 'rgb(var(--color-sky-500) / <alpha-value>)',
          600: 'rgb(var(--color-sky-600) / <alpha-value>)',
          700: 'rgb(var(--color-sky-700) / <alpha-value>)',
          800: 'rgb(var(--color-sky-800) / <alpha-value>)',
          900: 'rgb(var(--color-sky-900) / <alpha-value>)',
          950: 'rgb(var(--color-sky-950) / <alpha-value>)',
        },
        indigo: {
          50: 'rgb(var(--color-indigo-50) / <alpha-value>)',
          100: 'rgb(var(--color-indigo-100) / <alpha-value>)',
          200: 'rgb(var(--color-indigo-200) / <alpha-value>)',
          300: 'rgb(var(--color-indigo-300) / <alpha-value>)',
          400: 'rgb(var(--color-indigo-400) / <alpha-value>)',
          500: 'rgb(var(--color-indigo-500) / <alpha-value>)',
          600: 'rgb(var(--color-indigo-600) / <alpha-value>)',
          700: 'rgb(var(--color-indigo-700) / <alpha-value>)',
          800: 'rgb(var(--color-indigo-800) / <alpha-value>)',
          900: 'rgb(var(--color-indigo-900) / <alpha-value>)',
          950: 'rgb(var(--color-indigo-950) / <alpha-value>)',
        },
        navy: {
          950: '#060a12',
          900: '#090e1a',
          850: '#0d1527',
          800: '#111b33',
          700: '#172445',
          600: '#1e305b',
        },
        electric: {
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
        },
        cyanGlow: {
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'sans-serif'],
      },
      boxShadow: {
        'glow-blue': '0 0 25px -5px rgba(59, 130, 246, 0.5)',
        'glow-cyan': '0 0 25px -5px rgba(6, 182, 212, 0.5)',
        'card-dark': '0 10px 30px -10px rgba(0, 0, 0, 0.5)',
        'card-light': '0 10px 25px -5px rgba(0, 0, 0, 0.05)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
