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
    this.goToObat = page.locator("a", { hasText: "Obat" });
    this.goToTindakan = page.locator('a.sidebar-link:has-text("Tindakan")');
    this.goToKunjungan = page.locator("a", { hasText: "Kunjungan" });
    this.goToPoliKlinik = page.locator("a", { hasText: "Poli Klinik" });
    this.goToLaboratorium = page.locator("a", { hasText: "Laboratorium" });
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

  async cekObat() {
    await expect(this.goToObat).toBeVisible();
    await this.goToObat.click();
  }

  async cekTindakan() {
    await expect(this.goToTindakan).toBeVisible();
    await this.goToTindakan.click();
    await expect(this.page).toHaveURL("http://127.0.0.1:8000/tindakans");
  }

  async cekPoliKlinik() {
    await expect(this.goToPoliKlinik).toBeVisible();
    await this.goToPoliKlinik.click();
  }

  async cekLaboratorium() {
    await expect(this.goToLaboratorium).toBeVisible();
    await this.goToLaboratorium.click();
  }
}
