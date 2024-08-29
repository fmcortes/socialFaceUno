import test, { expect } from '@playwright/test';
import { LoginPage } from './page-objects/login-po';

test.describe('Login Page', () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.visit();
  });

  test('Should Login', async ({ page }) => {
    await page.getByTestId('email-field').fill('kamui1@mail.com');
    await page.getByTestId('password-field').fill('kamui1');
    await page.getByTestId('submit-button').click();
    await page.waitForURL(/\home/);
    expect(page).toHaveURL(/\home/);
  });

  test('Should show errors if fields are empty', async ({ page }) => {
    await test.step('Clicking on email input and tabing away', async () => {
      const emailIpunt = await page.getByTestId('email-field');
      emailIpunt.click();
      await emailIpunt.blur();
    });
    await test.step('Clicking on password  input and tabing away', async () => {
      const passwordInput = await page.getByTestId('password-field');
      await passwordInput.click();
      await passwordInput.blur();
    });

    await expect(await page.getByTestId('email-error-message')).toBeVisible();
    await expect(
      await page.getByTestId('password-error-message')
    ).toBeVisible();
  });

  test('Should navigate to register page', async ({ page }) => {
    await page.getByTestId('register-link').click();
    await page.waitForURL(/\/auth\/register/);
    expect(page).toHaveURL(/\/auth\/register/);
  });

  test('Should navigate to forgot page', async ({ page }) => {
    await page.getByTestId('forgot-link').click();
    await page.waitForURL(/\/auth\/forgot/);
    expect(page).toHaveURL(/\/auth\/forgot/);
  });
});
