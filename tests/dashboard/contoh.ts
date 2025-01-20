// import { expect, type Locator, type Page } from "@playwright/test";

// export class PlaywrightDashboardPage {
//   readonly page: Page;
//   readonly cekHeader: Locator;
//   readonly cekPasien: Locator;
//   readonly cekRekamMedis: Locator;
//   readonly cekTindakan: Locator;
//   readonly cekObat: Locator;
//   readonly cekKunjungan: Locator;
//   readonly cekDokter: Locator;
//   readonly cekPoliKlinik: Locator;
//   readonly TambahPasien: Locator;
//   readonly TambahRekamMedis: Locator;
//   readonly TambahTindakan: Locator;
//   readonly TambahObat: Locator;
//   readonly TambahKunjungan: Locator;
//   readonly TambahDokter: Locator;
//   readonly TambahPoliKlinik: Locator;

//   constructor(page: Page) {
//     this.page = page;
//     this.cekHeader = page.locator("h4", { hasText: "Dashboard" });
//     this.cekPasien = page.locator("h3", { hasText: "Data Pasien" });
//     this.cekRekamMedis = page.locator("h3", { hasText: " " });
//     this.cekTindakan = page.locator("h1", {
//       hasText: " Daftar Transaksi Cash",
//     });
//     this.cekObat = page.locator("h1", { hasText: "Daftar Paket Kredit" });
//     this.cekKunjungan = page.locator("h1", {
//       hasText: " Daftar Transaksi Kredit",
//     });
//     this.cekDokter = page.locator("h1", {
//       hasText: "Daftar Pembayaran Cicilan",
//     });
//     this.cekPoliKlinik = page.locator("h1", { hasText: "Kontak Help & Info" });
//     this.TambahPasien = page.locator("a", { hasText: "Tambah Pembeli" });
//     this.TambahRekamMedis = page.locator("h1", { hasText: "Tambah Pembeli" });
//     this.TambahTindakan = page.locator("a", {
//       hasText: "Tambah Transaksi Cash",
//     });
//     this.TambahObat = page.locator("h1", { hasText: "Tambah Transaksi Cash" });
//     this.TambahKunjungan = page.locator("a", {
//       hasText: "Tambah Transaksi Kredit",
//     });
//     this.TambahDokter = page.locator("h1", {
//       hasText: "Tambah Transaksi Kredit",
//     });
//     this.TambahPoliKlinik = page.locator("h1", {
//       hasText: "Tambah Transaksi Kredit",
//     });
//   }

//   async cekTitle() {
//     await expect(this.cekHeader).toBeVisible();
//   }

//   async cekKontenMotor() {
//     await expect(this.cekMotor).toBeVisible();
//   }

//   async cekKontenPembeli() {
//     await expect(this.cekPembeli).toBeVisible();
//   }

//   async cekKontenBeliCash() {
//     await expect(this.cekBeliCash).toBeVisible();
//   }

//   async cekKontenKreditPaket() {
//     await expect(this.cekKreditPaket).toBeVisible();
//   }

//   async cekKontenBeliKredit() {
//     await expect(this.cekBeliKredit).toBeVisible();
//   }

//   async cekKontenBayarCicilan() {
//     await expect(this.cekBayarCicilan).toBeVisible();
//   }

//   async cekKontenKontak() {
//     await expect(this.cekKontak).toBeVisible();
//   }

//   async cekTambahPembeli() {
//     await this.TambahPembeliButton.click();
//     await expect(this.page).toHaveURL("http://127.0.0.1:8000/pembelis/create");
//     await expect(this.TambahPembeli).toBeVisible();
//   }

//   async cekTambahTransaksiCash() {
//     await this.TambahTransaksiCashButton.click();
//     await expect(this.page).toHaveURL("http://127.0.0.1:8000/beli-cash/create");
//     await expect(this.TambahTransaksiCash).toBeVisible();
//   }

//   async cekTambahTransaksiKredit() {
//     await this.TambahTransaksiKreditButton.click();
//     await expect(this.page).toHaveURL(
//       "http://127.0.0.1:8000/beli-kredit/create"
//     );
//     await expect(this.TambahTransaksiKredit).toBeVisible();
//   }
// }

// // alivia terakhir kerjain, ubah dashboard dan coba coba
