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
      },
      lineHeight: {
        'large': '270px',
      },
      fontSize: {
        '5xl': '2.8rem',
        '6xl': '3.8rem',
        'veryLarge': '300px',
      }
    },
    backgroundColor: theme => ({
      nativeBlue: '#1549FF',
      black: '#000',
    }),
    borderRadius: {
      'circle': '50px',
    },
    height: {
      imageBox: '757px',
      xlImageBox: '589px',
      circle: '1rem',
    },
  },
  variants: {},
  plugins: [],
}
