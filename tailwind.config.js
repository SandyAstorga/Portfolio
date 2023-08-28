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
      rubikG: ['Rubik Glitch', 'cursive'],
      rubik: ['Rubik', 'cursive']
    },
    colors: {
      'purple': '#A2678A',
      'purple-black': '#18122B',
      'purple-dark': '#4D3C77',
      'black': '#000000',
      'white': '#FFFFFF',
      'wine': '#3F1D38'
    },
    extend: {
      keyframes: {
        "fade-in-y": {
          "0%": { opacity: 0, transform: "translateY(10px)" },
          "100%": { opacity: 1, transform: "translateY(0px)" },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        "fade-in-x": {
          "0%": { opacity: 0, transform: "translateX(10px)" },
          "100%": { opacity: 1, transform: "translateX(0px)" },
        },
      },
      animation: {
        "fade-in-y": "fade-in-y 1s linear",
        wiggle: 'wiggle 1s ease-in-out infinite',
        "fade-in-x": "fade-in-x 1s linear",
      },
      
    },
  },
  plugins: []
}

