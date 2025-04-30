const universities = [
    { name: "Universitas Indonesia (UI)", category: "Negeri", island: "Jawa", accreditation:"A", image: "images/foto/UI_image.jpg", logoimage: "images/logo/UI_logo.png", description: "Universitas Indonesia adalah salah satu universitas terbaik dan tertua di Indonesia, berlokasi di Depok, Jawa Barat." },
    { name: "Universitas Gadjah Mada (UGM)", category: "Negeri", island: "Jawa", accreditation:"A", image: "images/foto/UGM_image.jpg", logoimage: "images/logo/UGM_logo.png", description: "UGM Yogyakarta merupakan universitas negeri ternama yang unggul dalam berbagai bidang pendidikan, penelitian, dan pengabdian." },
    { name: "Institut Teknologi Bandung (ITB)", category: "Negeri", island: "Jawa", accreditation:"A", image: "images/foto/ITB_image.jpg", logoimage: "images/logo/ITB_logo.png", description: "ITB adalah institut teknologi negeri di Bandung yang dikenal dengan keunggulan di bidang teknik dan sains." },
    { name: "Universitas Airlangga (UNAIR)", category: "Negeri", island: "Jawa", accreditation:"A", image: "images/foto/UNAIR_image.jpg", logoimage: "images/logo/UNAIR_logo.png", description: "UNAIR Surabaya adalah salah satu universitas negeri terbaik dengan fokus pada kesehatan, sains, dan sosial humaniora." },
    { name: "Institut Teknologi Sepuluh Nopember (ITS)", category: "Negeri", island: "Jawa", accreditation:"A", image: "images/foto/ITS_image.jpg", logoimage: "images/logo/ITS_logo.png", description: "ITS Surabaya merupakan perguruan tinggi teknologi terkemuka di Indonesia dengan keunggulan dalam riset dan inovasi." },
    { name: "Universitas Padjadjaran (UNPAD)", category: "Negeri", island: "Jawa", accreditation:"A", image: "images/foto/UNPAD_image.jpg", logoimage: "images/logo/UNPAD_logo.png", description: "UNPAD Bandung adalah universitas negeri unggulan yang memiliki beragam program studi lintas disiplin." },
    { name: "Universitas Diponegoro (UNDIP)", category: "Negeri", island: "Jawa", accreditation:"A", image: "images/foto/UNDIP_image.jpg", logoimage: "images/logo/UNDIP_logo.png", description: "UNDIP Semarang merupakan salah satu universitas negeri terbaik dengan kekuatan di bidang teknik dan sosial." },
    { name: "Universitas Brawijaya (UB)", category: "Negeri", island: "Jawa", accreditation:"A", image: "images/foto/UB_image.jpg", logoimage: "images/logo/UB_logo.png", description: "UB Malang adalah universitas negeri dengan reputasi nasional di bidang pertanian, ekonomi, dan ilmu sosial." },
    { name: "BINUS University (BINUS)", category: "Swasta", island: "Jawa", accreditation:"A", image: "images/foto/BINUS_image.jpg", logoimage: "images/logo/BINUS_logo.png", description: "BINUS Jakarta adalah universitas swasta unggulan yang dikenal dengan kekuatan di bidang teknologi dan bisnis." },
    { name: "Telkom University (Tel-U)", category: "Swasta", island: "Jawa", accreditation:"A", image: "images/foto/TELKOM_image.jpg", logoimage: "images/logo/TELKOM_logo.png", description: "Telkom University adalah perguruan tinggi swasta di Bandung yang berfokus pada teknologi dan komunikasi." },
    { name: "Universitas Hasanuddin (UNHAS)", category: "Negeri", island: "Sulawesi", accreditation:"A", image: "images/foto/UNHAS_image.jpg", logoimage: "images/logo/UNHAS_logo.png", description: "UNHAS Makassar adalah universitas negeri terbesar di Indonesia timur dengan berbagai program studi unggulan." },
    { name: "Universitas Sebelas Maret (UNS)", category: "Negeri", island: "Jawa", accreditation:"A", image: "images/foto/UNS_image.jpg", logoimage: "images/logo/UNS_logo.png", description: "UNS Surakarta adalah universitas negeri yang berkembang pesat dan memiliki keunggulan dalam riset dan inovasi." },
    { name: "Universitas Islam Indonesia (UII)", category: "Swasta", island: "Jawa", accreditation:"A", image: "images/foto/UII_image.jpg", logoimage: "images/logo/UII_logo.png", description: "UII Yogyakarta merupakan universitas swasta Islam terkemuka yang mengintegrasikan ilmu dan nilai keislaman." },
    { name: "Universitas Muhammadiyah Yogyakarta (UMY)", category: "Swasta", island: "Jawa", accreditation:"A", image: "images/foto/UMY_image.jpg", logoimage: "images/logo/UMG_logo.png", description: "UMY adalah universitas swasta berbasis Muhammadiyah di Yogyakarta dengan program studi berstandar internasional." },
    { name: "Universitas Pendidikan Indonesia (UPI)", category: "Negeri", island: "Jawa", accreditation:"A", image: "images/foto/UPI_image.jpg", logoimage: "images/logo/UPI_logo.png", description: "UPI Bandung adalah universitas negeri yang fokus pada pendidikan dan keguruan dengan program studi yang beragam." },
    { name: "Universitas Sumatera Utara (USU)", category: "Negeri", island: "Sumatra", accreditation:"A", image: "images/foto/USU_image.jpg", logoimage: "images/logo/USU_logo.png", description: "USU Medan adalah universitas negeri terbesar di Sumatra Utara dengan berbagai fakultas unggulan." },
    { name: "Universitas Negeri Yogyakarta (UNY)", category: "Negeri", island: "Jawa", accreditation:"A", image: "images/foto/UNY_image.jpg", logoimage: "images/logo/UNY_logo.png", description: "UNY adalah universitas negeri di Yogyakarta yang terkenal di bidang pendidikan dan pengembangan sumber daya manusia." },
    { name: "Universitas Negeri Malang (UM)", category: "Negeri", island: "Jawa", accreditation:"A", image: "images/foto/UM_image.jpg", logoimage: "images/logo/UM_logo.png", description: "Universitas Negeri Malang adalah kampus negeri dengan kekuatan di bidang pendidikan, sastra, dan teknologi pendidikan." },
    { name: "Universitas Udayana (UNUD)", category: "Negeri", island: "Bali", accreditation:"A", image: "images/foto/UNUD_image.jpg", logoimage: "images/logo/UNUD_logo.png", description: "UNUD Bali adalah universitas negeri yang terkenal di kawasan timur Indonesia dengan program studi beragam." },
    { name: "Universitas Andalas (UNAND)", category: "Negeri", island: "Sumatra", accreditation:"A", image: "images/foto/UNAND_image.jpg", logoimage: "images/logo/UNAND_logo.png", description: "UNAND Padang merupakan universitas negeri tertua di luar Jawa yang memiliki reputasi baik secara nasional." },
    { name: "Universitas Muhammadiyah Surakarta (UMS)", category: "Swasta", island: "Jawa", accreditation:"A", image: "images/foto/UMS_image.jpg", logoimage: "images/logo/UMS_logo.png", description: "UMS adalah universitas Muhammadiyah terkemuka di Surakarta yang memiliki banyak program studi unggulan." },
    { name: "Universitas Lampung (UNILA)", category: "Negeri", island: "Sumatra", accreditation:"A", image: "images/foto/UNILA_image.jpg", logoimage: "images/logo/UNILA_logo.png", description: "UNILA adalah universitas negeri di Bandar Lampung yang aktif dalam pengembangan sumber daya manusia dan riset." },

    { name: "Institut Ilmu Al-Qur'an", category: "Swasta", island: "Jawa", accreditation:"A", image: "images/foto/IIQ_images", logoimage: "images/logo/IIQ_logo.jpg", description: "Institut Ilmu Al-Qur'an merupakan perguruan tinggi swasta yang berfokus pada pendidikan Al-Qur'an dan studi Islam di Tangerang Selatan." },
    { name: "Sekolah Tinggi Agama Islam Imam Asy-Syafii (STAI-IMSYA)", category: "Swasta", island: "Sumatra", image: "images/foto/stai_image.jpg", logoimage: "images/logo/STAI_logo.jpg", description: "STAI Imam Asy-Syafii Pekanbaru adalah institusi pendidikan tinggi Islam yang menawarkan berbagai program studi keagamaan di Riau." },
    { name: "Politeknik Negeri Batam (Polibatam)", category: "Negeri", island: "Sumatra", image: "images/foto/POLIBATAM_image.jpg", logoimage: "images/logo/POLIBATAM_logo.jpg", description: "Polibatam adalah politeknik negeri yang terletak di Batam, menawarkan pendidikan vokasi yang fokus pada industri dan teknologi." },
    { name: "Institut Pertanian Stiper (INSTIPER)", category: "Swasta", island: "Jawa", image: "images/foto/INSTIPER_image.jpg", logoimage: "images/logo/INSTIPER_logo.jpg", description: "INSTIPER Yogyakarta adalah perguruan tinggi swasta yang mengkhususkan diri pada bidang pertanian, kehutanan, dan perkebunan." },
    { name: "Universitas Pertamina (UP)", category: "Swasta", island: "Jawa", image: "images/foto/UP_image.jpg", logoimage: "images/logo/UP_logo.jpg", description: "Universitas Pertamina merupakan universitas swasta yang didirikan oleh PT Pertamina, fokus pada energi dan teknologi." },
    { name: "Universitas Negeri Makassar (UNM)", category: "Negeri", island: "Sulawesi", image: "images/foto/UNM_image.jpg", logoimage: "images/logo/UNM_logo.jpg", description: "UNM adalah universitas negeri terkemuka di Makassar yang menawarkan berbagai program studi pendidikan dan non-pendidikan." },
    { name: "Institut Agama Islam Tazkia (IAI Tazkia)", category: "Swasta", island: "Jawa", image: "images/foto/IAI_image.jpg", logoimage: "images/logo/IAI_logo.jpg", description: "IAI Tazkia merupakan perguruan tinggi Islam yang mengintegrasikan ilmu ekonomi syariah dan pendidikan agama." },
    { name: "Institut Kesehatan Indonesia (IKI)", category: "Swasta", island: "Jawa", image: "images/foto/IKI_image.jpg", logoimage: "images/logo/IKI_logo.jpg", description: "Institut Kesehatan Indonesia berfokus pada pengembangan sumber daya manusia di bidang kesehatan." },
    { name: "Institut Teknologi Sumatera (ITERA)", category: "Negeri", island: "Sumatra", image: "images/foto/ITERA_image.jpg", logoimage: "images/logo/ITERA_logo.jpg", description: "ITERA adalah institut teknologi negeri yang berlokasi di Lampung, berperan dalam pengembangan teknologi di Sumatra." },
    { name: "Politeknik Kesehatan Kemenkes Bandung", category: "Negeri", island: "Jawa", image: "images/foto/PKKB_image.jpg", logoimage: "images/logo/PKKB_logo.jpg", description: "Poltekkes Bandung adalah institusi pendidikan kesehatan milik Kemenkes yang menyediakan pendidikan vokasi kesehatan." },
    { name: "Universitas Ahmad Dahlan (UAD)", category: "Swasta", island: "Jawa", image: "images/foto/UAD_image.jpg", logoimage: "images/logo/UAD_logo.jpg", description: "UAD Yogyakarta merupakan universitas swasta berbasis Muhammadiyah yang memiliki berbagai program studi unggulan." },
    { name: "Universitas Pelita Harapan (UPH)", category: "Swasta", island: "Jawa", image: "images/foto/UPH_image.jpg", logoimage: "images/logo/UPH_logo.jpg", description: "UPH adalah universitas Kristen swasta di Banten yang dikenal dengan kualitas pendidikan dan fasilitas internasionalnya." },
    { name: "Universitas Islam Negeri Imam Bonjol (UIN IB)", category: "Negeri", island: "Sumatra", image: "images/foto/UINIB_image.jpg", logoimage: "images/logo/UINIB_logo.jpg", description: "UIN Imam Bonjol merupakan universitas Islam negeri di Padang yang mengintegrasikan ilmu agama dan ilmu umum." },
    { name: "Universitas Prasetiya Mulya (UPM)", category: "Swasta", island: "Jawa", image: "images/foto/UPM_image.jpg", logoimage: "images/logo/UPM_logo.jpg", description: "Universitas Prasetiya Mulya dikenal sebagai kampus bisnis swasta terkemuka dengan program inovatif dan kolaboratif." },
    { name: "Universitas Jenderal Soedirman (UNSOED)", category: "Negeri", island: "Jawa", image: "images/foto/UNSOED_image.jpg", logoimage: "images/logo/UNSOED_logo.jpg", description: "UNSOED merupakan universitas negeri di Purwokerto yang fokus pada pengembangan pedesaan dan kewirausahaan." },
    { name: "Politeknik STTT Bandung", category: "Negeri", island: "Jawa", image: "images/foto/STTT_image.jpg", logoimage: "images/logo/STTT_logo.jpg", description: "Politeknik STTT Bandung adalah institusi vokasi negeri yang mengkhususkan diri pada teknologi tekstil dan fashion." },
    { name: "Institut Seni Budaya Indonesia (ISBI) Bandung", category: "Negeri", island: "Jawa", image: "images/foto/ISBI_image.jpg", logoimage: "images/logo/ISBI_logo.jpg", description: "ISBI Bandung adalah institut seni negeri yang berfokus pada pelestarian dan pengembangan seni dan budaya Indonesia." },
    { name: "Universitas Malikussaleh", category: "Negeri", island: "Sumatra", image: "images/foto/UNIMAL_image.jpg", logoimage: "images/logo/UNIMAL_logo.jpg", description: "Universitas Malikussaleh adalah universitas negeri di Aceh yang terus berkembang dalam pendidikan, penelitian, dan pengabdian masyarakat." },
    { name: "Universitas Jambi (UNJA)", category: "Negeri", island: "Sumatra", accreditation:"A", image: "images/foto/UNJA_image.jpg", logoimage: "images/logo/UNJA_logo.jpg", description: "Universitas Jambi adalah institusi pendidikan negeri di Jambi yang berfokus pada pengembangan ilmu pengetahuan dan teknologi." },
    { name: "Universitas Prof. Dr. Moestopo (Beragama) (UPDM(B))", category: "Swasta", island: "Jawa", accreditation:"B", image: "images/foto/UPDMB_image.jpg", logoimage: "images/logo/UPDMB_logo.jpg", description: "UPDM(B) adalah kampus swasta di Jakarta yang terkenal dengan pendidikan berkualitas di bidang komunikasi dan kedokteran gigi." },
    { name: "STAI Al-Bayan Hidayatullah Makassar", category: "Swasta", island: "Sulawesi", accreditation:"C", image: "images/foto/ALBAYAN_image.jpg", logoimage: "images/logo/ALBAYAN_logo.jpg", description: "STAI Al-Bayan Makassar adalah perguruan tinggi Islam yang menawarkan program studi keagamaan dan pendidikan guru." },
    { name: "PPM School of Management (PPM SoM)", category: "Swasta", island: "Jawa", accreditation:"A", image: "images/foto/PPMSOM_image.jpg", logoimage: "images/logo/PPMSOM_logo.jpg", description: "PPM SoM merupakan sekolah bisnis ternama di Jakarta dengan fokus pada manajemen dan kepemimpinan." },
    { name: "UPN 'Veteran' Yogyakarta (UPNYK)", category: "Negeri", island: "Jawa", accreditation:"B", image: "images/foto/UPYNK_image.jpg", logoimage: "images/logo/UPYNK_logo.jpg", description: "UPN 'Veteran' Yogyakarta adalah perguruan tinggi negeri dengan visi membentuk lulusan berjiwa bela negara dan unggul secara akademik." },
    { name: "IPB University (Institut Pertanian Bogor)", category: "Negeri", island: "Jawa", accreditation:"A", image: "images/foto/IPB_image.jpg", logoimage: "images/logo/IPB_logo.jpg", description: "IPB University adalah kampus negeri yang unggul di bidang pertanian, sains, dan teknologi, berlokasi di Bogor." },
    { name: "Universitas Islam Darul Ulum (UNISDA)", category: "Swasta", island: "Jawa", accreditation:"B", image: "images/foto/UNISDA_image.jpg", logoimage: "images/logo/UNISDA_logo.jpg", description: "UNISDA Lamongan adalah universitas Islam yang menyediakan berbagai program studi dengan nilai-nilai keislaman." },
    { name: "Politeknik Kesehatan Kemenkes Jakarta I", category: "Negeri", island: "Jawa", accreditation:"B", image: "images/foto/POLTEKKESJKT_image.jpg", logoimage: "images/logo/POLTEKKESJKT_logo.jpg", description: "Poltekkes Jakarta I adalah politeknik negeri yang menyediakan pendidikan tinggi di bidang kesehatan." },
    { name: "Universitas Trilogi", category: "Swasta", island: "Jawa", accreditation:"B", image: "images/foto/TRILOGI_image.jpg", logoimage: "images/logo/TRILOGI_logo.jpg", description: "Universitas Trilogi Jakarta adalah perguruan tinggi dengan fokus pada technopreneurship dan inovasi sosial." },
    { name: "Universitas YARSI", category: "Swasta", island: "Jawa", accreditation:"B", image: "images/foto/YARSI_image.jpg", logoimage: "images/logo/YARSI_logo.jpg", description: "Universitas YARSI merupakan kampus swasta Islam yang terkenal dengan program studi kedokteran dan sains kesehatan." },
    { name: "Sekolah Tinggi Ilmu Farmasi Riau (STIFAR Riau)", category: "Swasta", island: "Sumatra", accreditation:"B", image: "images/foto/STIFAR_image.jpg", logoimage: "images/logo/STIFAR_logo.jpg", description: "STIFAR Riau adalah perguruan tinggi farmasi yang menyediakan pendidikan berkualitas di bidang kefarmasian di Pekanbaru." },
    { name: "Politeknik Kesehatan Kemenkes Riau", category: "Negeri", island: "Sumatra", accreditation:"B", image: "images/foto/POLTEKKESRIAU_image.jpg", logoimage: "images/logo/POLTEKKESRIAU_logo.jpg", description: "Poltekkes Riau adalah institusi pendidikan kesehatan negeri di Riau dengan berbagai program diploma bidang kesehatan." },
    { name: "Universitas Gunadarma (UG)", category: "Swasta", island: "Jawa", accreditation:"A", image: "images/foto/UG_image.jpg", logoimage: "images/logo/UG_logo.jpg", description: "Universitas Gunadarma adalah kampus swasta besar di Depok yang unggul dalam bidang teknologi dan informatika." },
    { name: "Universitas Baiturrahmah (Unbrah)", category: "Swasta", island: "Sumatra", accreditation:"B", image: "images/foto/UNBRAH_image.jpg", logoimage: "images/logo/UNBRA_logo.jpg", description: "Unbrah Padang merupakan perguruan tinggi swasta yang dikenal dengan program-program di bidang kesehatan dan ilmu sosial." },
    { name: "Politeknik Pariwisata NHI Bandung", category: "Negeri", island: "Jawa", accreditation:"A", image: "images/foto/POLTEKPARNHI_image.jpg", logoimage: "images/logo/POLTEKPARNHI_logo.jpg", description: "Poltekpar NHI Bandung adalah institusi negeri terkemuka di Indonesia yang berfokus pada pendidikan tinggi pariwisata." },
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

