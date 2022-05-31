const { alias } = require('react-app-rewire-alias')

module.exports = {
  webpack: (config) => {
    alias({
      '@assets': './src/assets',
      '@styles': './src/assets/styles',
      '@services': './src/services',
      '@hooks': './src/hooks/_exports',
      '@layouts': './src/components/layouts',
      '@common': './src/components/common/_exports',
    })(config)

    return config
  },
}
