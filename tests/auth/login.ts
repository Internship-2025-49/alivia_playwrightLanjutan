import { expect, type Locator, type Page } from "@playwright/test";

export class PlaywrightLoginPage {
  readonly page: Page;
  readonly goToSignin: Locator;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator('input[placeholder="Masukkan Username"]');
    this.passwordInput = page.locator('input[placeholder="Masukkan Password"]');
    this.loginButton = page.locator("button", { hasText: "Masuk" });
  }

  // Metode untuk login
  async login(username: string, password: string) {
    await this.usernameInput.fill(username); // Mengisi username
    await this.passwordInput.fill(password); // Mengisi password
    await this.loginButton.click(); // Mengklik tombol login
  }
}

// readonly page: Page;
// readonly goToSignin: Locator;
// readonly loginButton: Locator;
// readonly cekLoginPage: Locator;
// readonly toDashboard: Locator;
// readonly emailInput: Locator;
// readonly passwordInput: Locator;
