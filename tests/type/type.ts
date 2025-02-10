export interface typeRekamMedis {
  no_pasien: string;
  kd_tindakan: string;
  kd_obat: string;
  diagnosa: string;
  resep: string;
  keluhan: string;
  tgl_pemeriksaan: string;
  ket_tindakan: string;
}

export interface typePasien {
  nm_pasien: string;
  j_kel: string;
  agama: string;
  alamat: string;
  tgl_lahir: string;
  usia: string;
  no_telp: string;
  nama_kk: string;
  hub_kel: string;
}

export interface typeTindakan {
  ket_tindakan: string;
  nm_tindakan: string;
}

export interface typeObat {
  namaObat: string;
  jumObat: string;
  ukuranObat: string;
  hargaObat: string;
}

export interface typeKunjungan {
  tgl_kunjungan: string;
  no_pasien: string;
  nm_poli: string;
  jam_kunjungan: string;
}

export interface typeDokter {
  nama_dokter: string;
  sip: string;
  nm_poli: string;
  tgl_kunjungan: string;
  no_telp: string;
  alamat: string;
  tmp_lahir: string;
}

export interface typePoliklinik {
  nm_poli: string;
  lantai: string;
}

export interface typeLaboratorium {
  rk_medis: string;
  hasil_lab: string;
  ket: string;
}
