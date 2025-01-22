import { test, expect } from "@playwright/test";
import { PlaywrightLoginPage } from "./auth/login";
import { PlaywrightDashboardPage } from "./dashboard/dashboard";
import { PlaywrightSidebarPage } from "./dashboard/sidebar";
import { PlaywrightIsianFormPage } from "./dashboard/isiform";
import { PlaywrightDetailPage } from "./dashboard/detail";
import { PlaywrightEditFormPage } from "./dashboard/edit";
import { PlaywrightDeletePage } from "./dashboard/delete";
import { describe } from "node:test";

const username = "admin";
const password = "admin123";

test.describe("RekamMedis_Alivia", () => {
  test.setTimeout(50000);

  let loginPage: PlaywrightLoginPage;
  let dashboardPage: PlaywrightDashboardPage;
  let sidebarPage: PlaywrightSidebarPage;
  let isiPage: PlaywrightIsianFormPage;
  let detailPage: PlaywrightDetailPage;
  let editPage: PlaywrightEditFormPage;
  let deletePage: PlaywrightDeletePage;

  test.beforeEach(async ({ page }) => {
    loginPage = new PlaywrightLoginPage(page);
    dashboardPage = new PlaywrightDashboardPage(page);
    sidebarPage = new PlaywrightSidebarPage(page);
    isiPage = new PlaywrightIsianFormPage(page);
    detailPage = new PlaywrightDetailPage(page);
    editPage = new PlaywrightEditFormPage(page);
    deletePage = new PlaywrightDeletePage(page);

    await page.goto("http://127.0.0.1:8000");

    await loginPage.toLoginPage();
    await loginPage.inputLogin("admin", "admin123");
    await expect(page).toHaveURL("http://127.0.0.1:8000/dashboard");
  });

  test("User Dashboard Page", async ({ page }) => {
    await dashboardPage.header();
    await dashboardPage.title();
  });

  test("Create Pasien Page", async ({ page }) => {
    await sidebarPage.cekPasien();
    await dashboardPage.pasien();
    await dashboardPage.checkTambahPasien();
    await isiPage.isiFormPasien();
    await dashboardPage.pasien();
  });

  test("Detail Pasien Page", async ({ page }) => {
    await sidebarPage.cekPasien();
    await detailPage.bacaDataPasien();
  });

  test("Update Pasien Page", async ({ page }) => {
    await sidebarPage.cekPasien();
    await editPage.editPasien();
  });
  test("Delete Pasien Page", async ({ page }) => {
    await sidebarPage.cekPasien();
    await deletePage.deletePasien();
  });

  test("Create Rekam Medis Page", async ({ page }) => {
    await sidebarPage.cekRekamMedis();
    await dashboardPage.rekamMedis();
    await dashboardPage.checkTambahRekamMedis();
    await isiPage.isiFormRekamMedis();
    await dashboardPage.rekamMedis();
  });

  test("Detail Rekam Medis Page", async ({ page }) => {
    await sidebarPage.cekRekamMedis();
    await detailPage.bacaDataRekamMedis();
  });

  test("Update Rekam Medis Page", async ({ page }) => {
    await sidebarPage.cekRekamMedis();
    await editPage.editRekamMedis(
      "John Doe",
      "Pemeriksaan Umum",
      "Paracetamol"
    );
  });

  test("Delete Rekam Medis Page", async ({ page }) => {
    await sidebarPage.cekRekamMedis();
    await deletePage.deleteRekamMedis();
  });

  test("Create Tindakan Page", async ({ page }) => {
    await sidebarPage.cekTindakan();
    await dashboardPage.Tindakan();
    await dashboardPage.checkTambahTindakan();
    await isiPage.isiFormTindakan();
    await dashboardPage.Tindakan();
  });

  test("Detail Tindakan Page", async ({ page }) => {
    await sidebarPage.cekTindakan();
    await detailPage.bacaDataTindakan();
  });

  test("Update Tindakan Page", async ({ page }) => {
    await sidebarPage.cekTindakan();
    await editPage.editTindakan("Pemeriksaan Umum");
  });
  test("Delete Tindakan Page", async ({ page }) => {
    await sidebarPage.cekTindakan();
    await deletePage.deleteTindakan();
  });
});
