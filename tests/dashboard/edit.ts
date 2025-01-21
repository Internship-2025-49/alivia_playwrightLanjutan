import { expect, type Locator, type Page } from "@playwright/test";

export class PlaywrightEditFormPage {
  readonly page: Page;

  // Lokator untuk form pasien
  readonly namaPasienInput: Locator;
  readonly jenisKelaminSelect: Locator;
  readonly agamaSelect: Locator;
  readonly alamatTextarea: Locator;
  readonly tanggalLahirInput: Locator;
  readonly usiaInput: Locator;
  readonly nomorTeleponInput: Locator;
  readonly namaKKInput: Locator;
  readonly hubunganKeluargaInput: Locator;
  readonly editPasienButton: Locator;
  readonly updatePasienButton: Locator;

  // Lokator untuk form rekam medis

  readonly pasienSelect: Locator;
  readonly tindakanSelect: Locator;
  readonly obatSelect: Locator;
  readonly diagnosaInput: Locator;
  readonly resepTextarea: Locator;
  readonly keluhanInput: Locator;
  readonly tanggalPemeriksaanInput: Locator;
  readonly keteranganTextarea: Locator;
  readonly editRekamMedisButton: Locator;
  readonly updateRekamMedisButton: Locator;

  // Lokator untuk form tindakan
  readonly namaTindakanInput: Locator;
  readonly keteranganTindakanTextarea: Locator;
  readonly editTindakanButton: Locator;

  constructor(page: Page) {
    this.page = page;

    // Lokator form pasien
    this.editPasienButton = page.getByRole("row").getByRole("link").first();
    this.namaPasienInput = page.locator("input#nm_pasien");
    this.jenisKelaminSelect = page.locator("select#j_kel");
    this.agamaSelect = page.locator("select#agama");
    this.alamatTextarea = page.locator("#alamat");
    this.tanggalLahirInput = page.locator("#tgl_lhr");
    this.usiaInput = page.locator("#usia");
    this.nomorTeleponInput = page.locator("input#no_tlp");
    this.namaKKInput = page.locator("input#nm_kk");
    this.hubunganKeluargaInput = page.locator("input#hub_kel");
    // this.editPasienButton = page.locator('button[type="update"]');
    this.updatePasienButton = page.locator("button:has-text('Update')");

    // Lokator form rekam medis

    // this.editRekamMedis = page.getByRole("row").getByRole("link").first();
    this.pasienSelect = page.locator("#no_pasien");
    this.tindakanSelect = page.locator("#kd_tindakan");
    this.obatSelect = page.locator("#kd_obat");
    this.diagnosaInput = page.locator("#diagnosa");
    this.resepTextarea = page.locator("#resep");
    this.keluhanInput = page.locator("#keluhan");
    this.tanggalPemeriksaanInput = page.locator("#tgl_pemeriksaan");
    this.keteranganTextarea = page.locator("#ket");
    this.editRekamMedisButton = page.locator('button[type="submit"]');

    // Lokator form tindakan
    this.namaTindakanInput = page.locator("#nm_tindakan");
    this.keteranganTindakanTextarea = page.locator("#ket");
    this.editTindakanButton = page.locator('button[type="submit"]');
  }

  async editPasien(
    nm_pasien: string,
    j_kel: string,
    agama: string,
    alamat: string,
    tgl_lhr: string,
    usia: string,
    no_tlp: string,
    nm_kk: string,
    hub_kel: string
  ) {
    await this.editPasienButton.click();
    await this.namaPasienInput.fill(nm_pasien);
    await this.jenisKelaminSelect.selectOption(j_kel);
    await this.agamaSelect.selectOption(agama);
    await this.alamatTextarea.fill(alamat);
    await this.tanggalLahirInput.fill(tgl_lhr);
    await this.usiaInput.fill(usia);
    await this.nomorTeleponInput.fill(no_tlp);
    await this.namaKKInput.fill(nm_kk);
    await this.hubunganKeluargaInput.fill(hub_kel);
    await this.updatePasienButton.click();
  }

  // async editRekamMedis(
  //   nm_pasien: string,
  //   j_kel: string,
  //   agama: string,
  //   alamat: string,
  //   tgl_lhr: string,
  //   usia: string,
  //   no_tlp: string,
  //   nm_kk: string,
  //   hub_kel: string
  // ) {
  //   await this.editPasienButton.click();
  //   await this.namaPasienInput.fill(nm_pasien);
  //   await this.jenisKelaminSelect.selectOption(j_kel);
  //   await this.agamaSelect.selectOption(agama);
  //   await this.alamatTextarea.fill(alamat);
  //   await this.tanggalLahirInput.fill(tgl_lhr);
  //   await this.usiaInput.fill(usia);
  //   await this.nomorTeleponInput.fill(no_tlp);
  //   await this.namaKKInput.fill(nm_kk);
  //   await this.hubunganKeluargaInput.fill(hub_kel);
  //   await this.updatePasienButton.click();
  // }
}
