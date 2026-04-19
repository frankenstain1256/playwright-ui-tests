import { test, expect } from '@playwright/test';

test('Login with valid credentials is successful', async ({ page }, testInfo) => {
  // 1. Open the login page
  await page.goto('https://the-internet.herokuapp.com/login');

  // 2. Enter valid username and password
  await page.fill('#username', 'tomsmith');
  await page.fill('#password', 'SuperSecretPassword!');

  // Submit the form
  await page.click('button[type="submit"]');

  // 3. Verify successful login message
  const successMessage = page.locator('#flash');

  await expect(successMessage).toBeVisible();
  await expect(successMessage).toContainText('You logged into a secure area!');
  
  // 4. Creating screenshot
  const timestamp = new Date().toISOString().replace(/:/g, '-');
  await page.screenshot({
    path: testInfo.outputPath(`login-positive-${timestamp}.png`),
  });
});