import { TestigPage } from './app.po';

describe('testig App', () => {
  let page: TestigPage;

  beforeEach(() => {
    page = new TestigPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
