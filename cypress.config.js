const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000",
      // implement node event listeners here
    },
    viewportWidth: 1920,
    viewportHeight: 1080,
  });