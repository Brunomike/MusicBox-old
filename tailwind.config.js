/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bluish': '#2DCEEF',
        'purple_1': '#9B2DEF',
        'bluish_1': '#35EDFB'
      },
      backgroundImage: theme => ({
        'phone_finder': "url('/assets/images/phone_finder.png')",        
      }),
      screens:{
        'xs':'280px',
        'sm':'640px',
        'md':'768px',
        'lg':'1024px',
        'xl':'1280px',
        '2xl':'1536px',
      }
    },
  },
  plugins: [],
};

//#2DCEEF
