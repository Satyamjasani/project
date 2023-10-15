/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './src/features/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/ui/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily:{
        sans:['var(--font-noto)',...fontFamily.sans]
      },
      boxShadow: {
        box:'0 -3px 5px 0px rgba(0, 0, 0, 0.1)',
        'box-dark':'0 0px 5px -5px rgba(255, 255, 255, 0.9)'
      }
    },
    screens: {
      sm: { min: "0px", max: "480px" },
      md: { min: "481px", max: "768px" },
      "2md": { min: "769px", max: "820px" },
      lg: { min: "821px", max: "976px" },
      "2lg": { min: "977px", max: "1140px" },
      xl: { min: "1141px", max: "1190px" },
      "2xl": { min: "1191px", max: "1300px" },
      "3xl": { max: "1301px" },
      tsm: { min: "0px", max: "820px" },
      tmd: { min: "821px", max: "1140px" },
      tlg: { min: "1141px", max: "1300px" },
    },
    colors:{
      'primary':{
        DEFAULT:'#000000',
        '50':'black',
        '100':'black',
        '200':'black',
        '300':'black',
        '400':'black',
        '500':'black',
        '600':'black',
        '700':'black',
        '800':'black',
        '900':'black'
      },
      secondary:{
        DEFAULT:'white',
        '50':'white',
        '100':'white',
        '200':'white',
        '300':'white',
        '400':'white',
        '500':'white',
        '600':'white',
        '700':'white',
        '800':'white',
        '900':'white',
        '950':'white'
      },
      txt:{
        DEFAULT:'white',
        50:'white',
      },
      error: {
        DEFAULT: "red",
        shadow:"red"
      },
      bb:{
        DEFAULT:'black',
        dark:'black'
      },
      glass:'rgba(255,255,255,0.13)',
      ...colors,
    },
  },
  plugins: [
  ],
}
