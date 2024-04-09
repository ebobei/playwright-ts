export default class BrowserHelper {
  async browserClean(page) {
    await page.context.clearCookies();
    await page.evaluate(() => {
      localStorage.clear();
    });
  }
}