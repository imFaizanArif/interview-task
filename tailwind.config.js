/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "layer-1": '#B8DD00',
        "layer-2": '#00111A',
        "layer-3": '#6E737A',
        "layer-4": '#181D27',
        "layer-5": '#054465',
        "layer-6": '#191C23',
        "layer-7": '#122136',
        "layer-8": '#F6F6F7',
        "layer-9": '#E9E9EC',
      }
    },
    backgroundImage: {
      "hero2": "url('./assets/images/hero2.svg')",
      "wordCover1": "url('./assets/images/wordCover1.svg')",
      "wordCover2": "url('./assets/images/wordCover2.svg')",
    }

  },
  plugins: [
    require('tailwindcss-animated')
  ],
}