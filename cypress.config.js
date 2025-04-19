const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.automationexercise.com',
    supportFile: 'cypress/support/e2e.js',
    fixturesFolder: 'cypress/fixtures',
    specPattern: 'cypress/integration/tests/*.spec.js'
  },
  screenshotOnRunFailure: true,
  env: {
    allure: true,
    allureResultsPath: 'allure-results',
  },
  reporter: 'cypress-allure-plugin',
  reporterOptions: {
    outputFolder: 'allure-results',
  }
});
