/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      colors: {
        'raisin-black': '#242124',
        'vibrant-purple': '#5E17EB',
        'bright-blue': '#1893F8',
        'cool-lavendar': '#B8AEF3',
        'ice-blue': '#aed9fd',
      },
      backgroundImage: {
        'gradient-top': 'linear-gradient(0deg, #242124, #5E17EB, #1893F8, #B8AEF3, #aed9fd)',
        'gradient-right': 'linear-gradient(90deg, #242124, #5E17EB, #1893F8, #B8AEF3, #aed9fd)',
        'gradient-bottom': 'linear-gradient(180deg, #242124, #5E17EB, #1893F8, #B8AEF3, #aed9fd)',
        'gradient-left': 'linear-gradient(270deg, #242124, #5E17EB, #1893F8, #B8AEF3, #aed9fd)',
        'gradient-top-right': 'linear-gradient(45deg, #242124, #5E17EB, #1893F8, #B8AEF3, #aed9fd)',
        'gradient-bottom-right': 'linear-gradient(135deg, #242124, #5E17EB, #1893F8, #B8AEF3, #aed9fd)',
        'gradient-top-left': 'linear-gradient(225deg, #242124, #5E17EB, #1893F8, #B8AEF3, #aed9fd)',
        'gradient-bottom-left': 'linear-gradient(315deg, #242124, #5E17EB, #1893F8, #B8AEF3, #aed9fd)',
        'gradient-radial': 'radial-gradient(circle, #242124, #5E17EB, #1893F8, #B8AEF3, #aed9fd)',
      },
    },
  },
  plugins: [],
}

