module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      width: {
        'infoBox': '48%',
        'contactTextBox': '70%',
        'imageLarge': '350px',
        'imageMedium': '250px',
      },
      margin: {
        AbsoluteImageMargin: '364px',
      },
      lineHeight: {
        'large': '240px',
        'medium': '170px',
        'small': '120px',
        'verySmall': '70px',
      },
      fontSize: {
        '5xl': '2.8rem',
        '6xl': '3.8rem',
        'veryLarge': '248px',
        'medium': '200px',
        'small': '150px',
        'verySmall': '70px',
      },
      textColor: {
        'orange': '#FF7A00'
      }
    },
    backgroundColor: theme => ({
      orangeBackground: '#FF7A00',
      nativeBlue: '#1549FF',
      black: '#000',
      white: '#fff',
    }),
    borderRadius: {
      'circle': '50px',
    },
    height: {
      imageBox: '757px',
      xlImageBox: '589px',
      circle: '1rem',
    },
    fontFamily: {
      'TeX-Regular': ['TeX-Regular'],
      'VT323-Regular': ['VT323-Regular'],
    }
  },
  variants: {},
  plugins: [],
}
