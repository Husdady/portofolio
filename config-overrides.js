const { alias } = require('react-app-rewire-alias')

module.exports = {
  webpack: (config) => {
    alias({
      '@styles': './src/styles',
      '@assets': './public/assets',
      '@services': './src/services',
      '@hooks': './src/hooks/_exports',
      '@layouts': './src/components/layouts',
      '@common': './src/components/common/_exports',
    })(config)

    return config
  },
}
