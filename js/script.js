// CEK NAMA SAAT LOAD
window.onload = function () {
    const nama = localStorage.getItem("namaUser");
    if (nama) {
        document.getElementById("popupNama").style.display = "none";
        document.getElementById("welcomeText").innerText =
            "Selamat Datang, " + nama;
    }
};

// SIMPAN NAMA
function simpanNama() {
    const nama = document.getElementById("namaAwal").value;
    if (nama === "") {
        alert("Nama wajib diisi!");
        return;
    }

    localStorage.setItem("namaUser", nama);
    document.getElementById("popupNama").style.display = "none";
    document.getElementById("welcomeText").innerText =
        "Selamat Datang, " + nama;
}

// MESSAGE US
function kirim() {
    const nama = document.getElementById("nama").value;
    const saran = document.getElementById("saran").value;
    const pesan = document.getElementById("pesan").value;

    if (!nama || !saran || !pesan) {
        alert("Semua data harus diisi!");
        return;
    }

    document.getElementById("hasil").innerHTML = `
        <p><b>Current Time:</b> ${new Date().toLocaleString()}</p>
        <p>Nama : ${nama}</p>
        <p>Saran : ${saran}</p>
        <p>Pesan : ${pesan}</p>
    `;

    document.getElementById("contactForm").reset();
}
