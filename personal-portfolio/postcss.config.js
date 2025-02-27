/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#121212',
        secondary: '#1e1e1e',
        accent: '#6200ee',
        'accent-hover': '#7c4dff',
        'text-primary': '#e0e0e0',
        'text-secondary': '#a0a0a0',
        'console-bg': '#0c0c0c',
        'console-text': '#00ff00',
        'success': '#00c853',
        'error': '#ff1744',
        'border': '#333333',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}