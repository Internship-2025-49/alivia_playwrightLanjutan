import { expect, type Locator, type Page } from "@playwright/test";
import { faker } from "@faker-js/faker/locale/id_ID";

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
    const nama = faker.person.fullName();
    enum JenKel {
      Laki = "Laki-laki",
      Perempuan = "Perempuan",
    }
    const j_kel = faker.helpers.enumValue(JenKel);

    enum kepercayaan {
      Islam = "islam",
      Hindu = "Hindu",
      Kristen = "Kristen",
      Budha = "Budha",
    }
    const agama = faker.helpers.enumValue(kepercayaan);

    const alamat = faker.location.streetAddress();

    const tgl_lahir = faker.date
      .birthdate({ min: 18, max: 65, mode: "age" })
      .toISOString()
      .split("T")[0];

    const usia = faker.string.numeric(2);
    const no_telp = faker.phone.number({ style: "human" });
    const nama_kk = faker.person.lastName();
    enum Keluarga {
      Ayah = "Ayah",
      Ibu = "Ibu",
      Adek = "Adek",
      Kakak = "Kakak",
      Saudara = "Saudara",
    }
    const hub_kel = faker.helpers.enumValue(Keluarga);

    await this.namaPasienInput.fill(nama);
    await this.jenisKelaminSelect.selectOption(j_kel);
    await this.agamaSelect.selectOption(agama);
    await this.alamatTextarea.fill(alamat);
    await this.tanggalLahirInput.fill(tgl_lahir);
    await this.usiaInput.fill(usia);
    await this.nomorTeleponInput.fill(no_telp);
    await this.namaKKInput.fill(nama_kk);
    await this.hubunganKeluargaInput.fill(hub_kel);
    await this.submitPasienButton.click();
  }

  async isiFormRekamMedis() {
    const diagnosa = faker.helpers.arrayElement([
      "Flu biasa",
      "Demam",
      "Batuk pilek",
      "Infeksi saluran pernapasan",
      "Migrain",
      "Radang tenggorokan",
      "Alergi musiman",
      "Infeksi kulit",
      "Sakit perut",
      "Hipertensi",
    ]);

    const obat = faker.helpers.arrayElement([
      "Obat pereda demam",
      "Paracetamol",
      "Antibiotik",
      "Vitamin C",
      "Sirup batuk",
      "Salep antiseptik",
      "Antihistamin",
      "Analgesik",
      "Obat maag",
      "Obat tetes mata",
    ]);

    const keluhan = faker.helpers.arrayElement([
      "Sakit kepala, demam",
      "Batuk, pilek",
      "Nyeri perut, mual",
      "Lemas, tidak nafsu makan",
      "Sesak napas, batuk kering",
      "Ruam kulit, gatal",
      "Pusing, penglihatan kabur",
      "Nyeri sendi, demam ringan",
      "Sakit tenggorokan, suara serak",
      "Mata merah, perih",
    ]);

    const tgl_periksa = faker.date
      .birthdate({ min: 18, max: 65, mode: "age" })
      .toISOString()
      .split("T")[0];

    const status = faker.helpers.arrayElement([
      "Sudah ditangani",
      "Dalam proses",
      "Sedang dirawat",
      "Menunggu pemeriksaan lebih lanjut",
      "Selesai",
      "Tunggu hasil lab",
      "Belum diperiksa",
      "Perlu rawat inap",
      "Pulang paksa",
      "Meninggal dunia",
    ]);

    await this.pasienSelect.selectOption({ label: "John Doe" });
    await this.tindakanSelect.selectOption({ label: "Pemeriksaan Umum" });
    await this.obatInput.selectOption({ label: "Paracetamol" });
    await this.diagnosaInput.fill(diagnosa);
    await this.resepTextarea.fill(obat);
    await this.keluhanInput.fill(keluhan);
    await this.tanggalPemeriksaanInput.fill(tgl_periksa);
    await this.keteranganTextarea.fill(status);
    await this.submitRekamMedisButton.click();
  }

  async isiFormTindakan() {
    const ket_tindakan = faker.helpers.arrayElement([
      "Pembedahan kecil untuk pengangkatan benjolan",
      "Operasi caesar",
      "Tindakan rontgen",
      "Endoskopi saluran cerna",
      "Pemeriksaan darah lengkap",
      "CT Scan",
      "Dialisis ginjal",
      "Laparoskopi",
      "Pembersihan luka",
      "Fisioterapi",
    ]);

    await this.namaTindakanInput.fill("Pemeriksaan Umum");
    await this.keteranganTindakanTextarea.fill(ket_tindakan);
    await this.submitTindakanButton.click();
  }
}
