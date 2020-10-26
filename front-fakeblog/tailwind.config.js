module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {},
  },
  variants: {
    animation: ['responsive', 'motion-safe', 'motion-reduce'],
    backgroundColor: ['responsive', 'hover', 'focus', 'active', 'group-focus'],
    textColor: ['responsive', 'hover', 'focus', 'active', 'group-focus', 'focus-within'],
  },
  plugins: [],
}
