/* eslint-env node */

/* eslint-env node */

import { test, expect } from '@playwright/test';
import path from 'path';

test('button click updates message', async ({ page }) => {
  // Build an absolute path to index.html
  const filePath = path.resolve(__dirname, '../index.html');

  // Convert Windows-style paths (C:\...) to a valid file:// URL
  const fileUrl = 'file:///' + filePath.replace(/\\/g, '/');

  await page.goto(fileUrl);

  await page.click('#clickMe');
  await expect(page.locator('#message')).toHaveText('Button clicked!');
});

