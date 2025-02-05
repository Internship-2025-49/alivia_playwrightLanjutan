import { expect, type Locator, type Page } from "@playwright/test";

export class PlaywrightLogoutPage {
  readonly page: Page;
  readonly cekLogoutPage: Locator;
  readonly logoutButton: Locator;
  readonly toDashboard: Locator;
  readonly cekLoginPage: Locator;
  readonly cekProfil: Locator;

  constructor(page: Page) {
    this.page = page;
    this.logoutButton = page
      .locator("div")
      .filter({ hasText: "Profil Logout" });
    this.cekProfil = page.getByRole("button", { name: "Profil" });
    this.cekLogoutPage = page.getByRole("link", { name: "Logout" });
    this.cekLoginPage = page.locator("h3", { hasText: "Rekam Medis" });
  }

  async toLogoutPage() {
    await this.cekProfil.click();
    await expect(this.cekLogoutPage).toBeVisible();
    await this.cekLogoutPage.click();
  }
}
