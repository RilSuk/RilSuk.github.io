// menu.js

// Pastikan seluruh kode berjalan setelah DOM siap
document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.getElementById('menuBtn');
    const menuDropdown = document.getElementById('menuDropdown');
    const overlay = document.querySelector('.custom-overlay');

    if (menuButton && menuDropdown && overlay) {
        menuButton.addEventListener('click', function (e) {
            e.stopPropagation(); // Hindari event bubbling ke document
            this.classList.toggle('active'); 
            menuDropdown.classList.toggle('hidden');
            overlay.classList.toggle('hidden');
        });

        // Tutup menu jika klik di luar
        document.addEventListener('click', function (e) {
            const isClickInsideMenu = menuButton.contains(e.target) || menuDropdown.contains(e.target);
            if (!isClickInsideMenu) {
                menuDropdown.classList.add('hidden');
                overlay.classList.add('hidden');
                menuButton.classList.remove('active');
            }
        });
    }
});
