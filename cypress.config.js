const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1330,
  viewportHeight: 1240,
  defaultCommandTimeout: 5000,
  pageLoadTimeout: 30000,
  chromeWebSecurity: false,
  e2e: {
    baseUrl: "http://localhost:4200",
    browser: "chrome",
    setupNodeEvents(on, config) {
      const version = config.env.VERSION || 'local'

      const urls = {
        local: "http://localhost:4200",
        staging: "https://staging.example.com",
        prod: "https://example.com"
      }

      // choosing version from urls object
      config.baseUrl = urls[version]
    },
  },
});
