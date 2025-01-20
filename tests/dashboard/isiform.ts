import { expect, type Locator, type Page } from "@playwright/test";

export class PlaywrightIsianFormPage {
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
  readonly submitPasienButton: Locator;

  // Lokator untuk form rekam medis
  readonly pasienSelect: Locator;
  readonly tindakanSelect: Locator;
  readonly obatInput: Locator;
  readonly diagnosaInput: Locator;
  readonly resepTextarea: Locator;
  readonly keluhanInput: Locator;
  readonly tanggalPemeriksaanInput: Locator;
  readonly keteranganTextarea: Locator;
  readonly submitRekamMedisButton: Locator;

  // Lokator untuk form tindakan
  readonly namaTindakanInput: Locator;
  readonly keteranganTindakanTextarea: Locator;
  readonly submitTindakanButton: Locator;

  constructor(page: Page) {
    this.page = page;

    // Lokator form pasien
    this.namaPasienInput = page.locator("#nm_pasien");
    this.jenisKelaminSelect = page.locator("#j_kel");
    this.agamaSelect = page.locator("#agama");
    this.alamatTextarea = page.locator("#alamat");
    this.tanggalLahirInput = page.locator("#tgl_lhr");
    this.usiaInput = page.locator("#usia");
    this.nomorTeleponInput = page.locator("#no_tlp");
    this.namaKKInput = page.locator("#nm_kk");
    this.hubunganKeluargaInput = page.locator("#hub_kel");
    this.submitPasienButton = page.locator('button[type="submit"]');

    // Lokator form rekam medis
    this.pasienSelect = page.locator("#no_pasien");
    this.tindakanSelect = page.locator("#kd_tindakan");
    this.obatInput = page.locator("#kd_obat");
    this.diagnosaInput = page.locator("#diagnosa");
    this.resepTextarea = page.locator("#resep");
    this.keluhanInput = page.locator("#keluhan");
    this.tanggalPemeriksaanInput = page.locator("#tgl_pemeriksaan");
    this.keteranganTextarea = page.locator("#ket");
    this.submitRekamMedisButton = page.locator('button[type="submit"]');

    // Lokator form tindakan
    this.namaTindakanInput = page.locator("#nm_tindakan");
    this.keteranganTindakanTextarea = page.locator("#ket");
    this.submitTindakanButton = page.locator('button[type="submit"]');
  }

  async isiFormPasien() {
    await this.namaPasienInput.fill("John Doe");
    await this.jenisKelaminSelect.selectOption("L");
    await this.agamaSelect.selectOption("Islam");
    await this.alamatTextarea.fill("Jl. Merpati No. 5");
    await this.tanggalLahirInput.fill("1990-05-12");
    await this.usiaInput.fill("30");
    await this.nomorTeleponInput.fill("08123456789");
    await this.namaKKInput.fill("Jane Doe");
    await this.hubunganKeluargaInput.fill("Ibu");
    await this.submitPasienButton.click();
  }

  async isiFormRekamMedis() {
    await this.pasienSelect.selectOption({ label: "John Doe" }); // Pilih pasien
    await this.tindakanSelect.selectOption({ label: "Pemeriksaan Umum" });
    await this.obatInput.selectOption({ label: "Paracetamol" });
    await this.diagnosaInput.fill("Flu biasa");
    await this.resepTextarea.fill("Obat pereda demam");
    await this.keluhanInput.fill("Sakit kepala, demam");
    await this.tanggalPemeriksaanInput.fill("2025-01-20");
    await this.keteranganTextarea.fill("Pemeriksaan rutin");
    await this.submitRekamMedisButton.click();
  }

  async isiFormTindakan() {
    await this.namaTindakanInput.fill("Pembedahan");
    await this.keteranganTindakanTextarea.fill(
      "Pembedahan kecil untuk pengangkatan benjolan"
    );
    await this.submitTindakanButton.click();
  }
}
