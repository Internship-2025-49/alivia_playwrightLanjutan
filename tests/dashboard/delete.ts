import { Locator, Page } from "@playwright/test";

export class PlaywrightDeletePage {
  readonly page: Page;

  // Lokator untuk tombol delete berdasarkan kelas dan jenis tombol
  readonly deleteButton: Locator;

  constructor(page: Page) {
    this.page = page;

    // Lokator untuk tombol delete yang menggunakan kelas btn-danger dan onClick dengan konfirmasi
    this.deleteButton = page.locator(
      'input[type="hidden"][name="_method"][value="DELETE"]'
    );
  }

  // Fungsi untuk mengklik tombol delete
  async clickDelete() {
    await this.deleteButton.click();
  }
}
