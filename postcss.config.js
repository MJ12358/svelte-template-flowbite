const production = !process.env.ROLLUP_WATCH;

module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    ...production ? { cssnano: {} } : {}
  }
}