module.exports = {
  type: 'react-component',
  npm: {
    esModules: false,
    umd: {
      global: 'DayRotator',
      externals: {
        react: 'React'
      }
    }
  }
}
