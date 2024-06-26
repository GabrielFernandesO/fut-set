/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
       
        
    },
    colors: {
      blue: '#1C4D74',
      blue_weak: '#2b76b2',
      bege: '#D8AE5E',
      white: '#ffffff',
      purple: '#3f3cbb',
      midnight: '#121063',
      metal: '#565584',
      tahiti: '#3ab7bf',
      silver: '#ecebff',
      bubblegum: '#ff77e9',
      bermuda: '#78dcca',
      black: '#0c0a09',
      gray: '#C0C0C0',
      blue_sky: '#7dd3fc',
      blue_sky_strong: '#0ea5e9',
      green: '#22c55e',
      gray_strong: '#6b7280',
      blue_dark: '#1E5480',
      gray_weak:'#D9D9D9',
      dark_gray: '#A9A9A9'
      


      
    }
  },
  plugins: [],
}
