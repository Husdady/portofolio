const { alias } = require("react-app-rewire-alias");

module.exports = {
  webpack: (config) => {
    alias({
      "@styles": "./src/styles",
      "@assets": "./public/assets",
      "@tabs": "./src/tabs/_exports",
      "@hooks": "./src/hooks/_exports",
      "@common": "./src/components/common/_exports",
      "@layout": "./src/components/layout/_exports",
    })(config)

    return config;
  }
}