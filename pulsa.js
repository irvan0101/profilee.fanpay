let selectedProduct = "";
let selectedPrice = "";
const adminNumber = "6283834894816"; // Nomor WA admin

// Ganti kategori
function showCategory(id, event) {
  document.querySelectorAll('.price-list').forEach(el => el.classList.remove('active'));
  document.querySelectorAll('.categories button').forEach(btn => btn.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  event.target.classList.add('active');
}

// Pilih produk
function selectProduct(product, price) {
  selectedProduct = product;
  selectedPrice = price;
  document.getElementById("orderForm").style.display = "flex";
  window.scrollTo({ top: document.getElementById("orderForm").offsetTop, behavior: 'smooth' });
}

// Kirim ke WhatsApp
function sendToWA() {
  const userWA = document.getElementById("waNumber").value;
  if (userWA === "") {
    alert("Masukkan nomor WhatsApp terlebih dahulu!");
    return;
  }
  const now = new Date();
  const dateTime = now.toLocaleString("id-ID");
  const message = `Halo Admin, saya ingin beli produk:
Produk: ${selectedProduct}
Harga: ${selectedPrice}
No WA: ${userWA}
Tanggal/Waktu: ${dateTime}

Catatan: Selesaikan transaksi dalam 10 menit jika tidak maka ulangi pembelian.`;
  const url = `https://wa.me/${adminNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}
