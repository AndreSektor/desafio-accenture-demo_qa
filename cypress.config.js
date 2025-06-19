const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin = require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;
const { tagify } = require('cypress-tags');


module.exports = defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);
      on('before:run', (details) => {
        if (process.env.TAGS) {
          config.env.TAGS = process.env.TAGS;
        }
      });
      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );
      return config;
    },
    specPattern: "cypress/e2e/step_definitions/*.feature",
    video: true, 
    videosFolder: 'cypress/videos',
    pageLoadTimeout: 90000,
    viewportWidth: 2000,
    viewportHeight: 1300
  },
});