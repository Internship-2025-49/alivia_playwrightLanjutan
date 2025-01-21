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

    this.lihatDetailTindakanButton = page
      .getByRole("row", { name: "Pembedahan coba aja   " })
      .getByRole("button")
      .first();

    this.modalTindakan = page.locator("#detailModal");
    this.namaTindakanDetail = this.modalTindakan.locator("#modalNamaTindakan");
    this.keteranganTindakanDetail =
      this.modalTindakan.locator("#modalDeskripsi");
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
}
