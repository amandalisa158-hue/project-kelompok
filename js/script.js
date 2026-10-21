
const tombolTema = document.getElementById("tombol-tema");

if (tombolTema) {
  tombolTema.addEventListener("click", function () {
    document.body.classList.toggle("gelap");

    if (document.body.classList.contains("gelap")) {
      tombolTema.textContent = "Mode Terang";
    } else {
      tombolTema.textContent = "Mode Gelap";
    }
  });
}


const tombolKirim = document.getElementById("tombol-kirim");

if (tombolKirim) {
  tombolKirim.addEventListener("click", function () {
    const nama = document.getElementById("nama").value.trim();
    const email = document.getElementById("email").value.trim();
    const pesan = document.getElementById("pesan").value.trim();
    const status = document.getElementById("status-form");

    if (nama === "" || email === "" || pesan === "") {
      status.textContent = "Semua kolom wajib diisi.";
    } else {
      status.textContent =
        "Terima kasih, " + nama + ". Pesan Anda diterima.";
    }
  });
}