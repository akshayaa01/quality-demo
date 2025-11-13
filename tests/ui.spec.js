/* eslint-env node */

import { test, expect } from '@playwright/test';

test('button click updates message', async ({ page }) => {
  await page.goto('file://../index.html');

  await page.click('#clickMe');
  await expect(page.locator('#message')).toHaveText('Button clicked!');
});

