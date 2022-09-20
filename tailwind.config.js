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
      screens: {
        // 'xs': '280px',
        // 'sm': '480px',
        // 'md': '768px',
        // 'lg': '976px',
        // 'xl': '1440px',
        sm:'480px',
        md:'768px',
        lg:'976px',
        xl:'1440px',
      }
    },
  },
  plugins: [],
};
