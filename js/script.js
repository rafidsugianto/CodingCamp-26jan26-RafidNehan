function kirim() {
    const nama = document.getElementById("nama").value;
    const saran = document.getElementById("saran").value;
    const pesan = document.getElementById("pesan").value;

    if (!nama || !saran || !pesan) {
        alert("Semua data wajib diisi!");
        return;
    }

    document.getElementById("hasil").innerHTML = `
        <p><b>Current Time:</b> ${new Date().toLocaleString()}</p>
        <p>Nama : ${nama}</p>
        <p>saran: ${saran}</p>
        <p>Jenis Kelamin : ${jk.value}</p>
        <p>Pesan : ${pesan}</p>
    `;

    document.getElementById("contactForm").reset();
}
