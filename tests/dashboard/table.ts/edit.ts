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

  // Lokator untuk form obat
  readonly nmObatInput: Locator;
  readonly jmlObatInput: Locator;
  readonly ukuranInput: Locator;
  readonly hargaInput: Locator;
  readonly editObatButton: Locator;
  readonly updateobatButton: Locator;

  // Lokator untuk form kunjungan
  readonly noPasienSelect: Locator;
  readonly kdPoliSelect: Locator;
  readonly tglKunjunganInput: Locator;
  readonly jamKunjunganInput: Locator;
  readonly editKunjunganButton: Locator;
  readonly updatekunjunganButton: Locator;

  // Lokator untuk form dokter
  readonly namaDokterInput: Locator;
  readonly pilihPoliSelect: Locator;
  readonly sipInput: Locator;
  readonly dokterKunjunganIput: Locator;
  readonly dokterTempatLahirInput: Locator;
  readonly dokterNoTelpInput: Locator;
  readonly dokterAlamatInput: Locator;
  readonly editDokterButton: Locator;
  readonly updatedokterButton: Locator;

  // Lokator untuk form poliklinik
  readonly namaPoliInput: Locator;
  readonly poliLantaiInput: Locator;
  readonly editPoliklinikButton: Locator;
  readonly updatepoliklinikButton: Locator;

  // Lokator untuk form laboratorium
  readonly rekamMedisInput: Locator;
  readonly hasilLabInput: Locator;
  readonly keteranganInput: Locator;
  readonly editLaboratoriumButton: Locator;
  readonly updatelaboratoriumButton: Locator;

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

    // Lokator form obat
    this.editObatButton = page.getByRole("row").getByRole("link").first();
    this.nmObatInput = page.locator("#nm_obat");
    this.jmlObatInput = page.locator("#jml_obat");
    this.ukuranInput = page.locator("#ukuran");
    this.hargaInput = page.locator("#harga");
    this.updateobatButton = page.locator('button[type="submit"]');

    // Lokator form kunjungan
    this.editKunjunganButton = page.getByRole("row").getByRole("link").first();
    this.noPasienSelect = page.locator("select#no_pasien");
    this.kdPoliSelect = page.locator("select#kd_poli");
    this.tglKunjunganInput = page.locator("#tgl_kunjungan");
    this.jamKunjunganInput = page.locator("#jam_kunjungan");
    this.updatekunjunganButton = page.locator('button[type="submit"]');

    // Lokator form dokter
    this.editDokterButton = page.getByRole("row").getByRole("link").first();
    this.namaDokterInput = page.locator("#nm_dokter");
    this.pilihPoliSelect = page.locator("select#kd_poli");
    this.sipInput = page.locator("#SIP");
    this.dokterKunjunganIput = page.locator("#tgl_kunjungan");
    this.dokterTempatLahirInput = page.locator("#tmpat_lhr");
    this.dokterNoTelpInput = page.locator("#no_tlp");
    this.dokterAlamatInput = page.locator("#alamat");
    this.updatedokterButton = page.locator('button[type="submit"]');

    // Lokator form poliklinik
    this.editPoliklinikButton = page.getByRole("row").getByRole("link").first();
    this.namaPoliInput = page.locator("#nm_poli");
    this.poliLantaiInput = page.locator("#lantai");
    this.updatepoliklinikButton = page.locator('button[type="submit"]');

    // Lokator form laboratorium
    this.editLaboratoriumButton = page
      .getByRole("row")
      .getByRole("link")
      .first();
    this.rekamMedisInput = page.locator("#no_rm");
    this.hasilLabInput = page.locator("#hasil_lab");
    this.keteranganInput = page.locator("#ket");
    this.updatelaboratoriumButton = page.locator('button[type="submit"]');
  }

  async editPasien() {
    const nama_pasien = faker.person.fullName();
    enum JenKel {
      Laki = "Laki-laki",
      Perempuan = "Perempuan",
    }
    const j_kel = faker.helpers.enumValue(JenKel);
    enum kepercayaan {
      Islam = "Islam",
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

  async editTindakan() {
    const nm_tindkan = faker.helpers.arrayElement(["Pemeriksaan Umum"]);
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
    await this.namaTindakanInput.fill(nm_tindkan);
    await this.keteranganTindakanTextarea.fill(ket_tindakan);
    await this.updateTindakanButton.click();
  }

  async editObat() {
    const namaObat = faker.helpers.arrayElement([
      "Paracetamol",
      "Vitamin C",
      "Ibuprofen",
      "Antibiotik",
      "Amoxicillin",
      "Ranitidine",
      "Omeprazole",
      "Metformin",
      "Salbutamol",
    ]);

    const ukuranObat = faker.helpers.arrayElement([
      "200 mg",
      "500 mg",
      "10 ml",
      "5 ml",
      "1 g",
      "50 mcg",
      "100 mg",
      "2 tablet",
      "1 kapsul",
      "20 ml",
    ]);

    const jumObat = faker.string.numeric(2);

    const hargaObat = faker.string.numeric(2);

    await this.editObatButton.click();
    await this.nmObatInput.fill(namaObat);
    await this.jmlObatInput.fill(jumObat);
    await this.ukuranInput.fill(ukuranObat);
    await this.hargaInput.fill(hargaObat);
    await this.updateobatButton.click();
  }

  async editKunjungan() {
    const nm_poli = faker.helpers.arrayElement([
      "poli gigi",
      "poli anak",
      "poli mata",
    ]);

    const tgl_kunjungan = faker.date
      .birthdate({ min: 18, max: 65, mode: "age" })
      .toISOString()
      .split("T")[0];

    const jam_kunjungan = faker.date
      .between({
        from: "2023-01-01T00:00:00.000Z",
        to: "2030-01-01T00:00:00.000Z",
      })
      .toISOString()
      .split("T")[1]
      .slice(0, 8);

    await this.editKunjunganButton.click();
    await this.noPasienSelect.selectOption("John Doe");
    await this.kdPoliSelect.selectOption(nm_poli);
    await this.tglKunjunganInput.fill(tgl_kunjungan);
    await this.jamKunjunganInput.fill(jam_kunjungan);
    await this.updatekunjunganButton.click();
  }

  async editDokter() {
    const nm_poli = faker.helpers.arrayElement([
      "poli gigi",
      "poli mata",
      "poli anak",
    ]);

    const tgl_kunjungan = faker.date
      .birthdate({ min: 18, max: 65, mode: "age" })
      .toISOString()
      .split("T")[0];

    const sip = faker.string.numeric(10);

    const no_telp = faker.phone.number({ style: "human" });
    const alamat = faker.location.streetAddress();

    await this.editDokterButton.click();
    await this.namaDokterInput.fill(faker.name.fullName());
    await this.pilihPoliSelect.selectOption(nm_poli);
    await this.sipInput.fill(sip);
    await this.dokterKunjunganIput.fill(tgl_kunjungan);
    await this.dokterTempatLahirInput.fill(faker.address.city());
    await this.dokterNoTelpInput.fill(no_telp);
    await this.dokterAlamatInput.fill(alamat);
    await this.updatedokterButton.click();
  }

  async editPoliklinik() {
    const nm_poli = faker.helpers.arrayElement([
      "poli jiwa",
      "poli si",
      "poli gizi",
    ]);

    const lantai = faker.string.numeric(1);

    await this.editPoliklinikButton.click();
    await this.namaPoliInput.fill(nm_poli);
    await this.poliLantaiInput.fill(lantai);
    await this.updatepoliklinikButton.click();
  }

  async editLaboratorium() {
    const rk_medis = faker.helpers.arrayElement(["75", "76", "91", "97"]);

    const hasil_lab = faker.helpers.arrayElement([
      "Hemoglobin: Normal",
      "Kolesterol: Tinggi",
      "Gula darah: Normal",
      "Fungsi hati: Dalam batas normal",
      "Trombosit: Rendah",
    ]);

    const ket = faker.helpers.arrayElement([
      "Pasien diminta istirahat total",
      "Resep obat telah diberikan",
      "Pasien disarankan kontrol ulang",
      "Rekomendasi pola makan sehat",
      "Rujukan ke dokter spesialis",
    ]);

    await this.editLaboratoriumButton.click();
    await this.rekamMedisInput.selectOption(rk_medis);
    await this.hasilLabInput.fill(hasil_lab);
    await this.keteranganInput.fill(ket);
    await this.updatelaboratoriumButton.click();
  }
}
