  // Data penyakit dan gejala
  const penyakitGejala = {
    "CONTRACT ULCERS": ["nyeri saat bicara atau menelan", "suara serak"],
    "ABAES PARAFARINGEAL": ["gejala1", "gejala2"],
    // Tambahkan data penyakit dan gejala lainnya 
};

// Fungsi untuk menampilkan gejala yang sesuai dengan nama penyakit yang dipilih
function tampilkanGejala() {
    const penyakitTerpilih = document.getElementById("penyakit").value;
    const gejalaDiv = document.getElementById("gejala");
    const gejalaText = document.getElementById("gejalaText");
    gejalaText.textContent = penyakitGejala[penyakitTerpilih] ? penyakitGejala[penyakitTerpilih].join(", ") : "";
    gejalaDiv.style.display = penyakitGejala[penyakitTerpilih] ? "block" : "none";
}