const nama_penyakit = [
  { nama: "CONTRACT ULCERS", gejala: [1] },
  { nama: "ABAES PARAFARINGEAL", gejala: [2] },
  { nama: "ABAES PERITONAILER", gejala: [3] },
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
