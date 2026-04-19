import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  projects: [
    {
      name: 'Chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'Firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'WebKit',
      use: {
		  ...devices['Desktop Safari'],
          ignoreHTTPSErrors: true },
    },
  ],
  use: {
    launchOptions: {
      slowMo: 1000,
    },
  },
  outputDir: `test-results/run-${new Date().toISOString().replace(/:/g, '-')}`,
});