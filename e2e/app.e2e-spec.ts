import { YyzPage } from './app.po';

describe('yyz App', () => {
  let page: YyzPage;

  beforeEach(() => {
    page = new YyzPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
