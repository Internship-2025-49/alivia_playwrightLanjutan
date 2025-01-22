import { expect, type Locator, type Page } from "@playwright/test";
import { faker } from "@faker-js/faker/locale/id_ID";

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
  readonly updateTindakanButton: Locator;

  constructor(page: Page) {
    this.page = page;

    // Lokator form pasien
    this.editPasienButton = page.getByRole("row").getByRole("link").first();
    this.namaPasienInput = page.locator("#nm_pasien");
    this.jenisKelaminSelect = page.locator("select#j_kel");
    this.agamaSelect = page.locator("select#agama");
    this.alamatTextarea = page.locator("#alamat");
    this.tanggalLahirInput = page.locator("#tgl_lhr");
    this.usiaInput = page.locator("#usia");
    this.nomorTeleponInput = page.locator("#no_tlp");
    this.namaKKInput = page.locator("#nm_kk");
    this.hubunganKeluargaInput = page.locator("#hub_kel");
    this.updatePasienButton = page.locator("button:has-text('Update')");

    // Lokator form rekam medis

    this.editRekamMedisButton = page.getByRole("row").getByRole("link").first();
    this.pasienSelect = page.locator("select#no_pasien");
    this.tindakanSelect = page.locator("select#kd_tindakan");
    this.obatSelect = page.locator("select#kd_obat");
    this.diagnosaInput = page.locator("#diagnosa");
    this.resepTextarea = page.locator("#resep");
    this.keluhanInput = page.locator("#keluhan");
    this.tanggalPemeriksaanInput = page.locator("#tgl_pemeriksaan");
    this.keteranganTextarea = page.locator("#ket");
    this.updateRekamMedisButton = page.locator('button[type="submit"]');

    // Lokator form tindakan
    this.editTindakanButton = page.getByRole("row").getByRole("link").first();
    this.namaTindakanInput = page.locator("#nm_tindakan");
    this.keteranganTindakanTextarea = page.locator("#ket");
    this.updateTindakanButton = page.locator('button[type="submit"]');
  }

  async editPasien() {
    const nama_pasien = faker.person.fullName();
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

    await this.editPasienButton.click();
    await this.namaPasienInput.fill(nama_pasien);
    await this.jenisKelaminSelect.selectOption(j_kel);
    await this.agamaSelect.selectOption(agama);
    await this.alamatTextarea.fill(alamat);
    await this.tanggalLahirInput.fill(tgl_lahir);
    await this.usiaInput.fill(usia);
    await this.nomorTeleponInput.fill(no_telp);
    await this.namaKKInput.fill(nama_kk);
    await this.hubunganKeluargaInput.fill(hub_kel);
    await this.updatePasienButton.click();
  }

  async editRekamMedis(
    no_pasien: string,
    kd_tindakan: string,
    kd_obat: string
  ) {
    const diagnosa = faker.helpers
      .arrayElement([
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
      ])
      .toString();

    const resep = faker.helpers.arrayElement([
      "Tablet 200 mg diminum 2x sehari sehabis makan",
      "Diminum sampai habis",
      "Konsumsi 1 kapsul setiap 12 jam",
      "Obat sirup 10 ml diminum setelah makan",
      "Minum 1 tablet sehari pada pagi hari",
      "Diminum 3 kali sehari setelah makan",
      "Obat tetes 5 tetes 2x sehari",
      "Gunakan salep 3x sehari pada area yang terinfeksi",
      "Suntik 1 kali seminggu",
      "Diminum 1 tablet setiap kali makan",
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

    const tgl_pemeriksaan = faker.date.recent().toISOString().split("T")[0];

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

    await this.editRekamMedisButton.click();
    await this.pasienSelect.selectOption(no_pasien);
    await this.tindakanSelect.selectOption(kd_tindakan);
    await this.obatSelect.selectOption(kd_obat);
    await this.diagnosaInput.fill(diagnosa);
    await this.resepTextarea.fill(resep);
    await this.keluhanInput.fill(keluhan);
    await this.tanggalPemeriksaanInput.fill(tgl_pemeriksaan);
    await this.keteranganTextarea.fill(ket_tindakan);
    await this.updateRekamMedisButton.click();
  }

  async editTindakan(nm_tindakan: string) {
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

    await this.editTindakanButton.click();
    await this.namaTindakanInput.fill(nm_tindakan);
    await this.keteranganTindakanTextarea.fill(ket_tindakan);
    await this.updateTindakanButton.click();
  }
}
