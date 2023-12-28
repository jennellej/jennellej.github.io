/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'jenny_blue': '#092147',
      'jenny_white': '#fbf6ec',
      'jenny_red': '#91093b',
      'jenny_gold': '#eb9a05',
      'jenny_purple': '#9eaacb',
    },
    fontFamily: {
      honeypirls_regular: ['Honeypirls Regular', 'sans-serif'], 
    },
    extend: {},
  },
  plugins: [],
}

