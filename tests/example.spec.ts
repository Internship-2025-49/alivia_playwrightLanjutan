import { test as base, BrowserContext, Page, expect } from "@playwright/test";
import { PlaywrightLoginPage } from "./auth/login";
import { PlaywrightLogoutPage } from "./auth/logout";
import { PlaywrightDashboardPage } from "./dashboard/dashboard";
import { PlaywrightSidebarPage } from "./dashboard/sidebar";
import { PlaywrightIsianFormPage } from "./dashboard/table.ts/isiform";
import { PlaywrightDetailPage } from "./dashboard/detail";
import { PlaywrightEditFormPage } from "./dashboard/table.ts/edit";
import { PlaywrightDeletePage } from "./dashboard/delete";
import {
  dokterValue,
  kunjunganValue,
  labValue,
  obatValue,
  pasienValue,
  poliklinikValue,
  rekamMedisValue,
  tindakanValue,
} from "./faker/faker";

let context: BrowserContext;
let page: Page;

const test = base.extend({
  loginPage: async ({}, use) => {
    await use(new PlaywrightLoginPage(page));
  },
  logoutPage: async ({}, use) => {
    await use(new PlaywrightLogoutPage(page));
  },
  dashboardPage: async ({}, use) => {
    await use(new PlaywrightDashboardPage(page));
  },
  sidebarPage: async ({}, use) => {
    await use(new PlaywrightSidebarPage(page));
  },
  isiPage: async ({}, use) => {
    await use(new PlaywrightIsianFormPage(page));
  },
  detailPage: async ({}, use) => {
    await use(new PlaywrightDetailPage(page));
  },
  editPage: async ({}, use) => {
    await use(new PlaywrightEditFormPage(page));
  },
  deletePage: async ({}, use) => {
    await use(new PlaywrightDeletePage(page));
  },
});

test.describe("Admin_RekamMedis_Alivia", () => {
  const username = "admin";
  const password = "admin123";

  test.beforeAll(async ({ browser }) => {
    context = await browser.newContext();
    page = await browser.newPage();
    const loginPage = new PlaywrightLoginPage(page);

    await page.goto("/login");
    await loginPage.toLoginPage();
    await loginPage.inputLogin(username, password);
  });

  test.afterEach(async () => {
    console.log("Test finished.");
  });

  test.beforeEach(async ({ browser }) => {
    await page.goto("/dashboard");
    await expect(page).toHaveURL("/dashboard");
  });

  test.afterAll(async ({ logoutPage }) => {
    await logoutPage.toLogoutPage();
  });

  test("User Dashboard Page", async ({ dashboardPage }) => {
    await dashboardPage.header();
    await dashboardPage.title();
  });

  test("Create Pasien Page", async ({
    sidebarPage,
    dashboardPage,
    isiPage,
  }) => {
    await sidebarPage.cekPasien();
    await dashboardPage.pasien();
    await dashboardPage.checkTambahPasien();
    await isiPage.isiFormPasien(pasienValue);
    await dashboardPage.pasien();
  });

  test("Detail Pasien Page", async ({ sidebarPage, detailPage }) => {
    await sidebarPage.cekPasien();
    await detailPage.bacaDataPasien();
  });

  test("Update Pasien Page", async ({ sidebarPage, editPage }) => {
    await sidebarPage.cekPasien();
    await editPage.editPasien(pasienValue);
  });

  test("Delete Pasien Page", async ({ sidebarPage, deletePage }) => {
    await sidebarPage.cekPasien();
    await deletePage.deletePasien();
  });

  test("Create Rekam Medis Page", async ({
    sidebarPage,
    dashboardPage,
    isiPage,
  }) => {
    await sidebarPage.cekRekamMedis();
    await dashboardPage.rekamMedis();
    await dashboardPage.checkTambahRekamMedis();
    await isiPage.isiFormRekamMedis();
    await dashboardPage.rekamMedis();
  });

  test("Detail Rekam Medis Page", async ({ sidebarPage, detailPage }) => {
    await sidebarPage.cekRekamMedis();
    await detailPage.bacaDataRekamMedis();
  });

  test("Update Rekam Medis Page", async ({ sidebarPage, editPage }) => {
    await sidebarPage.cekRekamMedis();
    await editPage.editRekamMedis(rekamMedisValue);
  });

  test("Delete Rekam Medis Page", async ({ sidebarPage, deletePage }) => {
    await sidebarPage.cekRekamMedis();
    await deletePage.deleteRekamMedis();
  });

  test("Create Tindakan Page", async ({
    sidebarPage,
    dashboardPage,
    isiPage,
  }) => {
    await sidebarPage.cekTindakan();
    await dashboardPage.tindakan();
    await dashboardPage.checkTambahTindakan();
    await isiPage.isiFormTindakan();
    await dashboardPage.tindakan();
  });

  test("Detail Tindakan Page", async ({ sidebarPage, detailPage }) => {
    await sidebarPage.cekTindakan();
    await detailPage.bacaDataTindakan();
  });

  test("Update Tindakan Page", async ({ sidebarPage, editPage }) => {
    await sidebarPage.cekTindakan();
    await editPage.editTindakan(tindakanValue);
  });

  test("Delete Tindakan Page", async ({ sidebarPage, deletePage }) => {
    await sidebarPage.cekTindakan();
    await deletePage.deleteTindakan();
  });

  test("Create Obat Page", async ({ sidebarPage, dashboardPage, isiPage }) => {
    await sidebarPage.cekObat();
    await dashboardPage.obat();
    await dashboardPage.checkTambahObat();
    await isiPage.isiFormObat();
    await dashboardPage.obat();
  });

  test("Detail Obat Page", async ({ sidebarPage, detailPage }) => {
    await sidebarPage.cekObat();
    await detailPage.bacaDataObat();
  });

  test("Update Obat Page", async ({ sidebarPage, editPage }) => {
    await sidebarPage.cekObat();
    await editPage.editObat(tindakanValue);
  });

  test("Delete Obat Page", async ({ sidebarPage, deletePage }) => {
    await sidebarPage.cekObat();
    await deletePage.deleteObat();
  });

  test("Create Kunjungan Page", async ({
    sidebarPage,
    dashboardPage,
    isiPage,
  }) => {
    await sidebarPage.cekKunjungan();
    await dashboardPage.kunjungan();
    await dashboardPage.checkTambahKunjungan();
    await isiPage.isiFormKunjungan();
  });

  test("Detail Kunjungan Page", async ({ sidebarPage, detailPage }) => {
    await sidebarPage.cekKunjungan();
    await detailPage.bacaDataKunjungan();
  });

  test("Update Kunjungan Page", async ({ sidebarPage, editPage }) => {
    await sidebarPage.cekKunjungan();
    await editPage.editKunjungan(kunjunganValue);
  });

  test("Delete Kunjungan Page", async ({ sidebarPage, deletePage }) => {
    await sidebarPage.cekKunjungan();
    await deletePage.deleteKunjungan();
  });

  test("Create Dokter Page", async ({
    sidebarPage,
    dashboardPage,
    isiPage,
  }) => {
    await sidebarPage.cekDokter();
    await dashboardPage.dokter();
    await dashboardPage.checkTambahDokter();
    await isiPage.isiFormDokter();
  });

  test("Detail Dokter Page", async ({ sidebarPage, detailPage }) => {
    await sidebarPage.cekDokter();
    await detailPage.bacaDataDokter();
  });

  test("Update Dokter Page", async ({ sidebarPage, editPage }) => {
    await sidebarPage.cekDokter();
    await editPage.editDokter(dokterValue);
  });

  test("Delete Dokter Page", async ({ sidebarPage, deletePage }) => {
    await sidebarPage.cekDokter();
    await deletePage.deleteDokter();
  });

  test("Create Poliklinik Page", async ({
    sidebarPage,
    dashboardPage,
    isiPage,
  }) => {
    await sidebarPage.cekPoliKlinik();
    await dashboardPage.poliklinik();
    await dashboardPage.checkTambahPoliklinik();
    await isiPage.isiFormPoliklinik();
  });

  test("Detail Poliklinik Page", async ({ sidebarPage, detailPage }) => {
    await sidebarPage.cekPoliKlinik();
    await detailPage.bacaDataPoliklinik();
  });

  test("Update Poliklinik Page", async ({ sidebarPage, editPage }) => {
    await sidebarPage.cekPoliKlinik();
    await editPage.editPoliklinik(poliklinikValue);
  });

  test("Delete Poliklinik Page", async ({ sidebarPage, deletePage }) => {
    await sidebarPage.cekPoliKlinik();
    await deletePage.deletePoliklinik();
  });

  test("Create Laboratorium Page", async ({
    sidebarPage,
    dashboardPage,
    isiPage,
  }) => {
    await sidebarPage.cekLaboratorium();
    await dashboardPage.laboratorium();
    await dashboardPage.checkTambahLaboratorium();
    await isiPage.isiFormLaboratorium();
    await dashboardPage.laboratorium();
  });

  test("Detail Laboratorium Page", async ({ sidebarPage, detailPage }) => {
    await sidebarPage.cekLaboratorium();
    await detailPage.bacaDataLaboratorium();
  });

  test("Update Laboratorium Page", async ({ sidebarPage, editPage }) => {
    await sidebarPage.cekLaboratorium();
    await editPage.editLaboratorium(labValue);
  });

  test("Delete Laboratorium Page", async ({ sidebarPage, deletePage }) => {
    await sidebarPage.cekLaboratorium();
    await deletePage.deleteLaboratorium();
  });
});

test.describe("Dokter_RekamMedis_Alivia", () => {
  //test.setTimeout(30000);

  const username = "dokter";
  const password = "dokter123";

  test.beforeAll(async ({ browser }) => {
    context = await browser.newContext();
    page = await browser.newPage();
    const loginPage = new PlaywrightLoginPage(page);

    await page.goto("/login");
    await loginPage.toLoginPage();
    await loginPage.inputLogin(username, password);
  });

  test.afterEach(async () => {
    console.log("Test finished.");
  });

  test.beforeEach(async ({ browser }) => {
    await page.goto("/dashboard");
    await expect(page).toHaveURL("/dashboard");
  });

  test.afterAll(async ({ logoutPage }) => {
    await logoutPage.toLogoutPage();
  });

  test("User Dashboard Page", async ({ dashboardPage }) => {
    await dashboardPage.header();
  });

  test("Detail Pasien Page", async ({ sidebarPage, detailPage }) => {
    await sidebarPage.cekPasien();
    await detailPage.bacaDataPasien();
  });

  test("Update Pasien Page", async ({ sidebarPage, editPage }) => {
    await sidebarPage.cekPasien();
    await editPage.editPasien(pasienValue);
  });

  test("Create Tindakan Page", async ({
    sidebarPage,
    dashboardPage,
    isiPage,
  }) => {
    await sidebarPage.cekTindakan();
    await dashboardPage.tindakan();
    await dashboardPage.checkTambahTindakan();
    await isiPage.isiFormTindakan();
    await dashboardPage.tindakan();
  });

  test("Detail Tindakan Page", async ({ sidebarPage, detailPage }) => {
    await sidebarPage.cekTindakan();
    await detailPage.bacaDataTindakan();
  });

  test("Update Tindakan Page", async ({ sidebarPage, editPage }) => {
    await sidebarPage.cekTindakan();
    await editPage.editTindakan(tindakanValue);
  });

  test("Delete Tindakan Page", async ({ sidebarPage, deletePage }) => {
    await sidebarPage.cekTindakan();
    await deletePage.deleteTindakan();
  });

  test("Create Kunjungan Page", async ({
    sidebarPage,
    dashboardPage,
    isiPage,
  }) => {
    await sidebarPage.cekKunjungan();
    await dashboardPage.kunjungan();
    await dashboardPage.checkTambahKunjungan();
    await isiPage.isiFormKunjungan();
  });

  test("Detail Kunjungan Page", async ({ sidebarPage, detailPage }) => {
    await sidebarPage.cekKunjungan();
    await detailPage.bacaDataKunjungan();
  });

  test("Update Kunjungan Page", async ({ sidebarPage, editPage }) => {
    await sidebarPage.cekKunjungan();
    await editPage.editKunjungan(kunjunganValue);
  });

  test("Delete Kunjungan Page", async ({ sidebarPage, deletePage }) => {
    await sidebarPage.cekKunjungan();
    await deletePage.deleteKunjungan();
  });

  test("Detail Laboratorium Page", async ({ sidebarPage, detailPage }) => {
    await sidebarPage.cekLaboratorium();
    await detailPage.bacaDataLaboratorium();
  });
});

test.describe("Perawat_RekamMedis_Alivia", () => {
  const username = "perawat";
  const password = "perawat123";

  test.beforeAll(async ({ browser }) => {
    context = await browser.newContext();
    page = await browser.newPage();
    const loginPage = new PlaywrightLoginPage(page);

    await page.goto("/login");
    await loginPage.toLoginPage();
    await loginPage.inputLogin(username, password);
  });

  test.afterEach(async () => {
    console.log("Test finished.");
  });

  test.beforeEach(async ({ browser }) => {
    await page.goto("/dashboard");
    await expect(page).toHaveURL("/dashboard");
  });

  test.afterAll(async ({ logoutPage }) => {
    await logoutPage.toLogoutPage();
  });

  test("User Dashboard Page", async ({ dashboardPage }) => {
    await dashboardPage.header();
  });

  test("Detail Rekam Medis Page", async ({ sidebarPage, detailPage }) => {
    await sidebarPage.cekRekamMedis();
    await detailPage.bacaDataRekamMedis();
  });

  test("Create Tindakan Page", async ({
    sidebarPage,
    dashboardPage,
    isiPage,
  }) => {
    await sidebarPage.cekTindakan();
    await dashboardPage.tindakan();
    await dashboardPage.checkTambahTindakan();
    await isiPage.isiFormTindakan();
    await dashboardPage.tindakan();
  });

  test("Detail Tindakan Page", async ({ sidebarPage, detailPage }) => {
    await sidebarPage.cekTindakan();
    await detailPage.bacaDataTindakan();
  });

  test("Update Tindakan Page", async ({ sidebarPage, editPage }) => {
    await sidebarPage.cekTindakan();
    await editPage.editTindakan(tindakanValue);
  });

  test("Delete Tindakan Page", async ({ sidebarPage, deletePage }) => {
    await sidebarPage.cekTindakan();
    await deletePage.deleteTindakan();
  });

  test("Detail Kunjungan Page", async ({ sidebarPage, detailPage }) => {
    await sidebarPage.cekKunjungan();
    await detailPage.bacaDataKunjungan();
  });
});

test.describe("Farmasi_RekamMedis_Alivia", () => {
  const username = "farmasi";
  const password = "farmasi123";

  test.beforeAll(async ({ browser }) => {
    context = await browser.newContext();
    page = await browser.newPage();
    const loginPage = new PlaywrightLoginPage(page);

    await page.goto("/login");
    await loginPage.toLoginPage();
    await loginPage.inputLogin(username, password);
  });

  test.afterEach(async () => {
    console.log("Test finished.");
  });

  test.beforeEach(async ({ browser }) => {
    await page.goto("/dashboard");
    await expect(page).toHaveURL("/dashboard");
  });

  test.afterAll(async ({ logoutPage }) => {
    await logoutPage.toLogoutPage();
  });

  test("User Dashboard Page", async ({ dashboardPage }) => {
    await dashboardPage.header();
  });

  test("Detail Obat Page", async ({ sidebarPage, detailPage }) => {
    await sidebarPage.cekObat();
    await detailPage.bacaDataObat();
  });

  test("Create Obat Page", async ({ sidebarPage, dashboardPage, isiPage }) => {
    await sidebarPage.cekObat();
    await dashboardPage.obat();
    await dashboardPage.checkTambahObat();
    await isiPage.isiFormObat();
    await dashboardPage.obat();
  });

  test("Update Obat Page", async ({ sidebarPage, editPage }) => {
    await sidebarPage.cekObat();
    await editPage.editObat(obatValue);
  });

  test("Delete Obat Page", async ({ sidebarPage, deletePage }) => {
    await sidebarPage.cekObat();
    await deletePage.deleteObat();
  });
});

test.describe("Pasien_RekamMedis_Alivia", () => {
  const username = "pasien";
  const password = "pasien123";

  test.beforeAll(async ({ browser }) => {
    context = await browser.newContext();
    page = await browser.newPage();
    const loginPage = new PlaywrightLoginPage(page);

    await page.goto("/login");
    await loginPage.toLoginPage();
    await loginPage.inputLogin(username, password);
  });

  test.afterEach(async () => {
    console.log("Test finished.");
  });

  test.beforeEach(async ({ browser }) => {
    await page.goto("/dashboard");
    await expect(page).toHaveURL("/dashboard");
  });

  test.afterAll(async ({ logoutPage }) => {
    await logoutPage.toLogoutPage();
  });

  test("User Dashboard Page", async ({ dashboardPage }) => {
    await dashboardPage.header();
  });

  test("Detail Rekam Medis Page", async ({ sidebarPage, detailPage }) => {
    await sidebarPage.cekRekamMedis();
    await detailPage.bacaDataRekamMedis();
  });
});

test.describe("Laboratorium_RekamMedis_Alivia", () => {
  const username = "laboratorium";
  const password = "laboratorium123";

  test.beforeAll(async ({ browser }) => {
    context = await browser.newContext();
    page = await browser.newPage();
    const loginPage = new PlaywrightLoginPage(page);

    await page.goto("/login");
    await loginPage.toLoginPage();
    await loginPage.inputLogin(username, password);
  });

  test.afterEach(async () => {
    console.log("Test finished.");
  });

  test.beforeEach(async ({ browser }) => {
    await page.goto("/dashboard");
    await expect(page).toHaveURL("/dashboard");
  });

  test.afterAll(async ({ logoutPage }) => {
    await logoutPage.toLogoutPage();
  });

  test("User Dashboard Page", async ({ dashboardPage }) => {
    await dashboardPage.header();
  });

  test("Detail Laboratorium Page", async ({ sidebarPage, detailPage }) => {
    await sidebarPage.cekLaboratorium();
    await detailPage.bacaDataLaboratorium();
  });

  test("Create Laboratorium Page", async ({
    sidebarPage,
    dashboardPage,
    isiPage,
  }) => {
    await sidebarPage.cekLaboratorium();
    await dashboardPage.laboratorium();
    await dashboardPage.checkTambahLaboratorium();
    await isiPage.isiFormLaboratorium();
    await dashboardPage.laboratorium();
  });

  test("Update Laboratorium Page", async ({ sidebarPage, editPage }) => {
    await sidebarPage.cekLaboratorium();
    await editPage.editLaboratorium(labValue);
  });

  test("Delete Laboratorium Page", async ({ sidebarPage, deletePage }) => {
    await sidebarPage.cekLaboratorium();
    await deletePage.deleteLaboratorium();
  });

  test("Detail Rekam Medis Page", async ({ sidebarPage, detailPage }) => {
    await sidebarPage.cekRekamMedis();
    await detailPage.bacaDataRekamMedis();
  });
});
