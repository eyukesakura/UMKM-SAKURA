const jumlahPesanInput = document.getElementById('jumlahPesan');
const totalHargaElem = document.getElementById('totalHarga');
const hargaSatuan = 15000;

function hitungTotal() {
    let jumlah = parseInt(jumlahPesanInput.value);
    if (isNaN(jumlah) || jumlah < 1) {
        jumlah = 0;
    }
    let total = jumlah * hargaSatuan;
    totalHargaElem.innerText = "Rp " + total.toLocaleString('id-ID');
}

jumlahPesanInput.addEventListener('input', hitungTotal);
jumlahPesanInput.addEventListener('keyup', hitungTotal);
jumlahPesanInput.addEventListener('change', hitungTotal);

const btnWhatsappOrder = document.getElementById('btnWhatsappOrder');
btnWhatsappOrder.addEventListener('click', function() {
    const varian = document.getElementById('pilihVarian').value;
    const jumlah = document.getElementById('jumlahPesan').value;
    const totalHargaText = totalHargaElem.innerText;

    const noWhatsApp = "6283899346409";
    const pesan = `Halo Kak Eyuke, saya ingin memesan Sakura Piscok:\n\n- Varian: ${varian}\n- Jumlah: ${jumlah} porsi\n- Total: ${totalHargaText}\n\nMohon konfirmasi pemesanannya ya. Terima kasih! ♡`;
    
    const urlWA = `https://wa.me/${noWhatsApp}?text=${encodeURIComponent(pesan)}`;
    window.open(urlWA, '_blank');
});

const formUlasan = document.getElementById('formUlasan');
const reviewsContainer = document.getElementById('reviews-container');

formUlasan.addEventListener('submit', function(e) {
    e.preventDefault();

    const nama = document.getElementById('namaUlasan').value.trim();
    const komentar = document.getElementById('komentarUlasan').value.trim();
    const ratingValue = document.getElementById('ratingUlasan').value;

    let starString = '';
    const ratingNum = parseInt(ratingValue);
    for (let i = 0; i < 5; i++) {
        if (i < ratingNum) {
            starString += '★';
        } else {
            starString += '☆';
        }
    }

    const newReview = document.createElement('div');
    newReview.classList.add('review-item');
    newReview.innerHTML = `
        <p class="stars">${starString}</p>
        <p class="review-text">"${escapeHtml(komentar)}"</p>
        <p class="review-name">${escapeHtml(nama)}</p>
    `;

    reviewsContainer.prepend(newReview);
    formUlasan.reset();
    alert('Ulasan berhasil dikirim! Terima kasih atas dukungannya ♡');
});

function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, function(m) { return map[m]; });
});