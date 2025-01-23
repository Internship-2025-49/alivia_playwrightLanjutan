import { expect, type Locator, type Page } from "@playwright/test";

export class PlaywrightDetailPage {
  readonly page: Page;

  readonly closeButton: Locator;
  // Lokator untuk tombol lihat detail pasien
  readonly lihatDetailPasienButton: Locator;
  readonly modalPasien: Locator;
  readonly namaPasienDetail: Locator;
  readonly jenisKelaminDetail: Locator;
  readonly agamaDetail: Locator;
  readonly alamatDetail: Locator;
  readonly tanggalLahirDetail: Locator;
  readonly usiaDetail: Locator;
  readonly nomorTeleponDetail: Locator;
  readonly namaKKDetail: Locator;
  readonly hubunganKeluargaDetail: Locator;

  // Lokator untuk tombol lihat detail rekam medis
  readonly lihatDetailRekamMedisButton: Locator;
  readonly modalRekamMedis: Locator;
  readonly tindakanDetail: Locator;
  readonly obatDetail: Locator;
  readonly diagnosaDetail: Locator;
  readonly keluhanDetail: Locator;
  readonly tanggalPemeriksaanDetail: Locator;
  readonly keteranganRekamMedisDetail: Locator;

  // Lokator untuk tombol lihat detail tindakan
  readonly lihatDetailTindakanButton: Locator;
  readonly modalTindakan: Locator;
  readonly namaTindakanDetail: Locator;
  readonly keteranganTindakanDetail: Locator;

  // Lokator untuk tombol lihat detail obat
  readonly lihatDetailObatButton: Locator;
  readonly modalObat: Locator;
  readonly modalNamaObat: Locator;
  readonly modalJumlah: Locator;
  readonly modalUkuran: Locator;
  readonly modalHarga: Locator;

  // Lokator untuk tombol lihat detail Kunjungan
  readonly lihatDetailKunjunganButton: Locator;
  readonly modalKunjungan: Locator;
  readonly namaPasienKunjunganDetail: Locator;
  readonly tanggalKunjunganDetail: Locator;
  readonly keteranganKunjunganDetail: Locator;

  // Lokator untuk tombol lihat Dokter
  readonly lihatDetailDokterButton: Locator;
  readonly modalDokter: Locator;
  readonly modalNamaDokter: Locator;
  readonly modalPoliklinik: Locator;
  readonly modalSIP: Locator;
  readonly keteranganDokterDetail: Locator;

  //Lokator Untuk tombol lihat Poliklinik
  readonly lihatDetailPoliklinikButton: Locator;
  readonly modalPoliklinikDetail: Locator;
  readonly modalNamaPoliklinik: Locator;
  readonly modalLantai: Locator;

  //Lokator untuk tombol lihat Laboratorium
  readonly lihatDetailLaboratoriumButton: Locator;
  readonly modalLaboratorium: Locator;
  readonly modalNoPasien: Locator;
  readonly modalHasilLab: Locator;
  readonly modalKeterangan: Locator;

  constructor(page: Page) {
    this.page = page;

    // Lokator untuk tombol Close pada modal
    this.closeButton = page.locator(
      'button.btn.btn-secondary[data-bs-dismiss="modal"]'
    );

    // Lokator untuk tombol lihat detail pasien

    this.lihatDetailPasienButton = page
      .getByRole("row")
      .getByRole("button")
      .first();

    // Lokator untuk modal detail pasien
    this.modalPasien = page.locator("#detailModal");
    this.namaPasienDetail = this.modalPasien.locator("#modalNamaPasien");
    this.jenisKelaminDetail = this.modalPasien.locator("#modalJenisKelamin");
    this.agamaDetail = this.modalPasien.locator("#modalAgama");
    this.alamatDetail = this.modalPasien.locator("#modalAlamat");
    this.tanggalLahirDetail = this.modalPasien.locator("#modalTanggalLahir");
    this.usiaDetail = this.modalPasien.locator("#modalUsia");
    this.nomorTeleponDetail = this.modalPasien.locator("#modalNomorTelepon");
    this.namaKKDetail = this.modalPasien.locator("#modalNomorKK");
    this.hubunganKeluargaDetail = this.modalPasien.locator(
      "#modalHubunganKeluarga"
    );

    // Lokator untuk tombol lihat detail rekam medis

    this.lihatDetailRekamMedisButton = page
      .getByRole("row")
      .getByRole("button")
      .first();

    // Lokator untuk modal detail rekam medis
    this.modalRekamMedis = page.locator("#detailModal");
    this.tindakanDetail = this.modalRekamMedis.locator("#modalTindakan");
    this.obatDetail = this.modalRekamMedis.locator("#modalObat");
    this.diagnosaDetail = this.modalRekamMedis.locator("#modalDiagnosa");
    this.keluhanDetail = this.modalRekamMedis.locator("#modalKeluhan");
    this.tanggalPemeriksaanDetail = this.modalRekamMedis.locator(
      "#modalTanggalPemeriksaan"
    );
    this.keteranganRekamMedisDetail =
      this.modalRekamMedis.locator("#modalKeterangan");

    // Lokator untuk modal detail tindakan
    this.lihatDetailTindakanButton = page
      .getByRole("row")
      .getByRole("button")
      .first();

    this.modalTindakan = page.locator("#detailModal");
    this.namaTindakanDetail = this.modalTindakan.locator("#modalNamaTindakan");
    this.keteranganTindakanDetail =
      this.modalTindakan.locator("#modalDeskripsi");

    // Lokator untuk modal detail Obat
    this.lihatDetailObatButton = page
      .getByRole("row")
      .getByRole("button")
      .first();

    this.modalObat = page.locator("#detailModal");
    this.modalNamaObat = this.modalObat.locator("#modalNamaObat");
    this.modalJumlah = this.modalObat.locator("#modalJumlah");
    this.modalUkuran = this.modalObat.locator("#modalUkuran");
    this.modalHarga = this.modalObat.locator("#modalHarga");

    // Lokator untuk modal detail Kunjungan
    this.lihatDetailKunjunganButton = page
      .getByRole("row")
      .getByRole("button")
      .first();

    this.modalKunjungan = page.locator("#detailModal");
    this.namaPasienDetail = this.modalKunjungan.locator("#modalNamaPasien");
    this.tanggalKunjunganDetail = this.modalKunjungan.locator(
      "#modalTanggalKunjungan"
    );

    //Lokator untuk modal detail Dokter
    this.lihatDetailDokterButton = page
      .getByRole("row")
      .getByRole("button")
      .first();

    this.modalDokter = page.locator("#detailModal");
    this.modalNamaDokter = this.modalDokter.locator("#modalNamaDokter");
    this.modalPoliklinik = this.modalDokter.locator("#modalPoliklinik");
    this.modalSIP = this.modalDokter.locator("#modalSIP");

    //Lokator untuk modal detail Poliklinik
    this.lihatDetailPoliklinikButton = page
      .getByRole("row")
      .getByRole("button")
      .first();

    this.modalPoliklinikDetail = page.locator("#detailModal");
    this.modalNamaPoliklinik = this.modalPoliklinikDetail.locator(
      "#modalNamaPoliklinik"
    );
    this.modalLantai = this.modalPoliklinikDetail.locator("#modalLantai");

    // Lokator tombol lihat detail laboratorium
    this.lihatDetailLaboratoriumButton = page
      .getByRole("row")
      .getByRole("button")
      .first();

    this.modalLaboratorium = page.locator("#detailModal");
    this.modalNoPasien = this.modalLaboratorium.locator("#modalNoPasien");
    this.modalHasilLab = this.modalLaboratorium.locator("#modalHasilLab");
    this.modalKeterangan = this.modalLaboratorium.locator("#modalKeterangan");
  }

  async bacaDataPasien() {
    await this.lihatDetailPasienButton.click();

    await this.modalPasien.waitFor({ state: "visible" });
    const namaPasien = await this.namaPasienDetail.textContent();
    const jenisKelamin = await this.jenisKelaminDetail.textContent();
    const agama = await this.agamaDetail.textContent();
    const alamat = await this.alamatDetail.textContent();
    const tanggalLahir = await this.tanggalLahirDetail.textContent();
    const usia = await this.usiaDetail.textContent();
    const nomorTelepon = await this.nomorTeleponDetail.textContent();
    const namaKK = await this.namaKKDetail.textContent();
    const hubunganKeluarga = await this.hubunganKeluargaDetail.textContent();

    console.log("Nama Pasien: ", namaPasien);
    console.log("Jenis Kelamin: ", jenisKelamin);
    console.log("Agama: ", agama);
    console.log("Alamat: ", alamat);
    console.log("Tanggal Lahir: ", tanggalLahir);
    console.log("Usia: ", usia);
    console.log("Nomor Telepon: ", nomorTelepon);
    console.log("Nama KK: ", namaKK);
    console.log("Hubungan Keluarga: ", hubunganKeluarga);

    await this.closeButton.click();
    await this.modalPasien.waitFor({ state: "hidden" });
  }

  async bacaDataRekamMedis() {
    await this.lihatDetailRekamMedisButton.click();
    await this.modalRekamMedis.waitFor({ state: "visible" });

    const tindakan = await this.tindakanDetail.textContent();
    const obat = await this.obatDetail.textContent();
    const diagnosa = await this.diagnosaDetail.textContent();
    const keluhan = await this.keluhanDetail.textContent();
    const tanggalPemeriksaan =
      await this.tanggalPemeriksaanDetail.textContent();
    const keterangan = await this.keteranganRekamMedisDetail.textContent();

    console.log("Tindakan: ", tindakan);
    console.log("Obat: ", obat);
    console.log("Diagnosa: ", diagnosa);
    console.log("Keluhan: ", keluhan);
    console.log("Tanggal Pemeriksaan: ", tanggalPemeriksaan);
    console.log("Keterangan: ", keterangan);

    await this.closeButton.click();
    await this.modalRekamMedis.waitFor({ state: "hidden" });
  }

  async bacaDataTindakan() {
    await this.lihatDetailTindakanButton.click();
    await this.modalTindakan.waitFor({ state: "visible" });

    const namaTindakan = await this.namaTindakanDetail.textContent();
    const keteranganTindakan =
      await this.keteranganTindakanDetail.textContent();

    console.log("Nama Tindakan: ", namaTindakan);
    console.log("Keterangan Tindakan: ", keteranganTindakan);

    await this.closeButton.click();
    await this.modalTindakan.waitFor({ state: "hidden" });
  }

  async bacaDataObat() {
    await this.lihatDetailObatButton.click();
    await this.modalObat.waitFor({ state: "visible" });

    const namaObat = await this.modalNamaObat.textContent();
    const jumlahObat = await this.modalJumlah.textContent();
    const ukuranObat = await this.modalUkuran.textContent();
    const hargaObat = await this.modalHarga.textContent();

    console.log("Nama Obat: ", namaObat);
    console.log("Jumlah Obat: ", jumlahObat);
    console.log("Ukuran Obat: ", ukuranObat);
    console.log("Harga Obat: ", hargaObat);

    await this.closeButton.click();
    await this.modalObat.waitFor({ state: "hidden" });
  }

  async bacaDataKunjungan() {
    await this.lihatDetailKunjunganButton.click();
    await this.modalKunjungan.waitFor({ state: "visible" });

    const namaPasien = await this.namaPasienDetail.textContent();
    const tanggalKunjungan = await this.tanggalKunjunganDetail.textContent();

    console.log("Nama Pasien: ", namaPasien);
    console.log("Tanggal Kunjungan: ", tanggalKunjungan);

    await this.closeButton.click();
    await this.modalKunjungan.waitFor({ state: "hidden" });
  }

  async bacaDataDokter() {
    await this.lihatDetailDokterButton.click();
    await this.modalDokter.waitFor({ state: "visible" });

    const namaDokter = await this.modalNamaDokter.textContent();
    const poliklinik = await this.modalPoliklinik.textContent();
    const SIP = await this.modalSIP.textContent();

    console.log("Nama Dokter: ", namaDokter);
    console.log("Poliklinik: ", poliklinik);
    console.log("SIP: ", SIP);

    await this.closeButton.click();
    await this.modalDokter.waitFor({ state: "hidden" });
  }

  async bacaDataPoliklinik() {
    await this.lihatDetailPoliklinikButton.click();
    await this.modalPoliklinikDetail.waitFor({ state: "visible" });

    const namaPoliklinik = await this.modalNamaPoliklinik.textContent();
    const lantai = await this.modalLantai.textContent();

    console.log("Nama Poliklinik: ", namaPoliklinik);
    console.log("Lantai: ", lantai);

    await this.closeButton.click();
    await this.modalPoliklinikDetail.waitFor({ state: "hidden" });
  }

  async bacaDataLaboratorium() {
    await this.lihatDetailLaboratoriumButton.click();
    await this.modalLaboratorium.waitFor({ state: "visible" });

    const noPasien = await this.modalNoPasien.textContent();
    const hasilLab = await this.modalHasilLab.textContent();
    const keterangan = await this.modalKeterangan.textContent();

    console.log("Nomor Pasien: ", noPasien);
    console.log("Hasil Lab: ", hasilLab);
    console.log("Keterangan: ", keterangan);

    await this.closeButton.click();
    await this.modalLaboratorium.waitFor({ state: "hidden" });
  }
}
