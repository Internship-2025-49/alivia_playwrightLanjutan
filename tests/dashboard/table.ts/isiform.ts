import { expect, type Locator, type Page } from "@playwright/test";
import { faker } from "@faker-js/faker/locale/id_ID";
import {
  agama,
  alamat,
  diagnosa,
  hargaObat,
  hub_kel,
  j_kel,
  jam_kunjungan,
  jumObat,
  keluhan,
  ket_tindakan,
  lantai,
  nama_kk,
  nama_pasien,
  nm_poli,
  nm_tindakan,
  no_telp,
  resep,
  sip,
  tgl_kunjungan,
  tgl_lahir,
  tgl_pemeriksaan,
  namaObat,
  ukuranObat,
  usia,
  hasil_lab,
  ket,
  rk_medis,
  obat,
  tgl_periksa,
  status,
} from "../../faker/faker";
import { typePasien } from "../../type/type";

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

  // Lokator untuk form obat
  readonly nmObatInput: Locator;
  readonly jmlObatInput: Locator;
  readonly ukuranInput: Locator;
  readonly hargaInput: Locator;
  readonly submitObatButton: Locator;

  // Lokator untuk form kunjungan
  readonly noPasienSelect: Locator;
  readonly kdPoliSelect: Locator;
  readonly tglKunjunganInput: Locator;
  readonly jamKunjunganInput: Locator;
  readonly submitKunjunganButton: Locator;

  // Lokator untuk form dokter
  readonly namaDokterInput: Locator;
  readonly pilihPoliSelect: Locator;
  readonly sipInput: Locator;
  readonly dokterKunjunganIput: Locator;
  readonly dokterTempatLahirInput: Locator;
  readonly dokterNoTelpInput: Locator;
  readonly dokterAlamatInput: Locator;
  readonly submitDokterButton: Locator;

  // Lokator untuk form poliklinik
  readonly namaPoliInput: Locator;
  readonly poliLantaiInput: Locator;
  readonly submitPoliButton: Locator;

  // Lokator Laboratorium
  readonly rekamMedisInput: Locator;
  readonly hasilLabInput: Locator;
  readonly keteranganInput: Locator;
  readonly submitLaboratoriumButton: Locator;

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

    // Lokator form obat
    this.nmObatInput = page.locator("#nm_obat");
    this.jmlObatInput = page.locator("#jml_obat");
    this.ukuranInput = page.locator("#ukuran");
    this.hargaInput = page.locator("#harga");
    this.submitObatButton = page.locator('button[type="submit"]');

    // Lokator form kunjungan
    this.noPasienSelect = page.locator("#no_pasien");
    this.kdPoliSelect = page.locator("#kd_poli");
    this.tglKunjunganInput = page.locator("#tgl_kunjungan");
    this.jamKunjunganInput = page.locator("#jam_kunjungan");
    this.submitKunjunganButton = page.locator('button[type="submit"]');

    // Lokator form dokter
    this.namaDokterInput = page.locator("#nm_dokter");
    this.pilihPoliSelect = page.locator("#kd_poli");
    this.sipInput = page.locator("#SIP");
    this.dokterKunjunganIput = page.locator("#tgl_kunjungan");
    this.dokterTempatLahirInput = page.locator("#tmpat_lhr");
    this.dokterNoTelpInput = page.locator("#no_tlp");
    this.dokterAlamatInput = page.locator("#alamat");
    this.submitDokterButton = page.locator('button[type="submit"]');

    // Lokator untuk form poliklinik
    this.namaPoliInput = page.locator("#nm_poli");
    this.poliLantaiInput = page.locator("#lantai");
    this.submitPoliButton = page.locator('button[type="submit"]');

    // Lokator Laboratorium
    this.rekamMedisInput = page.locator("#no_rm");
    this.hasilLabInput = page.locator("#hasil_lab");
    this.keteranganInput = page.locator("#ket");
    this.submitLaboratoriumButton = page.locator('button[type="submit"]');
  }

  async isiFormPasien(isiPasien: typePasien) {
    await this.namaPasienInput.fill(isiPasien.nm_pasien);
    await this.jenisKelaminSelect.selectOption(isiPasien.j_kel);
    await this.agamaSelect.selectOption(isiPasien.agama);
    await this.alamatTextarea.fill(isiPasien.alamat);
    await this.tanggalLahirInput.fill(isiPasien.tgl_lahir);
    await this.usiaInput.fill(isiPasien.usia);
    await this.nomorTeleponInput.fill(isiPasien.no_telp);
    await this.namaKKInput.fill(isiPasien.nama_kk);
    await this.hubunganKeluargaInput.fill(isiPasien.hub_kel);
    await this.submitPasienButton.click();
  }

  async isiFormRekamMedis() {
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
    await this.namaTindakanInput.fill("Pemeriksaan Umum");
    await this.keteranganTindakanTextarea.fill(ket_tindakan);
    await this.submitTindakanButton.click();
  }

  async isiFormObat() {
    await this.nmObatInput.fill(namaObat);
    await this.jmlObatInput.fill(jumObat);
    await this.ukuranInput.fill(ukuranObat);
    await this.hargaInput.fill(hargaObat);
    await this.submitObatButton.click();
  }

  async isiFormKunjungan() {
    await this.noPasienSelect.selectOption("John Doe");
    await this.kdPoliSelect.selectOption(nm_poli);
    await this.tglKunjunganInput.fill(tgl_kunjungan);
    await this.jamKunjunganInput.fill(jam_kunjungan);
    await this.submitKunjunganButton.click();
  }

  async isiFormDokter() {
    await this.namaDokterInput.fill(faker.name.fullName());
    await this.pilihPoliSelect.selectOption(nm_poli);
    await this.sipInput.fill(sip);
    await this.dokterKunjunganIput.fill(tgl_kunjungan);
    await this.dokterTempatLahirInput.fill(faker.address.city());
    await this.dokterNoTelpInput.fill(no_telp);
    await this.dokterAlamatInput.fill(alamat);
    await this.submitDokterButton.click();
  }

  async isiFormPoliklinik() {
    await this.namaPoliInput.fill(nm_poli);
    await this.poliLantaiInput.fill(lantai);
    await this.submitPoliButton.click();
  }

  async isiFormLaboratorium() {
    await this.rekamMedisInput.selectOption(rk_medis);
    await this.hasilLabInput.fill(hasil_lab);
    await this.keteranganInput.fill(ket);
    await this.submitLaboratoriumButton.click();
  }
}
