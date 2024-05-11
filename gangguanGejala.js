const nama_penyakit = [
  { nama: "CONTRACT ULCERS", gejala: [1] },
  { nama: "ABAES PARAFARINGEAL", gejala: [2] },
  { nama: "ABAES PERITONAILER", gejala: [3] },
  { nama: "BAROTITIS MEDIA", gejala: [4] },
  { nama: "DEVIASI SEPTUM", gejala: [5] },
  { nama: "FARINGITIS", gejala: [6] },
  { nama: "KANKER LARING", gejala: [7] },
  { nama: "KANKER LEHER DAN KEPALA", gejala: [8] },
  { nama: "KANKER LEHER METASTATIK", gejala: [9] },
  { nama: "KANKER NASOFARING", gejala: [10] },
  { nama: "KANKER TONSIL", gejala: [11] },
  { nama: "LARINGITIS", gejala: [12] },
  { nama: "NEURONITIS VESTIBULARIS", gejala: [13] },
  { nama: "OSTEOSKLEROSIS", gejala: [14] },
  { nama: "OTITIS MEDIA AKUT", gejala: [15] },
  { nama: "MENIERE", gejala: [16] },
  { nama: "TONSILITIS", gejala: [17] },
  { nama: "TUMOR SYARAF PENDENGARAN", gejala: [18] },
  { nama: "VERTIGO POSTULAR", gejala: [19] },
  { nama: "SINUSITIS MAKSILARIS", gejala: [20] },
  { nama: "SINUSITIS FRONTALIS", gejala: [21] },
  { nama: "SINUSITIS ETMOIDALIS", gejala: [22] },
  { nama: "SINUSITIS SFENOIDALIS", gejala: [23] },
  { nama: "PERUT", gejala: [24] },
  // Tambahkan data nama_penyakit lainnya sesuai dengan data yang diberikan
];

// Fungsi untuk mendiagnosa nama_penyakit berdasarkan gejala yang dipilih
function diagnosa() {
  const gejalaTerpilih = Array.from(
    document.querySelectorAll('input[name="gejala"]:checked')
  ).map((checkbox) => parseInt(checkbox.value));
  const hasilDiagnosa = [];
  nama_penyakit.forEach((p) => {
    if (p.gejala.every((g) => gejalaTerpilih.includes(g))) {
      hasilDiagnosa.push(p.nama);
    }
  });
  const hasilDiagnosaDiv = document.getElementById("hasilDiagnosa");
  const hasilText = document.getElementById("hasilText");
  if (hasilDiagnosa.length > 0) {
    hasilText.textContent =
      "Berdasarkan gejala yang Anda alami, kemungkinan penyakit yang Anda derita adalah: " +
      hasilDiagnosa.join(", ");
  } else {
    hasilText.textContent =
      "Maaf, berdasarkan gejala yang Anda alami, tidak dapat didiagnosa penyakit THT yang spesifik.";
  }
  hasilDiagnosaDiv.style.display = "block";
}
function toggleCheckbox(checkbox) {
  const checkboxes = document.querySelectorAll('input[name="gejala"]');
  checkboxes.forEach((cb) => {
    if (cb !== checkbox) {
      cb.checked = false;
    }
  });
}
