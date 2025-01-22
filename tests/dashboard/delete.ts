import { expect, Locator, Page } from "@playwright/test";

export class PlaywrightDeletePage {
  readonly page: Page;
  readonly deletePasienButton: Locator;
  readonly deleteRekamMedisButton: Locator;
  readonly deleteTindakanButton: Locator;
  readonly checkPasien: Locator;
  readonly checkRekamMedis: Locator;
  readonly checkTindakan: Locator;

  constructor(page: Page) {
    this.page = page;
    this.deletePasienButton = page.locator("form").getByRole("button").last();
    this.checkPasien = page.getByText("Pasien berhasil dihapus.");

    this.deleteRekamMedisButton = page
      .locator("form")
      .getByRole("button")
      .last();
    this.checkRekamMedis = page.getByText("Rekam medis berhasil dihapus.");

    this.deleteTindakanButton = page.locator("form").getByRole("button").last();
    this.checkTindakan = page.getByText("Tindakan berhasil dihapus.");
  }

  // Fungsi untuk mengklik tombol delete
  async deletePasien() {
    await this.deletePasienButton.click();
    await expect(this.checkPasien).toBeVisible();
  }

  async deleteRekamMedis() {
    await this.deleteRekamMedisButton.click();
    await expect(this.checkRekamMedis).toBeVisible();
  }

  async deleteTindakan() {
    await this.deleteTindakanButton.click();
    await expect(this.checkTindakan).toBeVisible();
  }
}
