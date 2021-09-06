const { alias } = require("react-app-rewire-alias");

module.exports = {
  webpack: config => {
    alias({
      "@assets": "./public/assets",
      "@dist": "./src/components/dist",
      "@elements": "./src/components/elements",
      "@tabs": "./src/components/tabs",
      "@css": "./src/css"
    })(config)

    return config;
  }
}