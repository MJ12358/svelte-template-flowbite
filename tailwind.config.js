const production = !process.env.ROLLUP_WATCH;

module.exports = {
  content: [
    "./src/**/*.{html,js,svelte,ts}",
    "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}"
  ],

  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true
  },

  theme: {
    extend: {}
  },

  variants: {
    extend: {}
  },

  plugins: [
    require('flowbite/plugin')
  ],
};