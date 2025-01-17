import { expect, type Locator, type Page } from "@playwright/test";

export class PlaywrightDashboardPage {
  readonly page: Page;
  readonly checkTitleDashboard: Locator;
  

  constructor(page: Page) {
    this.page = page;
    this.checkTitleDashboard = page.locator("")
  }

  // Metode untuk login
  async login() {
  }
}
