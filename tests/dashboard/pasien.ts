import { expect, type Locator, type Page } from "@playwright/test";

export class PlaywrightPasienPage {
  readonly page: Page;
  readonly sidebarnav: Locator;
  readonly sidebarLinks: { [key: string]: Locator };
  readonly pasien: Page;
  readonly namaPasienInput: Locator;
  readonly jenisKelaminSelect: Locator;
  readonly agamaSelect: Locator;
  readonly alamatInput: Locator;
  readonly tanggalLahirInput: Locator;
  readonly usiaInput: Locator;
  readonly nomorTeleponInput: Locator;
  readonly namaKepalaKeluargaInput: Locator;
  readonly hubunganKeluargaInput: Locator;
  readonly tambahpasien: Locator;
  readonly simpanButton: Locator;

  v;

  constructor(page: Page) {
    this.page = page;
    this.sidebarnav = page.locator("");
    this.sidebarLinks = {
      Pasien: this.sidebarnav.locator("a", { hasText: "Pasien" }),
      RekamMedis: this.sidebarnav.locator("a", { hasText: "Rekam Medis" }),
      Tindakan: this.sidebarnav.locator("a", { hasText: "Tindakan" }),
      Obat: this.sidebarnav.locator("a", { hasText: "Obat" }),
      Kunjungan: this.sidebarnav.locator("a", { hasText: "Kunjungan" }),
      Dokter: this.sidebarnav.locator("a", { hasText: "Dokter" }),
      Poliklinik: this.sidebarnav.locator("a", { hasText: "Poliklinik" }),
      Laboratorium: this.sidebarnav.locator("a", { hasText: "Laboratorium" }),
    };

    this.namaPasienInput = page.locator('label[for="Nama Pasien"]');
    this.jenisKelaminSelect = page.locator('label[for="Jenis Kelamin"]');
    this.agamaSelect = page.locator('label[for="Agama"]');
    this.alamatInput = page.locator('label[for="Alamat"]');
    this.tanggalLahirInput = page.locator('label[for="Tanggal Lahir"]');
    this.usiaInput = page.locator('label[for="Usia"]');
    this.nomorTeleponInput = page.locator('label[for="Nomor Telepon"]');
    this.namaKepalaKeluargaInput = page.locator(
      'label[for="Nama Kepala Keluarga"]'
    );
    this.hubunganKeluargaInput = page.locator('label[for="Hubungan Keluarga"]');
    this.simpanButton = page.locator("button", { hasText: "Simpan" });
  }

  // Metode untuk mengisi form pasien
  async tambahPasien({
    namaPasien,
    jenisKelamin,
    agama,
    alamat,
    tanggalLahir,
    usia,
    nomorTelepon,
    namaKepalaKeluarga,
    hubunganKeluarga,
  }: {
    namaPasien: string;
    jenisKelamin: string;
    agama: string;
    alamat: string;
    tanggalLahir: string;
    usia: string;
    nomorTelepon: string;
    namaKepalaKeluarga: string;
    hubunganKeluarga: string;
  }) {
    await this.page.goto("http://127.0.0.1:8000/pasiens");

    await this.page.getByRole("link", { name: " Pasien" }).click();
    // await this.page.getByRole("link", { name: "Pasien" }).click();
    await this.page.getByRole("link", { name: "Tambah Pasien" }).click();
    // await page.locator('a[href="http://127.0.0.1:8000/pasiens"]').click(); // Untuk "Pasien"
    // await page.locator('a[href="http://127.0.0.1:8000/pasiens/create"]').click(); // Untuk "Tambah Pasien"

    // Mengisi form pasien
    await this.namaPasienInput.fill(namaPasien);
    await this.jenisKelaminSelect.selectOption(jenisKelamin);
    await this.agamaSelect.selectOption(agama);
    await this.alamatInput.fill(alamat);
    await this.tanggalLahirInput.fill(tanggalLahir);
    await this.usiaInput.fill(usia);
    await this.nomorTeleponInput.fill(nomorTelepon);
    await this.namaKepalaKeluargaInput.fill(namaKepalaKeluarga);
    await this.hubunganKeluargaInput.fill(hubunganKeluarga);

    // Mengklik tombol simpan
    await this.simpanButton.click();
  }
}
