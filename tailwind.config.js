module.exports = {
   content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./Components/**/*.{js,ts,jsx,tsx}",
  ],
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
