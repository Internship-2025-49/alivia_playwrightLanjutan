import { expect, type Locator, type Page } from "@playwright/test";

export class PlaywrightDashboardPage {
  readonly page: Page;
  readonly checkTitleDashboard: Locator;
  readonly loginButton: Locator;
  readonly cekHeader: Locator;
  readonly chartUser: Locator;
  readonly chartMonth: Locator;
  readonly checkPasien: Locator;
  readonly checkRekamMedis: Locator;
  readonly checkTindakan: Locator;
  readonly TambahPasienButton: Locator;
  readonly TambahPasien: Locator;
  readonly TambahRekamMedisButton: Locator;
  readonly TambahRekamMedis: Locator;
  readonly TambahTindakanButton: Locator;
  readonly TambahTindakan: Locator;

  constructor(page: Page) {
    this.page = page;
    this.loginButton = page.locator("button", { hasText: "Masuk" });
    this.cekHeader = page.locator("h4").filter({ hasText: "Dashboard" });

    this.checkTitleDashboard = page
      .locator("h1")
      .filter({ hasText: "Selamat Datang, Admin" });
    this.checkPasien = page.locator("h3", { hasText: "Pasien" });
    this.checkRekamMedis = page.locator(
      'a.sidebar-link:has-text("Rekam Medis")'
    );
    this.checkTindakan = page.locator('a.sidebar-link:has-text("Tindakan")');

    this.TambahPasienButton = page.locator("a.btn.btn-success", {
      hasText: "Tambah Pasien",
    });
    this.TambahPasien = page.locator("a", { hasText: "Tambah Pasien" });

    this.TambahRekamMedisButton = page.locator("a.btn.btn-success", {
      hasText: "Tambah Rekam Medis",
    });
    this.TambahRekamMedis = page.locator("a", {
      hasText: "Tambah Rekam Medis",
    });

    this.TambahTindakanButton = page.locator("a.btn.btn-success", {
      hasText: "Tambah Tindakan",
    });
    this.TambahTindakan = page.locator("a", { hasText: "Tambah Tindakan" });

    //ini masih gatau
    // this.chartUser = page.locator("#userRoleChart");
    // this.chartMonth = page.locator("#userRoleChart");
  }

  async header() {
    await expect(this.cekHeader).toBeVisible();
  }

  async title() {
    await expect(this.checkTitleDashboard).toBeVisible();
  }

  async pasien() {
    await expect(this.checkPasien).toBeVisible();
  }

  async rekamMedis() {
    await expect(this.checkRekamMedis).toBeVisible();
    await this.checkRekamMedis.click();
    await expect(this.page).toHaveURL("http://127.0.0.1:8000/rekam-medis");
  }

  async Tindakan() {
    // await expect(this.checkTindakan).toBeVisible();
    await this.checkTindakan.click();
    await expect(this.page).toHaveURL("http://127.0.0.1:8000/tindakans");
  }

  async checkTambahPasien() {
    await this.TambahPasienButton.click();
    await expect(this.page).toHaveURL("http://127.0.0.1:8000/pasiens/create");
    // await expect(this.TambahPasien).toBeVisible();
  }

  async checkTambahRekamMedis() {
    await this.TambahRekamMedisButton.click();
    await expect(this.page).toHaveURL(
      "http://127.0.0.1:8000/rekam-medis/create"
    );
    // await expect(this.TambahRekamMedis).toBeVisible();
  }

  async checkTambahTindakan() {
    await this.TambahTindakanButton.click();
    await expect(this.page).toHaveURL("http://127.0.0.1:8000/tindakans/create");
  }
}
