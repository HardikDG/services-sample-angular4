import { ServiceSamplePage } from './app.po';

describe('service-sample App', () => {
  let page: ServiceSamplePage;

  beforeEach(() => {
    page = new ServiceSamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
