module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {},
    backgroundColor: theme => ({
      nativeBlue: '#1549FF',
      black: '#000',
    }),
    borderRadius: {
      'circle': '50px',
    }
  },
  variants: {},
  plugins: [],
}
