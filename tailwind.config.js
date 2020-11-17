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
      imageBox: '792px',
    },
    fontSize: {
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '6xl': '4rem',
      'veryLarge': '300px',
    }
  },
  variants: {},
  plugins: [],
}
