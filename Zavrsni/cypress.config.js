const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {

    "baseUrl": "https://cypress-api.vivifyscrum-stage.com/",
    "env": {
      "validLoginEmail": "tt@tt.tt",
      "validLoginPassword": "ttttttt8"
    },

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});