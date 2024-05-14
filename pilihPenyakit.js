  // Data penyakit dan gejala
  const penyakitGejala = {
      "CONTRACT ULCERS": ["nyeri saat bicara atau menelan", "suara serak"],
      "ABAES PARAFARINGEAL": ["nyeri saat bicara atau menelan", "leher bengkak"],
      "ABAES PERITONAILER": ["demam", "sakit kepala","nyeri tenggorokan","pembengkakan kelenjar getah bening","suara serak","air liur menetes"],
      "BAROTITIS MEDIA": ["sakit kepala", "nyeri telinga"],
      "DEVIASI SEPTUM": ["demam", "hidung tersumbat", "nyeri telinga", "pendarahan hidung", "infeksi sinus", "nyeri wajah"],
      "FARINGITIS": ["demam", "nyeri saat bicara atau menelan", "nyeri tenggorokan", "nyeri leher", "pembengkakan kelenjar getah bening"],
      "KANKER LARING": ["nyeri saat bicara atau menelan", "batuk", "nyeri tenggorokan", "nyeri leher", "suara serak", "berat badan turun", "bunyi nafas abnormal"],
      "KANKER LEHER DAN KEPALA": ["nyeri saat bicara atau menelan", "ada benjolan di leher", "pendarahan hidung", "ada yang tumbuh di mulut", "perubahan warna kulit", "perubahan suara"],
      "KANKER LEHER METASTATIK": ["ada benjolan di leher"],
      "KANKER NASOFARING": ["hidung tersumbat", "pendarahan hidung"],
      "KANKER TONSIL": ["nyeri tenggorokan", "ada benjolan di leher"],
      "LARINGITIS": ["demam", "nyeri saat bicara atau menelan", "pembengkakan kelenjar getah bening", "leher bengkak", "tenggorokan gatal"],
      "NEURONITIS VESTIBULARIS": ["mual dan muntah", "bola mata bergerak tanpa sadar"],
      "OSTEOSKLEROSIS": ["tuli", "telinga berdenging"],
      "OTITIS MEDIA AKUT": ["demam", "nyeri telinga", "mual dan muntah", "radang gendang telinga"],
      "MENIERE": ["nyeri telinga", "mual dan muntah", "serangan vertigo", "telinga terasa penuh"],
      "TONSILITIS": ["demam", "sakit kepala", "nyeri saat bicara atau menelan", "batuk", "nyeri tenggorokan", "mual dan muntah"],
      "TUMOR SYARAF PENDENGARAN": ["sakit kepala", "tuli", "tubuh tak seimbang"],
      "VERTIGO POSTULAR": ["bola mata bergerak tanpa sadar"],
      "SINUSITIS MAKSILARIS": ["demam", "sakit kepala", "batuk", "hidung tersumbat", "hidung meler", "letih dan lesu", "selaput lendir merah dan bengkak", "nyeri pipi dibawah mata", "sakit gigi"],
      "SINUSITIS FRONTALIS": ["demam", "sakit kepala", "batuk", "hidung tersumbat", "hidung meler", "letih dan lesu", "selaput lendir merah dan bengkak", "dahi sakit"],
      "SINUSITIS ETMOIDALIS": ["demam", "sakit kepala", "batuk", "hidung tersumbat", "hidung meler", "letih dan lesu", "selaput lendir merah dan bengkak", "dahi sakit", "nyeri antara mata", "nyeri pinggir hidung"],
      "SINUSITIS SFENOIDALIS": ["demam", "sakit kepala", "batuk", "hidung tersumbat", "nyeri telinga", "hidung meler", "letih dan lesu", "selaput lendir merah dan bengkak", "ada benjolan di leher"],
      "PERUT": ["demam", "sakit kepala", "nyeri saat bicara atau menelan", "batuk"],
}
  



function tampilkanGejala() {
  const select = document.getElementById("penyakit");
  const penyakit = select.value;
  const gejalaContainer = document.getElementById("gejala");
  const gejalaList = document.getElementById("gejalaText");
  const gejalaCount = document.getElementById("gejalaCount");

  const gejala = penyakitGejala[penyakit] || [];
  const jumlahGejala = gejala.length;

  gejalaList.innerHTML = ""; 
  gejala.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      gejalaList.appendChild(li);
  });

  gejalaCount.textContent = `Terdapat ${jumlahGejala} Gejala yang Dialami:`;
  gejalaContainer.style.display = jumlahGejala > 0 ? "block" : "none";
}
