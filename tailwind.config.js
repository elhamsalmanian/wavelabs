const theme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: "jit",
  darkMode: "class",
  content: [    
      "./pages/**/*.{js,ts,jsx,tsx}",    
      "./components/**/*.{js,ts,jsx,tsx}",  
      "./containers/**/*.{js,ts,jsx,tsx}",  
    ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      backgroundImage: theme => ({
        'banner-md': "url('/images/WL-mobile-banner.jpg')",
        'banner-lg': "url('/images/WL-desktop-banner.jpg')",
        'banner-xl': "url('/images/WL-desktop-banner.jpg')",
      }),
      colors: {
        'gray-rgba-50': 'rgba(0, 0, 0, 0.5)',
        'gray-rgba-60': 'rgba(0, 0, 0, 0.6)',
        'gray-rgba-70': 'rgba(0, 0, 0, 0.7)',
        'gray-rgba-80': 'rgba(0, 0, 0, 0.8)',       
        
        'white-rgba-50': 'rgba(255, 255, 255, 0.5)',
        'white-rgba-70': 'rgba(255, 255, 255, 0.8)',

        'black-rgba-50': 'rgba(0, 0, 0, 0.5)',
        'black-rgba-70': 'rgba(0, 0, 0, 0.8)'
      },
      fontFamily: {
        sans: ['"Open Sans"', ...theme.fontFamily.sans]
      },
      
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    
  ]
}