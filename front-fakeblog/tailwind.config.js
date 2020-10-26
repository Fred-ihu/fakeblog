module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [
    "./pages/**/*.js", 
    "./components/**/*.js", 
    "./plugins/**/*.js",
    "./static/**/*.js",
    "./store/**/*.js"
  ],
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
