import { test, expect } from '@e/e2e.fixture';

test('visual regression test', async ({ screenshotPage }) => {
  await screenshotPage.init('/schools/byui');

  const screenshot = await screenshotPage.screenshot();

  expect(screenshot).toMatchSnapshot('init.png');
});
