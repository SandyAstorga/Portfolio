/** @type {import('tailwindcss').Config} */
export default {
  content: [
  "./index.html",
  "./src/**/*.{js,jsx}",
],  
  theme: {
    fontFamily: {
      architect: ['Architects Daughter', 'sans-serif'],
      handjet: ['Handjet', 'sans-serif'],
      kalam: ['Kalam', 'sans-serif'],
      rubikG: ['Rubik Glitch','cursive'],
      rubik: ['Rubik','cursive']
    },
    colors: {
      'purple': '#A2678A',
      'purple-black': '#18122B',
      'purple-dark': '#4D3C77',
      'black': '#000000',
      'white': '#FFFFFF',
      'wine': '#3F1D38'
    },
    extend: {},
  },
  plugins: [
      // Define tus propios gradientes con la notación degradado cónico.
      // Esto es solo un ejemplo, debes ajustarlo según tus necesidades.
      {'conic-md': ['conic-gradient(from 180deg at 50% 50.00%, #443C68 0deg, rgba(68, 60, 104, 0.00) 359.92798805236816deg, rgba(68, 60, 104, 0.16) 359.9639940261841deg)']}
  ],
}

