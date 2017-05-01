import { OptimizationsPage } from './app.po';

describe('optimizations App', () => {
  let page: OptimizationsPage;

  beforeEach(() => {
    page = new OptimizationsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
