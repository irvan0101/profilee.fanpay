const nomorAdmin = "628xxxxxx"; // ganti dengan nomor admin kamu

function bukaForm() {
document.getElementById("overlayForm").classList.add("show");
}

function tutupForm() {
document.getElementById("overlayForm").classList.remove("show");
}

function kirimPesan() {
const nama = document.getElementById("nama").value;
const email = document.getElementById("email").value;
const pesan = document.getElementById("pesan").value;

if (!nama || !pesan) {
  alert("Harap isi nama dan pesan terlebih dahulu!");
  return;
}

const text = `Halo Admin FanPay 👋%0A%0ANama: ${nama}%0AEmail: ${email}%0APesan: ${pesan}`;
window.open(`https://wa.me/${nomorAdmin}?text=${text}`, "_blank");
}

// Popup langsung tampil + auto hilang
window.addEventListener("load", () => {
const popup = document.getElementById("popupChat");
popup.style.opacity = "1";
popup.style.bottom = "30px";

setTimeout(() => {
  popup.style.opacity = "0";
  popup.style.bottom = "-100px";
}, 10000);
});
