import { test, expect } from '@playwright/test';

test('Login with invalid credentials shows error message', async ({ page }, testInfo) => {
  // 1. Open the login page
  await page.goto('https://the-internet.herokuapp.com/login');

  // 2. Enter incorrect username and password
  await page.fill('#username', 'wrongUser');
  await page.fill('#password', 'wrongPassword');

  // Submit the form
  await page.click('button[type="submit"]');

  // 3. Verify that an error message appears
  const errorMessage = page.locator('#flash');

  await expect(errorMessage).toBeVisible();
  await expect(errorMessage).toContainText('Your username is invalid');

  // 4. Creating screenshot
  const timestamp = new Date().toISOString().replace(/:/g, '-');
  await page.screenshot({
    path: testInfo.outputPath(`login-negative-${timestamp}.png`),
  });
});