import { test, expect } from "@playwright/test";
import { PlaywrightLoginPage } from "./auth/login";
import { PlaywrightDashboardPage } from "./dashboard/dashboard";
import { PlaywrightPasienPage } from "./dashboard/pasien";
import { describe } from "node:test";

const username = "admin";
const password = "admin123";

// test("playwright login", async ({ page }) => {
//   const loginPage = new PlaywrightLoginPage(page);

//   await page.goto("http://127.0.0.1:8000/");

//   await loginPage.login(); // Melakukan login dengan username dan password

//   // Verifikasi bahwa login berhasil (misalnya dengan memeriksa URL atau elemen lain)
//   await expect(page).toHaveURL("http://127.0.0.1:8000/dashboard"); // Gantilah URL ini sesuai aplikasi Anda
// });

// test("playwright pasien", async ({ page }) => {
//   const loginPage = new PlaywrightLoginPage(page);
//   const pasienPage = new PlaywrightPasienPage(page);

//   await loginPage.login(); // Melakukan login dengan username dan password

//   // Verifikasi bahwa login berhasil (misalnya dengan memeriksa URL atau elemen lain)
//   await expect(page).toHaveURL("http://127.0.0.1:8000/dashboard");

//   await pasienPage.tambahPasien({
//     namaPasien: "lipiuu",
//     jenisKelamin: "P",
//     agama: "Hindu",
//     alamat: "jl kom mutiara",
//     tanggalLahir: "2025-01-16",
//     usia: "12",
//     nomorTelepon: "34567890",
//     namaKepalaKeluarga: "345678",
//     hubunganKeluarga: "56gywgd",
//   });

//   // Verifikasi bahwa pasien berhasil ditambahkan, misalnya dengan memeriksa ada tidaknya pasien di halaman
//   await expect(page).toHaveURL("http://127.0.0.1:8000/pasiens"); // Gantilah URL ini sesuai aplikasi Anda
// });

test.describe("RekamMedis_Alivia", () => {
  let loginPage: PlaywrightLoginPage;
  let dashboardPage: PlaywrightDashboardPage;
  let pasienPage: PlaywrightPasienPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new PlaywrightLoginPage(page);
    dashboardPage = new PlaywrightDashboardPage(page);
    pasienPage = new PlaywrightPasienPage(page);

    await page.goto("http://127.0.0.1:8000");

    // await loginPage.toLoginPage();
    // await loginPage.inputLogin("shita@gmail.com", "shita123");
    // await expect(page).toHaveURL("http://127.0.0.1:8000/home");
  });

  test;
});
