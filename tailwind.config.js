/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      darkGrayBg: '#F1F3F5',
      mainBgColor: '#1F78FF',
      textActiveColor: '#4993DD',
      white: '#fff',
      black: '#000'
    },
    fontFamily:{
      'inter': ['Inter'],
      'gilroy': 'Gilroy-Bold',
    },
    extend: {},
  },
  plugins: [],
}

