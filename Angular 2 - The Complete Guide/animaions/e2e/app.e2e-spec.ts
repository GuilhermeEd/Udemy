import { AnimaionsPage } from './app.po';

describe('animaions App', () => {
  let page: AnimaionsPage;

  beforeEach(() => {
    page = new AnimaionsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
