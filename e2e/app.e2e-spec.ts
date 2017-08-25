import { WeatherdemoPage } from './app.po';

describe('weatherdemo App', () => {
  let page: WeatherdemoPage;

  beforeEach(() => {
    page = new WeatherdemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
