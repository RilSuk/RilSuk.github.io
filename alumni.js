		const cardsPerPage = 20;
		let currentPage = 1;
		
		// Data kartu
			const cards = [
				//angkatan 6
				{
					foto: "images/A6/abghi.jpg",
					jurusan: "TEKNIK INFORMATIKA",
					kampus: "Politeknik Caltex Riau",
					nama: "Abghi Fadlan",
					jalurMasuk: "PSUD"
				},
				{
					foto: "images/A6/aldi.jpg",
					jurusan: "TEKNIK MESIN",
					kampus: "Universitas Brawijaya",
					nama: "Aldi Rayhan",
					jalurMasuk: "MANDIRI"
				},
				{
					foto: "images/A6/muflih.jpg",
					jurusan: "TEKNIK INFORMATIKA",
					kampus: "Politeknik Caltex Riau",
					nama: "Muflih Farhan",
					jalurMasuk: "PSUD"
				},
				{
					foto: "images/A6/pedro.jpg",
					jurusan: "FKG",
					kampus: "Universitas Padjadjaran",
					nama: "Pedro Al Farez Putra",
					jalurMasuk: "SBMPTN"
				},
				{
					foto: "images/A6/afifah.jpg",
					jurusan: "TEKNIK ELEKTROBIOMEDIS",
					kampus: "Politeknik Kesehatan Jakarta",
					nama: "Afifah Nindya Efendi",
					jalurMasuk: "TES"
				},
				{
					foto: "images/A6/azizah.jpg",
					jurusan: "ARSITEKTUR LANSEKAP",
					kampus: "Institut Pertanian Bogor",
					nama: "Azizah Fauzi",
					jalurMasuk: "SBMPTN"
				},
				{
					foto: "images/A6/samiya.jpg",
					jurusan: "IKK",
					kampus: "Institut Pertanian Bogor",
					nama: "Samiya Syalma Andjanhi",
					jalurMasuk: "SBMPTN"
				},
				{
					foto: "images/A6/ahmad.jpg",
					jurusan: "AKUNTANASI",
					kampus: "UIN Sultan Syarif Kasim Riau",
					nama: "Ahmad Sidiq Saifullah",
					jalurMasuk: "PBUD"
				},
				{
					foto: "images/A6/arif al.jpg",
					jurusan: "AKUTANSI",
					kampus: "Universitas Islam Indonesia",
					nama: "Arif Al Farissi",
					jalurMasuk: "CBT"
				},
				//angkatan 7
				{
					foto: "images/A7/rani.jpg",
					jurusan: "FARMASI",
					kampus: "UIN JAKARTA",
					nama: "Rani Aulia Yuda",
					jalurMasuk: "PTN"
				},
				{
					foto: "images/A7/nur.jpg",
					jurusan: "D3 AKUNTANSI",
					kampus: "UNRI",
					nama: "Nur Izzatil Islam",
					jalurMasuk: "PTN"
				},
				{
					foto: "images/A7/iqbal.jpg",
					jurusan: "SISTEM INFORMASI",
					kampus: "PCR",
					nama: "Muhammad Iqbal",
					jalurMasuk: "PSUD"
				},
				{
					foto: "images/A7/galih.jpg",
					jurusan: "SISTEM INFORMASI",
					kampus: "TELKOM UNIVERSITY",
					nama: "Muhammad Galih Fatihah",
					jalurMasuk: "JPA 1"
				},
				{
					foto: "images/A7/aurellia.jpg",
					jurusan: "D3 OKUPASI TERAPI",
					kampus: "UI",
					nama: "Aurellia Novanda Rahmadanty",
					jalurMasuk: "SIMAK UI"
				},
				{
					foto: "images/A7/syahirah.jpg",
					jurusan: "AKUNTANSI",
					kampus: "UNRI",
					nama: "Syahirah Ulya Fidran",
					jalurMasuk: "BINA LINGKUNGAN"
				},
				//angkatan 9
				{
				foto: "images/A9/Amelia Oktavianda IMG_8247.JPG",
				jurusan: "PSIKOLOGI",
				kampus: "USU",
				nama: "Amelia Oktavianda",
				jalurMasuk: "MANDIRI"
				},
				
				{
				foto: "images/A9/Aqilah Nathania S A IMG_8260.JPG",
				jurusan: "MANAJEMEN BISNIS ISLAM",
				kampus: "TAZKIYA",
				nama: "Aqilah Nathania Sri Arta",
				jalurMasuk: "MANDIRI"
				},
				
				{
				foto: "images/A9/Aulia Habsari IMG_8219.JPG",
				jurusan: "PENDIDIKAN LUAR SEKOLAH",
				kampus: "UNRI",
				nama: "Aulia Habsari",
				jalurMasuk: "MANDIRI"
				},
				
				{
				foto: "images/A9/Aulia Khoirunnisa R IMG_8253.JPG",
				jurusan: "ADMINISTRASI BISNIS",
				kampus: "UIR",
				nama: "Aulia Khoirunnisa Ramadhani",
				jalurMasuk: "MANDIRI"
				},
				
				{
				foto: "images/A9/Ferrari Fatimah Azzahra IMG_8286.JPG",
				jurusan: "ILMU ADMINISTRASI NEGARA",
				kampus: "UIN SUSKA",
				nama: "Ferrari Fatimah Azzahra",
				jalurMasuk: "SBMPTN"
				},
				
				{
				foto: "images/A9/Fita Ramadhania IMG_8281.JPG",
				jurusan: "SISTEM INFORMASI",
				kampus: "PCR",
				nama: "Fita Ramadhania",
				jalurMasuk: "PSUD YPCR"
				},
				
				{
				foto: "images/A9/Hasna Fikriyah Dwinas IMG_8232.JPG",
				jurusan: "SISTEM INFORMASI",
				kampus: "PCR",
				nama: "Hasna Fikiriyah Dwinas",
				jalurMasuk: "SNMPTN"
				},
				
				{
				foto: "images/A9/Naziha Syifa F IMG_8277.JPG",
				jurusan: "PSIKOLOGI",
				kampus: "UIN SUSKA",
				nama: "Naziha Syifa Fakhirah",
				jalurMasuk: "SNMPTN"
				},
				
				{
				foto: "images/A9/Nisa Khairiah IMG_8264.JPG",
				jurusan: "PSIKOLOGI",
				kampus: "UMRI",
				nama: "Nisa Khairiah",
				jalurMasuk: "MANDIRI"
				},
				
				{
				foto: "images/A9/Rara Yuliandriani IMG_8230.JPG",
				jurusan: "MANAJEMEN",
				kampus: "UIN SUSKA",
				nama: "Rara Yuliandriani",
				jalurMasuk: "SNMPTN"
				},
				
				{
				foto: "images/A9/Rheisa Syahla A IMG_8268.JPG",
				jurusan: "SISTEM INFORMASI AKUNTANSI DAN AUDIT",
				kampus: "BINUS",
				nama: "Rheisa Syahla Azzera",
				jalurMasuk: "MANDIRI"
				},
				
				{
				foto: "images/A9/Sarah Salabila IMG_8256.JPG",
				jurusan: "PSIKOLOGI",
				kampus: "UMRI",
				nama: "Sarah Salabila",
				jalurMasuk: "SBMPTN"
				},
				
				{
				foto: "images/A9/Shafira Nurlathifa IMG_8224.JPG",
				jurusan: "PSIKOLOGI",
				kampus: "UMRI",
				nama: "Shafira Nurlathifa",
				jalurMasuk: "SBMPTN"
				},
				
				{
				foto: "images/A9/Sri Wulandari IMG_8271.JPG",
				jurusan: "ILMU HUKUM",
				kampus: "UIN SUSKA",
				nama: "Sri Wulandari",
				jalurMasuk: "SBMPTN"
				},
				
			
				];
				

		
				function renderCards(data = cards) {
		const container = document.getElementById('cardContainer');
		container.innerHTML = '';

		const start = (currentPage - 1) * cardsPerPage;
		const end = start + cardsPerPage;
		const visibleCards = data.slice(start, end);

		visibleCards.forEach(card => {
			const kampusLink = card.kampus
			.toLowerCase()
			.replace(/[^\w\s]/gi, '')
			.replace(/\s+/g, '_') + '.html';

			container.innerHTML += `
			<div class="card p-4 bg-white rounded-lg shadow flex flex-col items-center">
				<div class="flex items-start gap-4 w-full">
				<img src="${card.foto}" alt="Foto" class="photo w-24 h-32 object-contain bg-gray-100 rounded">

				<div class="flex flex-col gap-2 w-full">
					<div class="bg-blue-50 rounded-lg p-2 text-blue-700 text-sm font-semibold w-full text-center">
					${card.jurusan.split(' ').map(word => `<div>${word}</div>`).join('')}
					</div>
					<div class="bg-green-50 rounded-lg p-2 text-green-700 text-sm font-semibold w-full text-center">
					${card.jalurMasuk ? card.jalurMasuk.split(' ').map(word => `<div>${word}</div>`).join('') : 'Jalur Tidak Diketahui'}
					</div>
				</div>
				</div>

				<a 
				href="${kampusLink}" 
				class="kampus-link mt-4 w-full text-center text-xs text-gray-600 font-semibold py-2 rounded hover:bg-blue-100 hover:text-blue-700 transition"
				>
				${card.kampus}
				</a>

				<div class="nama w-full text-lg font-bold bg-gray-200 py-2 px-4 rounded mt-2 text-center">
				${card.nama}
				</div>
			</div>
			`;
		});
		}



		
		function renderPagination() {
		  const pagination = document.getElementById('pagination');
		  pagination.innerHTML = '';
		
		  const pageCount = Math.ceil(cards.length / cardsPerPage);
		
		  pagination.innerHTML += `
			<li><span class="button ${currentPage === 1 ? 'disabled' : ''}" onclick="changePage(${currentPage - 1})">Prev</span></li>
		  `;
		
		  for (let i = 1; i <= pageCount; i++) {
			if (i === 1 || i === pageCount || (i >= currentPage - 1 && i <= currentPage + 1)) {
			  pagination.innerHTML += `
				<li><a href="#" class="page ${currentPage === i ? 'active' : ''}" onclick="changePage(${i})">${i}</a></li>
			  `;
			} else if (i === currentPage - 2 || i === currentPage + 2) {
			  pagination.innerHTML += `
				<li><span>…</span></li>
			  `;
			}
		  }
		
		  pagination.innerHTML += `
			<li><span class="button ${currentPage === pageCount ? 'disabled' : ''}" onclick="changePage(${currentPage + 1})">Next</span></li>
		  `;
		}
		
		function changePage(page) {
		  const pageCount = Math.ceil(cards.length / cardsPerPage);
		  if (page < 1 || page > pageCount) return;
		  currentPage = page;
		  renderCards();
		  renderPagination();
		}
		
		// Jalankan pertama kali
		renderCards();
		renderPagination();
		
		// Event Search
		document.getElementById('searchInput').addEventListener('input', function() {
		const query = this.value.trim().toLowerCase();

		if (query === '') {
			// Kalau search kosong, tampilkan semua
			renderCards();
			renderPagination();
		} else {
			const filteredCards = cards.filter(card => {
			const namaLower = card.nama.toLowerCase();
			const jurusanLower = card.jurusan.toLowerCase();
			const kampusLower = (card.kampus || '').toLowerCase();
			return namaLower.includes(query) || jurusanLower.includes(query) || kampusLower.includes(query);
			});

			currentPage = 1; // Reset ke halaman pertama
			renderCards(filteredCards);
			// Pagination dimatikan/di-hide saat search kalau mau
			document.getElementById('pagination').style.display = "none";
		}
		});

		
