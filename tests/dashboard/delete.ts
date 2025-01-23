import { expect, Locator, Page } from "@playwright/test";

export class PlaywrightDeletePage {
  readonly page: Page;
  readonly deletePasienButton: Locator;
  readonly deleteRekamMedisButton: Locator;
  readonly deleteTindakanButton: Locator;
  readonly deleteObatButton: Locator;
  readonly deleteKunjunganButton: Locator;
  readonly deleteDokterButton: Locator;
  readonly deletePoliklinikButton: Locator;
  readonly deleteLaboratoriumButton: Locator;

  readonly checkPasien: Locator;
  readonly checkRekamMedis: Locator;
  readonly checkTindakan: Locator;
  readonly checkObat: Locator;
  readonly checkKunjungan: Locator;
  readonly checkDokter: Locator;
  readonly checkPoliklinik: Locator;
  readonly checkLaboratorium: Locator;

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

    this.deleteObatButton = page.locator("form").getByRole("button").last();
    this.checkObat = page.getByText("Obat berhasil dihapus.");

    this.deleteKunjunganButton = page
      .locator("form")
      .getByRole("button")
      .last();
    this.checkKunjungan = page.getByText("Kunjungan berhasil dihapus.");

    this.deleteDokterButton = page.locator("form").getByRole("button").last();
    this.checkDokter = page.getByText("Dokter berhasil dihapus.");

    this.deletePoliklinikButton = page
      .locator("form")
      .getByRole("button")
      .last();
    this.checkPoliklinik = page.getByText("Poliklinik berhasil dihapus.");

    this.deleteLaboratoriumButton = page
      .locator("form")
      .getByRole("button")
      .last();
    this.checkLaboratorium = page.getByText(
      "Data Laboratorium berhasil dihapus."
    );
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

  async deleteObat() {
    await this.deleteObatButton.click();
    await expect(this.checkObat).toBeVisible();
  }

  async deleteKunjungan() {
    await this.deleteKunjunganButton.click();
    await expect(this.checkKunjungan).toBeVisible();
  }

  async deleteDokter() {
    await this.deleteDokterButton.click();
    await expect(this.checkDokter).toBeVisible();
  }

  async deletePoliklinik() {
    await this.deletePoliklinikButton.click();
    await expect(this.checkPoliklinik).toBeVisible();
  }

  async deleteLaboratorium() {
    await this.deleteLaboratoriumButton.click();
    await expect(this.checkLaboratorium).toBeVisible();
  }
}
