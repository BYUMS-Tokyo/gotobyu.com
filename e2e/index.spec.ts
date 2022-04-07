import { test, expect } from '@e/e2e.fixture';

test('visual regression test', async ({ screenshotPage }) => {
  await screenshotPage.init('/');
  // tick the clock ahead to type "にはどうやって入学するの?"
  await screenshotPage.page.evaluate(async () =>
    window.__clock.tickAsync(75 * 13),
  );

  const screenshot = await screenshotPage.screenshot();

  expect(screenshot).toMatchSnapshot('init.png');
});
