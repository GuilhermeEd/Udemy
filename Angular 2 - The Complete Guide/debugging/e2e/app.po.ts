import { browser, element, by } from 'protractor';

export class DebuggingPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('dbg-root h1')).getText();
  }
}
