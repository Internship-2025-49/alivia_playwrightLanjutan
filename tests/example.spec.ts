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

    await sidebarPage.cekPasien();
    await dashboardPage.pasien();
    await dashboardPage.checkTambahPasien();
    await isiPage.isiFormPasien();
    await detailPage.bacaDataPasien();
    // await deletePage.clickDelete();
    await editPage.editPasien(
      "KHALIF",
      "Laki-laki",
      "Hindu",
      "CITEUREUP",
      "2025-01-24",
      "12",
      "083112529211",
      "iip",
      "anak"
    );

    await sidebarPage.cekRekamMedis();
    await dashboardPage.rekamMedis();
    await dashboardPage.checkTambahRekamMedis();
    await isiPage.isiFormRekamMedis();
    await detailPage.bacaDataRekamMedis();

    // await dashboardPage.Tindakan();
    // await sidebarPage.cekTindakan();
    // await dashboardPage.checkTambahTindakan();
    // await isiPage.isiFormTindakan();
    // await detailPage.bacaDataTindakan();
  });
});
