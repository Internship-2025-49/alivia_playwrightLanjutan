import { expect, type Locator, type Page } from "@playwright/test";
import { faker } from "@faker-js/faker/locale/id_ID";

enum Keluarga {
  Ayah = "Ayah",
  Ibu = "Ibu",
  Adek = "Adek",
  Kakak = "Kakak",
  Saudara = "Saudara",
}

interface Pasien {
  nama_pasien: string;
  j_kel: string;
  agama: string;
  alamat: string;
  tgl_lahir: string;
  usia: string;
  no_telp: number;
  nama_kk: string;
  hub_kel: string;
  list_keluarga: Keluarga;
}

export const keluhan = faker.helpers.arrayElement([
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

export const nama_pasien = faker.person.fullName();
enum JenKel {
  Laki = "Laki-laki",
  Perempuan = "Perempuan",
}
export const j_kel = faker.helpers.enumValue(JenKel);
enum kepercayaan {
  Islam = "Islam",
  Hindu = "Hindu",
  Kristen = "Kristen",
  Budha = "Budha",
}

export const agama = faker.helpers.enumValue(kepercayaan);
export const alamat = faker.location.streetAddress();
export const tgl_lahir = faker.date
  .birthdate({ min: 18, max: 65, mode: "age" })
  .toISOString()
  .split("T")[0];
export const usia = faker.string.numeric(2);
export const no_telp = faker.phone.number({ style: "human" });
export const nama_kk = faker.person.lastName();

export const hub_kel = faker.helpers.enumValue(Keluarga);

export const diagnosa = faker.helpers
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

export const resep = faker.helpers.arrayElement([
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

export const tgl_pemeriksaan = faker.date.recent().toISOString().split("T")[0];

export const ket_tindakan = faker.helpers.arrayElement([
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

export const nm_tindkan = faker.helpers.arrayElement(["Pemeriksaan Umum"]);

export const namaObat = faker.helpers.arrayElement([
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

export const ukuranObat = faker.helpers.arrayElement([
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

export const jumObat = faker.string.numeric(2);

export const hargaObat = faker.string.numeric(2);

export const tgl_kunjungan = faker.date
  .birthdate({ min: 18, max: 65, mode: "age" })
  .toISOString()
  .split("T")[0];

export const jam_kunjungan = faker.date
  .between({
    from: "2023-01-01T00:00:00.000Z",
    to: "2030-01-01T00:00:00.000Z",
  })
  .toISOString()
  .split("T")[1]
  .slice(0, 8);

export const nm_poli = faker.helpers.arrayElement([
  "poli gigi",
  "poli mata",
  "poli anak",
  "poli jiwa",
  "poli si",
  "poli gizi",
]);

export const sip = faker.string.numeric(10);

export const lantai = faker.string.numeric(1);

export const rk_medis = faker.helpers.arrayElement(["75", "76", "91", "97"]);

export const hasil_lab = faker.helpers.arrayElement([
  "Hemoglobin: Normal",
  "Kolesterol: Tinggi",
  "Gula darah: Normal",
  "Fungsi hati: Dalam batas normal",
  "Trombosit: Rendah",
]);

export const ket = faker.helpers.arrayElement([
  "Pasien diminta istirahat total",
  "Resep obat telah diberikan",
  "Pasien disarankan kontrol ulang",
  "Rekomendasi pola makan sehat",
  "Rujukan ke dokter spesialis",
]);

export const obat = faker.helpers.arrayElement([
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

export const tgl_periksa = faker.date
  .birthdate({ min: 18, max: 65, mode: "age" })
  .toISOString()
  .split("T")[0];

export const status = faker.helpers.arrayElement([
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
