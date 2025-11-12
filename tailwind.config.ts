import typography from '@tailwindcss/typography'

export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      paper: '#F5F1E8',
      ink: '#2C2C2C',
      river: '#4A7C9F',
      earth: '#8B6F47',
      sunset: '#D4A574',
      mist: '#A8A8A0',
      white: '#ffffff',
      black: '#000000',
    },
    extend: {
      fontFamily: {
        serif: ['"Crimson Pro"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: {
    typography,
  },
}
