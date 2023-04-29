/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontSize: {
      title: '36px',
    },
    fontFamily: {
      // sans: ['Graphik', 'sans-serif'],
      oswald: ['Oswald', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      opensans: ['Open Sans', 'san-serif'],
    },
    extend: {
      colors: {
        'title-orange': '#c04000',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),

  ],
}
