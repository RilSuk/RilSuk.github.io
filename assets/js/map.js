// Inisialisasi peta
const map = L.map('map').setView([-7.7693, 110.3727], 16); // Lokasi UGM dengan zoom 16

// Tambahkan tile layer dari OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Peta oleh OpenStreetMap Contributors'
}).addTo(map);

// Tambahkan marker untuk UGM
const markerUGM = L.marker([-7.7693, 110.3727]).addTo(map);
markerUGM.bindPopup(`
    <div class="popup-content">
        <h2>Universitas Gadjah Mada</h2>
        <img src="UGM.jpg" alt="Logo UGM">
        <p>Universitas Gadjah Mada (UGM) adalah salah satu universitas negeri terbaik di Indonesia, berlokasi di Yogyakarta.</p>
    </div>
`);

// Marker kedua untuk lokasi fakultas lain
const markerFakultasTeknik = L.marker([-7.7665, 110.3745]).addTo(map);
markerFakultasTeknik.bindPopup(`
    <div class="popup-content">
        <h2>Fakultas Teknik UGM</h2>
        <img src="https://www.ft.ugm.ac.id/wp-content/uploads/2019/10/ftugm.png" alt="Fakultas Teknik">
        <p>Fakultas Teknik UGM menawarkan berbagai program studi unggulan di bidang teknik dan rekayasa.</p>
    </div>
`);
