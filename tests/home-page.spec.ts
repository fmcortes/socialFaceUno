import test, { expect } from '@playwright/test';
import { LoginPage } from './page-objects/login-po';

test.describe('Home page', () => {
  test.only('should login and navigate home', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await test.step('Login', async () => {
      await loginPage.visit();
      await loginPage.login();
    });
    await page.waitForURL(/\home/);
    await page.waitForLoadState('domcontentloaded');
    expect(page).toHaveURL(/\home/);
    const countPosts = await page.getByTestId('post-item');
    expect(await countPosts.count()).toBe(10);
    await expect(await page.getByTestId('post-list-container')).toBeTruthy();
  });
});
