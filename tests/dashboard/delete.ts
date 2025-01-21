import { expect, Locator, Page } from "@playwright/test";

export class PlaywrightDeletePage {
  readonly page: Page;
  readonly deletePasienButton: Locator;
  readonly checkPasien: Locator;

  constructor(page: Page) {
    this.page = page;
    this.deletePasienButton = page.locator("form").getByRole("button").last();
    this.checkPasien = page.getByText("Pasien berhasil dihapus.");
  }

  // Fungsi untuk mengklik tombol delete
  async deletePasien() {
    await this.deletePasienButton.click();
    await expect(this.checkPasien).toBeVisible();
  }
}
