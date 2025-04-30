import { defineConfig } from "cypress";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import { createEsbuildPlugin } from "@badeball/cypress-cucumber-preprocessor/esbuild";
import mochawesomeReporterPlugin from "cypress-mochawesome-reporter/plugin.js";

export default defineConfig({
  e2e: {
    baseUrl: "https://automationexercise.com/",
    specPattern: "cypress/e2e/**/*.spec.js",
    supportFile: false,
    videosFolder: "cypress/videos",
    screenshotsFolder: "cypress/screenshots",
    downloadsFolder: "cypress/downloads",
    fixturesFolder: "cypress/fixtures",
    reporter: "cypress-mochawesome-reporter",
    reporterOptions: {
      reportDir: "cypress/reports",
      overwrite: false,
      html: true,
      json: true
    },
    video: true,
    screenshotOnRunFailure: true,
    trashAssetsBeforeRuns: true
  },

  async setupNodeEvents(on, config) {
    await addCucumberPreprocessorPlugin(on, config);
    mochawesomeReporterPlugin(on);
    on(
      "file:preprocessor",
      createBundler({
        plugins: [createEsbuildPlugin(config)],
      })
    );
    return config;
  }
});
