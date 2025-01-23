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
  readonly checkObat: Locator;
  readonly checkKunjungan: Locator;
  readonly checkDokter: Locator;
  readonly checkPoliklinik: Locator;
  readonly checkLaboratorium: Locator;

  readonly TambahPasienButton: Locator;
  readonly TambahPasien: Locator;
  readonly TambahRekamMedisButton: Locator;
  readonly TambahRekamMedis: Locator;
  readonly TambahTindakanButton: Locator;
  readonly TambahTindakan: Locator;
  readonly TambahObatButton: Locator;
  readonly TambahObat: Locator;
  readonly TambahKunjunganButton: Locator;
  readonly TambahKunjungan: Locator;
  readonly TambahDokterButton: Locator;
  readonly TambahDokter: Locator;
  readonly TambahPoliklinikButton: Locator;
  readonly TambahPoliklinik: Locator;
  readonly TambahLaboratoriumButton: Locator;
  readonly TambahLaboratorium: Locator;

  constructor(page: Page) {
    this.page = page;
    this.loginButton = page.locator("button", { hasText: "Masuk" });
    this.cekHeader = page.locator("h4").filter({ hasText: "Dashboard" });

    this.checkTitleDashboard = page
      .locator("h1")
      .filter({ hasText: "Selamat Datang, Admin" });
    this.checkPasien = page.locator("h3", { hasText: "Data Pasien" });
    this.checkRekamMedis = page.locator("h4", {
      hasText: "Daftar Rekam Medis",
    });
    this.checkTindakan = page.locator("h3", { hasText: "Data Tindakan" });
    this.checkObat = page.locator("h3", { hasText: "Data Obat" });
    this.checkKunjungan = page.locator("h3", { hasText: "Data Kunjungan" });
    this.checkDokter = page.locator("h3", { hasText: "Data Dokter" });
    this.checkPoliklinik = page.locator("h3", { hasText: "Data Poliklinik" });
    this.checkLaboratorium = page.locator("h3", {
      hasText: "Data Laboratorium",
    });

    this.TambahPasien = page.locator("a", { hasText: "Tambah Pasien" });
    this.TambahPasienButton = page.locator("a.btn.btn-success", {
      hasText: "Tambah Pasien",
    });
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
    this.TambahObatButton = page.locator("a.btn.btn-success", {
      hasText: "Tambah Obat",
    });
    this.TambahObat = page.locator("a", { hasText: "Tambah Obat" });
    this.TambahKunjunganButton = page.locator("a.btn.btn-success", {
      hasText: "Tambah Kunjungan",
    });
    this.TambahKunjungan = page.locator("a", { hasText: "Tambah Kunjungan" });
    this.TambahDokterButton = page.locator("a.btn.btn-success", {
      hasText: "Tambah Dokter",
    });
    this.TambahDokter = page.locator("a", { hasText: "Tambah Dokter" });
    this.TambahPoliklinikButton = page.locator("a.btn.btn-success", {
      hasText: "Tambah Poliklinik",
    });
    this.TambahPoliklinik = page.locator("a", { hasText: "Tambah Poliklinik" });
    this.TambahLaboratoriumButton = page.locator("a.btn.btn-success", {
      hasText: "Tambah Hasil Laboratorium",
    });
    this.TambahLaboratorium = page.locator("a", {
      hasText: "Tambah Hasil Laboratorium",
    });
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

  async tindakan() {
    await expect(this.checkTindakan).toBeVisible();
    await this.checkTindakan.click();
    await expect(this.page).toHaveURL("http://127.0.0.1:8000/tindakans");
  }

  async obat() {
    await expect(this.checkObat).toBeVisible();
    await this.checkObat.click();
    await expect(this.page).toHaveURL("http://127.0.0.1:8000/obats");
  }

  async kunjungan() {
    await expect(this.checkKunjungan).toBeVisible();
    await this.checkKunjungan.click();
    await expect(this.page).toHaveURL("http://127.0.0.1:8000/kunjungans");
  }

  async dokter() {
    await expect(this.checkDokter).toBeVisible();
    await this.checkDokter.click();
    await expect(this.page).toHaveURL("http://127.0.0.1:8000/dokters");
  }

  async poliklinik() {
    await expect(this.checkPoliklinik).toBeVisible();
    await this.checkPoliklinik.click();
    await expect(this.page).toHaveURL("http://127.0.0.1:8000/polikliniks");
  }

  async laboratorium() {
    await expect(this.checkLaboratorium).toBeVisible();
    await this.checkLaboratorium.click();
    await expect(this.page).toHaveURL("http://127.0.0.1:8000/laboratoriums");
  }

  async checkTambahPasien() {
    await this.TambahPasienButton.click();
    await expect(this.page).toHaveURL("http://127.0.0.1:8000/pasiens/create");
  }

  async checkTambahRekamMedis() {
    await this.TambahRekamMedisButton.click();
    await expect(this.page).toHaveURL(
      "http://127.0.0.1:8000/rekam-medis/create"
    );
  }

  async checkTambahTindakan() {
    await this.TambahTindakanButton.click();
    await expect(this.page).toHaveURL("http://127.0.0.1:8000/tindakans/create");
  }

  async checkTambahObat() {
    await this.TambahObatButton.click();
    await expect(this.page).toHaveURL("http://127.0.0.1:8000/obats/create");
  }

  async checkTambahKunjungan() {
    await this.TambahKunjunganButton.click();
    await expect(this.page).toHaveURL(
      "http://127.0.0.1:8000/kunjungans/create"
    );
  }

  async checkTambahDokter() {
    await this.TambahDokterButton.click();
    await expect(this.page).toHaveURL("http://127.0.0.1:8000/dokters/create");
  }

  async checkTambahPoliklinik() {
    await this.TambahPoliklinikButton.click();
    await expect(this.page).toHaveURL(
      "http://127.0.0.1:8000/polikliniks/create"
    );
  }

  async checkTambahLaboratorium() {
    await this.TambahLaboratoriumButton.click();
    await expect(this.page).toHaveURL(
      "http://127.0.0.1:8000/laboratoriums/create"
    );
  }
}
