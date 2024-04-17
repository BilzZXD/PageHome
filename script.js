// Contoh kode JavaScript untuk interaksi halaman beranda, misalnya animasi atau pengolahan data
// Untuk contoh, kita akan menambahkan efek melayang ke tombol "Beli Sekarang" di banner

const beliSekarangButton = document.querySelector('#banner .btn');

beliSekarangButton.addEventListener('mouseover', function() {
    this.style.transform = 'translateY(-5px)';
});

beliSekarangButton.addEventListener('mouseout', function() {
    this.style.transform = 'translateY(0)';
});
