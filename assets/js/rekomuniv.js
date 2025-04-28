const universities = [
    { name: "Institut Ilmu Al-Qur'an", category: "Swasta", island: "Jawa", accreditation:"A", image: "images/foto/iiq_image.jpg", logoimage: "images/logo/iiq_logo.jpg", description: "Institut Ilmu Al-Qur'an merupakan perguruan tinggi swasta yang berfokus pada pendidikan Al-Qur'an dan studi Islam di Tangerang Selatan." },
    { name: "Sekolah Tinggi Agama Islam Imam Asy-Syafii (STAI-IMSYA)", category: "Swasta", island: "Sumatra", image: "images/foto/stai_image.jpg", logoimage: "images/logo/stai_logo.jpg", description: "STAI Imam Asy-Syafii Pekanbaru adalah institusi pendidikan tinggi Islam yang menawarkan berbagai program studi keagamaan di Riau." },
    { name: "Politeknik Negeri Batam (Polibatam)", category: "Negeri", island: "Sumatra", image: "images/foto/Polibatam_image.jpg", logoimage: "images/logo/Polibatam_logo.jpg", description: "Polibatam adalah politeknik negeri yang terletak di Batam, menawarkan pendidikan vokasi yang fokus pada industri dan teknologi." },
    { name: "Institut Pertanian Stiper (INSTIPER)", category: "Swasta", island: "Jawa", image: "images/foto/Instiper_image.jpg", logoimage: "images/logo/Instiper_logo.jpg", description: "INSTIPER Yogyakarta adalah perguruan tinggi swasta yang mengkhususkan diri pada bidang pertanian, kehutanan, dan perkebunan." },
    { name: "Universitas Pertamina (UP)", category: "Swasta", island: "Jawa", image: "images/foto/up_image.jpg", logoimage: "images/logo/up_logo.jpg", description: "Universitas Pertamina merupakan universitas swasta yang didirikan oleh PT Pertamina, fokus pada energi dan teknologi." },
    { name: "Universitas Negeri Makassar (UNM)", category: "Negeri", island: "Sulawesi", image: "images/foto/unm_image.jpg", logoimage: "images/logo/unm_logo.jpg", description: "UNM adalah universitas negeri terkemuka di Makassar yang menawarkan berbagai program studi pendidikan dan non-pendidikan." },
    { name: "Institut Agama Islam Tazkia (IAI Tazkia)", category: "Swasta", island: "Jawa", image: "images/foto/iai_image.jpg", logoimage: "images/logo/iai_logo.jpg", description: "IAI Tazkia merupakan perguruan tinggi Islam yang mengintegrasikan ilmu ekonomi syariah dan pendidikan agama." },
    { name: "Institut Kesehatan Indonesia (IKI)", category: "Swasta", island: "Jawa", image: "images/foto/iki_image.jpg", logoimage: "images/logo/iki_logo.jpg", description: "Institut Kesehatan Indonesia berfokus pada pengembangan sumber daya manusia di bidang kesehatan." },
    { name: "Institut Teknologi Sumatera (ITERA)", category: "Negeri", island: "Sumatra", image: "images/foto/itera_image.jpg", logoimage: "images/logo/itera_logo.jpg", description: "ITERA adalah institut teknologi negeri yang berlokasi di Lampung, berperan dalam pengembangan teknologi di Sumatra." },
    { name: "Politeknik Kesehatan Kemenkes Bandung", category: "Negeri", island: "Jawa", image: "images/foto/pkkb_image.jpg", logoimage: "images/logo/pkkb_logo.jpg", description: "Poltekkes Bandung adalah institusi pendidikan kesehatan milik Kemenkes yang menyediakan pendidikan vokasi kesehatan." },
    { name: "Universitas Ahmad Dahlan (UAD)", category: "Swasta", island: "Jawa", image: "images/foto/uad_image.jpg", logoimage: "images/logo/uad_logo.jpg", description: "UAD Yogyakarta merupakan universitas swasta berbasis Muhammadiyah yang memiliki berbagai program studi unggulan." },
    { name: "Universitas Pelita Harapan (UPH)", category: "Swasta", island: "Jawa", image: "images/foto/uph_image.jpg", logoimage: "images/logo/uph_logo.jpg", description: "UPH adalah universitas Kristen swasta di Banten yang dikenal dengan kualitas pendidikan dan fasilitas internasionalnya." },
    { name: "Universitas Islam Negeri Imam Bonjol (UIN IB)", category: "Negeri", island: "Sumatra", image: "images/foto/uinib_image.jpg", logoimage: "images/logo/uinib_logo.jpg", description: "UIN Imam Bonjol merupakan universitas Islam negeri di Padang yang mengintegrasikan ilmu agama dan ilmu umum." },
    { name: "Universitas Prasetiya Mulya (UPM)", category: "Swasta", island: "Jawa", image: "images/foto/upm_image.jpg", logoimage: "images/logo/upm_logo.jpg", description: "Universitas Prasetiya Mulya dikenal sebagai kampus bisnis swasta terkemuka dengan program inovatif dan kolaboratif." },
    { name: "Universitas Jenderal Soedirman (UNSOED)", category: "Negeri", island: "Jawa", image: "images/foto/unsoed_image.jpg", logoimage: "images/logo/unsoed_logo.jpg", description: "UNSOED merupakan universitas negeri di Purwokerto yang fokus pada pengembangan pedesaan dan kewirausahaan." },
    { name: "Politeknik STTT Bandung", category: "Negeri", island: "Jawa", image: "images/foto/sttt_image.jpg", logoimage: "images/logo/sttt_logo.jpg", description: "Politeknik STTT Bandung adalah institusi vokasi negeri yang mengkhususkan diri pada teknologi tekstil dan fashion." },
    { name: "Institut Seni Budaya Indonesia (ISBI) Bandung", category: "Negeri", island: "Jawa", image: "images/foto/isbi_image.jpg", logoimage: "images/logo/isbi_logo.jpg", description: "ISBI Bandung adalah institut seni negeri yang berfokus pada pelestarian dan pengembangan seni dan budaya Indonesia." },
    { name: "Universitas Malikussaleh", category: "Negeri", island: "Sumatra", image: "images/foto/unimal_image.jpg", logoimage: "images/logo/unimal_logo.jpg", description: "Universitas Malikussaleh adalah universitas negeri di Aceh yang terus berkembang dalam pendidikan, penelitian, dan pengabdian masyarakat." },
    { name: "Universitas Jambi (UNJA)", category: "Negeri", island: "Sumatra", accreditation:"A", image: "images/foto/unja_image.jpg", logoimage: "images/logo/unja_logo.jpg", description: "Universitas Jambi adalah institusi pendidikan negeri di Jambi yang berfokus pada pengembangan ilmu pengetahuan dan teknologi." },
    { name: "Universitas Prof. Dr. Moestopo (Beragama) (UPDM(B))", category: "Swasta", island: "Jawa", accreditation:"B", image: "images/foto/updmb_image.jpg", logoimage: "images/logo/updmb_logo.jpg", description: "UPDM(B) adalah kampus swasta di Jakarta yang terkenal dengan pendidikan berkualitas di bidang komunikasi dan kedokteran gigi." },
    { name: "STAI Al-Bayan Hidayatullah Makassar", category: "Swasta", island: "Sulawesi", accreditation:"C", image: "images/foto/stai_image.jpg", logoimage: "images/logo/stai_logo.jpg", description: "STAI Al-Bayan Makassar adalah perguruan tinggi Islam yang menawarkan program studi keagamaan dan pendidikan guru." },
    { name: "PPM School of Management (PPM SoM)", category: "Swasta", island: "Jawa", accreditation:"A", image: "images/foto/ppmsom_image.jpg", logoimage: "images/logo/ppmsom_logo.jpg", description: "PPM SoM merupakan sekolah bisnis ternama di Jakarta dengan fokus pada manajemen dan kepemimpinan." },
    { name: "UPN 'Veteran' Yogyakarta (UPNYK)", category: "Negeri", island: "Jawa", accreditation:"B", image: "images/foto/upnyk_image.jpg", logoimage: "images/logo/upnyk_logo.jpg", description: "UPN 'Veteran' Yogyakarta adalah perguruan tinggi negeri dengan visi membentuk lulusan berjiwa bela negara dan unggul secara akademik." },
    { name: "IPB University (Institut Pertanian Bogor)", category: "Negeri", island: "Jawa", accreditation:"A", image: "images/foto/ipb_image.jpg", logoimage: "images/logo/ipb_logo.jpg", description: "IPB University adalah kampus negeri yang unggul di bidang pertanian, sains, dan teknologi, berlokasi di Bogor." },
    { name: "Universitas Islam Darul Ulum (UNISDA)", category: "Swasta", island: "Jawa", accreditation:"B", image: "images/foto/unisda_image.jpg", logoimage: "images/logo/unisda_logo.jpg", description: "UNISDA Lamongan adalah universitas Islam yang menyediakan berbagai program studi dengan nilai-nilai keislaman." },
    { name: "Politeknik Kesehatan Kemenkes Jakarta I", category: "Negeri", island: "Jawa", accreditation:"B", image: "images/foto/poltekkesjakarta1_image.jpg", logoimage: "images/logo/poltekkesjakarta1_logo.jpg", description: "Poltekkes Jakarta I adalah politeknik negeri yang menyediakan pendidikan tinggi di bidang kesehatan." },
    { name: "Universitas Trilogi", category: "Swasta", island: "Jawa", accreditation:"B", image: "images/foto/trilogi_image.jpg", logoimage: "images/logo/trilogi_logo.jpg", description: "Universitas Trilogi Jakarta adalah perguruan tinggi dengan fokus pada technopreneurship dan inovasi sosial." },
    { name: "Universitas YARSI", category: "Swasta", island: "Jawa", accreditation:"B", image: "images/foto/yarsi_image.jpg", logoimage: "images/logo/yarsi_logo.jpg", description: "Universitas YARSI merupakan kampus swasta Islam yang terkenal dengan program studi kedokteran dan sains kesehatan." },
    { name: "Sekolah Tinggi Ilmu Farmasi Riau (STIFAR Riau)", category: "Swasta", island: "Sumatra", accreditation:"B", image: "images/foto/stifar_image.jpg", logoimage: "images/logo/stifar_logo.jpg", description: "STIFAR Riau adalah perguruan tinggi farmasi yang menyediakan pendidikan berkualitas di bidang kefarmasian di Pekanbaru." },
    { name: "Politeknik Kesehatan Kemenkes Riau", category: "Negeri", island: "Sumatra", accreditation:"B", image: "images/foto/poltekkesriau_image.jpg", logoimage: "images/logo/poltekkesriau_logo.jpg", description: "Poltekkes Riau adalah institusi pendidikan kesehatan negeri di Riau dengan berbagai program diploma bidang kesehatan." },
    { name: "Universitas Gunadarma (UG)", category: "Swasta", island: "Jawa", accreditation:"A", image: "images/foto/ug_image.jpg", logoimage: "images/logo/ug_logo.jpg", description: "Universitas Gunadarma adalah kampus swasta besar di Depok yang unggul dalam bidang teknologi dan informatika." },
    { name: "Universitas Baiturrahmah (Unbrah)", category: "Swasta", island: "Sumatra", accreditation:"B", image: "images/foto/unbrah_image.jpg", logoimage: "images/logo/unbrah_logo.jpg", description: "Unbrah Padang merupakan perguruan tinggi swasta yang dikenal dengan program-program di bidang kesehatan dan ilmu sosial." },
    { name: "Politeknik Pariwisata NHI Bandung", category: "Negeri", island: "Jawa", accreditation:"A", image: "images/foto/poltekparnhi_image.jpg", logoimage: "images/logo/poltekparnhi_logo.jpg", description: "Poltekpar NHI Bandung adalah institusi negeri terkemuka di Indonesia yang berfokus pada pendidikan tinggi pariwisata." },
];


let filteredList = [...universities];
let currentPage = 1;
const itemsPerPage = 16;

function displayUniversities(list) {
    const grid = document.getElementById("universityGrid");
    grid.innerHTML = "";

    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const paginatedList = list.slice(start, end);

    paginatedList.forEach(university => {
        const div = document.createElement("div");
        div.className = "univ-card bg-white border rounded-lg shadow-lg overflow-hidden";
        div.innerHTML = `
        <img src="${university.image}" alt="${university.name}" class="w-full h-48 object-cover">
        <div class="p-4">
            <span class="bg-orange-500 text-white px-3 py-1 rounded-full text-sm">${university.category}</span>
            <span class="bg-gray-600 text-white px-3 py-1 rounded-full text-sm ml-2">${university.island}</span>
            <h3 class="text-lg font-bold mt-2">${university.name}</h3>
            <div class="text-gray-600 mt-2 text-sm clamp-description">${university.description}</div>
        </div>
    `;
        div.onclick = () => {
            const universityName = university.name.replace(/\s+/g, '_');
            const url = `assets/universitas/${universityName}.html`;
            window.location.href = url;
        };
        grid.appendChild(div);
    });

    renderPagination(list);
}

function renderPagination(list) {
    const pagination = document.querySelector(".pagination");
    pagination.innerHTML = "";

    const totalPages = Math.ceil(list.length / itemsPerPage);

    const prev = document.createElement("li");
    prev.innerHTML = `<a href="#" class="button ${currentPage === 1 ? 'disabled' : ''}">Prev</a>`;
    prev.onclick = (e) => {
        e.preventDefault();
        if (currentPage > 1) {
            currentPage--;
            displayUniversities(filteredList);
            window.scrollTo(0, 0);  // Scroll ke atas
        }
    };
    pagination.appendChild(prev);

    for (let i = 1; i <= totalPages; i++) {
        const page = document.createElement("li");
        page.innerHTML = `<a href="#" class="page ${currentPage === i ? 'active' : ''}">${i}</a>`;
        page.onclick = (e) => {
            e.preventDefault();
            currentPage = i;
            displayUniversities(filteredList);
            window.scrollTo(0, 0);  // Scroll ke atas
        };
        pagination.appendChild(page);
    }

    const next = document.createElement("li");
    next.innerHTML = `<a href="#" class="button ${currentPage === totalPages ? 'disabled' : ''}">Next</a>`;
    next.onclick = (e) => {
        e.preventDefault();
        if (currentPage < totalPages) {
            currentPage++;
            displayUniversities(filteredList);
            window.scrollTo(0, 0);  // Scroll ke atas
        }
    };
    pagination.appendChild(next);
}

function showSuggestions(keyword) {
    const suggestions = document.getElementById("suggestions");
    const overlay = document.querySelector(".custom-overlay");

    overlay.classList.remove("hidden");
    suggestions.classList.remove("hidden");
    suggestions.innerHTML = "";

    const results = universities.filter(u =>
        u.name.toLowerCase().includes(keyword.toLowerCase())
    ).slice(0, 3);

    if (!keyword) {
        suggestions.innerHTML = "<li class='p-2 text-gray-500'>Ketik untuk mencari universitas...</li>";
        return;
    }

    if (results.length === 0) {
        suggestions.innerHTML = "<li class='p-2 text-gray-500'>Tidak ditemukan.</li>";
        return;
    }

    results.forEach(univ => {
        const li = document.createElement("li");
        li.className = "flex items-center gap-3 p-2 hover:bg-gray-100 cursor-pointer";
        li.innerHTML = `
        <img src="${univ.logoimage}" alt="${univ.name}" class="w-8 h-8 object-contain">
        <div>
            <strong>${univ.name}</strong><br>
            <span class="text-xs text-gray-600">${univ.island} • ${univ.category}</span>
        </div>
    `;
        li.onclick = () => {
            const universityName = univ.name.replace(/\s+/g, '_');
            const url = `assets/universitas/${universityName}.html`;
            window.location.href = url;
        };
        suggestions.appendChild(li);
    });
}

document.querySelector(".custom-overlay").addEventListener("click", () => {
    document.getElementById("suggestions").classList.add("hidden");
    document.getElementById("filterPanel").classList.add("hidden");
    document.querySelector(".custom-overlay").classList.add("hidden");
});

function handleSearchKey(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        filterUniversities();
        document.getElementById("suggestions").classList.add("hidden");
        document.querySelector(".custom-overlay").classList.add("hidden");
    } else {
        showSuggestions(event.target.value);
    }
}

document.getElementById("searchInput").addEventListener("input", handleSearchKey);

window.onload = () => {
    displayUniversities(filteredList);
};

