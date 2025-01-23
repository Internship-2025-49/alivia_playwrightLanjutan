import { expect, type Locator, type Page } from "@playwright/test";
import { exec } from "child_process";

export class PlaywrightSidebarPage {
  readonly page: Page;
  readonly goToPasien: Locator;
  readonly goToRekamMedis: Locator;
  readonly goToObat: Locator;
  readonly goToTindakan: Locator;
  readonly goToKunjungan: Locator;
  readonly goToDokter: Locator;
  readonly goToPoliKlinik: Locator;
  readonly goToLaboratorium: Locator;

  constructor(page: Page) {
    this.page = page;
    this.goToPasien = page.locator("a", { hasText: "Pasien" });
    this.goToRekamMedis = page.locator(
      'a.sidebar-link:has-text("Rekam Medis")'
    );
    this.goToTindakan = page.locator('a.sidebar-link:has-text("Tindakan")');
    this.goToObat = page.locator('a.sidebar-link:has-text("Obat")');
    this.goToKunjungan = page.locator('a.sidebar-link:has-text("Kunjungan")');
    this.goToDokter = page.locator('a.sidebar-link:has-text("Dokter")');
    this.goToPoliKlinik = page.locator('a.sidebar-link:has-text("Poliklinik")');
    this.goToLaboratorium = page.locator(
      'a.sidebar-link:has-text("Laboratorium")'
    );
  }

  async cekPasien() {
    await expect(this.goToPasien).toBeVisible();
    await this.goToPasien.click();
  }

  async cekRekamMedis() {
    await expect(this.goToRekamMedis).toBeVisible();
    await this.goToRekamMedis.click();
    await expect(this.page).toHaveURL("http://127.0.0.1:8000/rekam-medis");
  }

  async cekTindakan() {
    await expect(this.goToTindakan).toBeVisible();
    await this.goToTindakan.click();
    await expect(this.page).toHaveURL("http://127.0.0.1:8000/tindakans");
  }

  async cekObat() {
    await expect(this.goToObat).toBeVisible();
    await this.goToObat.click();
    await expect(this.page).toHaveURL("http://127.0.0.1:8000/obats");
  }

  async cekKunjungan() {
    await expect(this.goToKunjungan).toBeVisible();
    await this.goToKunjungan.click();
    await expect(this.page).toHaveURL("http://127.0.0.1:8000/kunjungans");
  }

  async cekDokter() {
    await expect(this.goToDokter).toBeVisible();
    await this.goToDokter.click();
    await expect(this.page).toHaveURL("http://127.0.0.1:8000/dokters");
  }

  async cekPoliKlinik() {
    await expect(this.goToPoliKlinik).toBeVisible();
    await this.goToPoliKlinik.click();
    await expect(this.page).toHaveURL("http://127.0.0.1:8000/polikliniks");
  }

  async cekLaboratorium() {
    await expect(this.goToLaboratorium).toBeVisible();
    await this.goToLaboratorium.click();
    await expect(this.page).toHaveURL("http://127.0.0.1:8000/laboratoriums");
  }
}
