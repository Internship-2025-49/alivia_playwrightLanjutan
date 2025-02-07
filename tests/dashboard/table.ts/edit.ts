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
  nm_tindkan,
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
} from "../../faker/faker";
import { RekamMedis } from "../../type/type";

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

  async editRekamMedis(rekamMedis: RekamMedis) {
    await this.editRekamMedisButton.click();
    await this.pasienSelect.selectOption(rekamMedis.no_pasien);
    await this.tindakanSelect.selectOption(rekamMedis.kd_tindakan);
    await this.obatSelect.selectOption(rekamMedis.kd_obat);
    await this.diagnosaInput.fill(diagnosa);
    await this.resepTextarea.fill(resep);
    await this.keluhanInput.fill(keluhan);
    await this.tanggalPemeriksaanInput.fill(tgl_pemeriksaan);
    await this.keteranganTextarea.fill(ket_tindakan);
    await this.updateRekamMedisButton.click();
  }

  async editTindakan() {
    await this.editTindakanButton.click();
    await this.namaTindakanInput.fill(nm_tindkan);
    await this.keteranganTindakanTextarea.fill(ket_tindakan);
    await this.updateTindakanButton.click();
  }

  async editObat() {
    await this.editObatButton.click();
    await this.nmObatInput.fill(namaObat);
    await this.jmlObatInput.fill(jumObat);
    await this.ukuranInput.fill(ukuranObat);
    await this.hargaInput.fill(hargaObat);
    await this.updateobatButton.click();
  }

  async editKunjungan() {
    await this.editKunjunganButton.click();
    await this.noPasienSelect.selectOption("John Doe");
    await this.kdPoliSelect.selectOption(nm_poli);
    await this.tglKunjunganInput.fill(tgl_kunjungan);
    await this.jamKunjunganInput.fill(jam_kunjungan);
    await this.updatekunjunganButton.click();
  }

  async editDokter() {
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
    await this.editPoliklinikButton.click();
    await this.namaPoliInput.fill(nm_poli);
    await this.poliLantaiInput.fill(lantai);
    await this.updatepoliklinikButton.click();
  }

  async editLaboratorium() {
    await this.editLaboratoriumButton.click();
    await this.rekamMedisInput.selectOption(rk_medis);
    await this.hasilLabInput.fill(hasil_lab);
    await this.keteranganInput.fill(ket);
    await this.updatelaboratoriumButton.click();
  }
}
