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
  test.setTimeout(30000);

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
    await dashboardPage.tindakan();
    await dashboardPage.checkTambahTindakan();
    await isiPage.isiFormTindakan();
    await dashboardPage.tindakan();
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

  test("Create Obat Page", async ({ page }) => {
    await sidebarPage.cekObat();
    await dashboardPage.obat();
    await dashboardPage.checkTambahObat();
    await isiPage.isiFormObat();
    await dashboardPage.obat();
  });

  test("Detail Obat Page", async ({ page }) => {
    await sidebarPage.cekObat();
    await detailPage.bacaDataObat();
  });

  test("Create Kunjungan Page", async ({ page }) => {
    await sidebarPage.cekKunjungan();
    await dashboardPage.kunjungan();
    await dashboardPage.checkTambahKunjungan();
    await isiPage.isiFormKunjungan();
  });

  test("Detail Kunjungan Page", async ({ page }) => {
    await sidebarPage.cekKunjungan();
    await detailPage.bacaDataKunjungan();
  });

  test("Create Dokter Page", async ({ page }) => {
    await sidebarPage.cekDokter();
    await dashboardPage.dokter();
    await dashboardPage.checkTambahDokter();
    await isiPage.isiFormDokter();
  });

  test("Detail Dokter Page", async ({ page }) => {
    await sidebarPage.cekDokter();
    await detailPage.bacaDataDokter();
  });

  test("Create Poliklinik Page", async ({ page }) => {
    await sidebarPage.cekPoliKlinik();
    await dashboardPage.poliklinik();
    await dashboardPage.checkTambahPoliklinik();
    await isiPage.isiFormPoliklinik();
  });

  test("Detail Poliklinik Page", async ({ page }) => {
    await sidebarPage.cekPoliKlinik();
    await detailPage.bacaDataPoliklinik();
  });

  test("Create Laboratorium Page", async ({ page }) => {
    await sidebarPage.cekLaboratorium();
    await dashboardPage.laboratorium();
    await dashboardPage.checkTambahLaboratorium();
    await isiPage.isiFormLaboratorium();
    await dashboardPage.laboratorium();
  });

  test("Detail Laboratorium Page", async ({ page }) => {
    await sidebarPage.cekLaboratorium();
    await detailPage.bacaDataLaboratorium();
  });
});
