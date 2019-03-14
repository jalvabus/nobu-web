import { NobuPage } from './app.po';

describe('nobu App', () => {
  let page: NobuPage;

  beforeEach(() => {
    page = new NobuPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
