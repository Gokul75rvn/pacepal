/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary palette (teal/cyan)
        primary: {
          DEFAULT: '#06b6d4', // teal/cyan
          light: '#67e8f9',
          dark: '#0891b2'
        },
        // Secondary palette (indigo)
        secondary: {
          DEFAULT: '#4f46e5',
          light: '#818cf8',
          dark: '#3730a3'
        },
        accent: {
          DEFAULT: '#f97316'
        },
        dark: '#0f172a',
        light: '#f8fafc',
        neutral: {
          50: '#fafafa',
          100: '#f4f4f5',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        },
        black: '#000000',
        white: '#ffffff',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}