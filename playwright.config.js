const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests/integration',
  timeout: 30000,
  expect: { timeout: 7000 },
  fullyParallel: true,
  reporter: [['list']],
  use: {
    baseURL: 'http://localhost:5050',
    actionTimeout: 7000
  },
  webServer: {
    command: 'node tests/static-server.mjs',
    port: 5050,
    reuseExistingServer: true,
    timeout: 30000
  },
  projects: [
    { name: 'chromium', use: { browserName: 'chromium' } }
  ]
});
