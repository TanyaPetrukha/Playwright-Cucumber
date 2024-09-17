# Project Setup and Testing Guide
===============================

1. Installing Playwright
-------------------------

Install Playwright:
```bash
npm i -D @playwright/test
```

install supported browsers:
```bash
npx playwright install
```

2. Installing Cucumber and Configuring
-------------------------

Install Cucumber and create the cucumber.js configuration file:
```bash
npm i -D @cucumber/cucumber
```

3. Supporting TypeScript
-------------------------

Install TypeScript-related packages and create a tsconfig.json file(optional, my test don't run without it):
```bash
npm i -D @cucumber/cucumber
```
4. Adding Test Command to package.json
-------------------------

Add the following script to your package.json to run tests with Cucumber:
```TS
"scripts": {
  "test:chrome": "cucumber-js --config cucumber.js"
}
```
5. Setting Up world.ts
-------------------------

world.ts is a basic file for storing variables such as the browser and page.


6. Configuring hooks.ts
-------------------------

hooks.ts is used to open and close the browser before and after each test.

7. Installing Cucumber Reporter
-------------------------

Install the Cucumber HTML reporter and create a reporter-config.js configuration file. Update the scripts in your package.json:
```bash
npm install cucumber-html-reporter --save-dev
```
```ts
"scripts": {
  "test": "cucumber-js --format json:./cucumber-report.json",
  "report": "node reporter-config.js"
}
```

8. Running Tests and Generating Reports
-------------------------

Run your tests with:
```bash
npm test
```
Generate the report with:
```bash
npm run report
```

***Note*** Also other way for cucumber reporting that I have not checked yet

Generates Cucumber html report. Configure reporter in playwright.config.js:
```js
import { defineConfig } from '@playwright/test';
import { defineBddConfig, cucumberReporter } from 'playwright-bdd';

const testDir = defineBddConfig({
  features: 'features/*.feature',
  steps: 'steps/*.ts',
});

export default defineConfig({
  testDir,
  reporter: [
    cucumberReporter('html', { outputFile: 'cucumber-report/report.html' }),  
  ],
});
```




