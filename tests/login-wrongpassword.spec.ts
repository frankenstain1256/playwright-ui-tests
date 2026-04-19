import { test, expect } from '@playwright/test';

test('Login with invalid password shows error message', async ({ page }, testInfo) => {
  // 1. Open the login page
  await page.goto('https://the-internet.herokuapp.com/login');

  // 2. Enter valid username and password
  await page.fill('#username', 'tomsmith');
  await page.fill('#password', 'SuperSecretPassword');

  // Submit the form
  await page.click('button[type="submit"]');

  // 3. Verify that an error message appears
  const errorMessage = page.locator('#flash');

  await expect(errorMessage).toBeVisible();
  await expect(errorMessage).toContainText('Your password is invalid');
  
  // 4. Creating screenshot
  const timestamp = new Date().toISOString().replace(/:/g, '-');
  await page.screenshot({
    path: testInfo.outputPath(`login-wrongpassword-${timestamp}.png`),
  });
});