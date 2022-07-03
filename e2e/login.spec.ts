import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('localhost:3000');
});

test('Should be able to login', async ({ page }) => {
    const emailInput = await page.locator('input').nth(0);
1   // fill the emailInput
    await emailInput.type('robert@pretension.io');

    const passwordInput = await page.locator('input').nth(1);
    // fill the passwordInput
    await passwordInput.type('password');

    // click the login button
    const loginButton  = await page.locator('button', {hasText: 'Login'});
    await loginButton.click();

    // expect the button text to be 'Logout'
    const button = await page.locator('button');
    expect(await button.innerText()).toBe('Logout');});
    