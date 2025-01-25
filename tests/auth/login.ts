import { expect, type Locator, type Page } from "@playwright/test";

export class PlaywrightLoginPage {
  readonly page: Page;
  readonly cekLoginPage: Locator;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly toDashboard: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cekLoginPage = page.locator("h3", { hasText: "Rekam Medis" });
    this.usernameInput = page.locator('input[placeholder="Masukkan Username"]');
    this.passwordInput = page.locator('input[placeholder="Masukkan Password"]');
    this.loginButton = page.locator("button", { hasText: "Masuk" });
  }

  async toLoginPage() {
    await expect(this.page).toHaveURL("/login");
    await expect(this.cekLoginPage).toBeVisible();
  }

  // Metode untuk login
  async inputLogin(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async toDashboardPage() {
    await expect(this.page).toHaveURL("http://127.0.0.1:8000/dashboard");
  }
}
