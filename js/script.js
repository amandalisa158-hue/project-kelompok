document.addEventListener("DOMContentLoaded", function () {

    // 1. Tombol Informasi UKM
    const tombol = document.querySelector("#tombolInfo");

    if (tombol) {
        tombol.addEventListener("click", function () {
            alert(
                "Silakan pilih UKM sesuai minat dan bakat. " +
                "Untuk informasi pendaftaran, hubungi pengurus UKM."
            );
        });
    }

    // 2. Tombol Mode Gelap
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

});