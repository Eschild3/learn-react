/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      colors: {
        'raisin-black': '#242124',
        'sunset': '#fdd692',
        'burnt-sienna': '#ec7357',
        'cambridge-blue': '#6bab90',
        'viridian': '#55917f',
      },
      backgroundImage: {
        'gradient-top': 'linear-gradient(0deg, #242124, #fdd692, #ec7357, #6bab90, #55917f)',
        'gradient-right': 'linear-gradient(90deg, #242124, #fdd692, #ec7357, #6bab90, #55917f)',
        'gradient-bottom': 'linear-gradient(180deg, #242124, #fdd692, #ec7357, #6bab90, #55917f)',
        'gradient-left': 'linear-gradient(270deg, #242124, #fdd692, #ec7357, #6bab90, #55917f)',
        'gradient-top-right': 'linear-gradient(45deg, #242124, #fdd692, #ec7357, #6bab90, #55917f)',
        'gradient-bottom-right': 'linear-gradient(135deg, #242124, #fdd692, #ec7357, #6bab90, #55917f)',
        'gradient-top-left': 'linear-gradient(225deg, #242124, #fdd692, #ec7357, #6bab90, #55917f)',
        'gradient-bottom-left': 'linear-gradient(315deg, #242124, #fdd692, #ec7357, #6bab90, #55917f)',
        'gradient-radial': 'radial-gradient(circle, #242124, #fdd692, #ec7357, #6bab90, #55917f)',
      },
    },
  },
  plugins: [],
}

