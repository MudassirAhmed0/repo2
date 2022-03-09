module.exports = {
  purge: ["./pages/*/.{js,ts,jsx,tsx}", "./components/*/.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
   
    
    extend: { 
      fontSize:{
        '4xl': ['40px', {
          lineHeight: '50px',
        }],
      },
      colors:{
        grey:'#24343f',
        blue:'#0054a6',
        yellow:'#FFC20E',
        shadaw:"#00000029",
        cardTopYellow:'#FFC22E',
        offWhite:'#f3f3f3',
        borderGrey:"#EBEBEB",
        black:'#1c1c1c',
        white40Opa:"#ffffff40"
      },
    },
  },
  plugins: [],
}
