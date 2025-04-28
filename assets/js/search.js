import { universities } from './universities.js';
import { displayUniversities } from './display.js';
import { filteredList } from './filters.js';

export function filterUniversities() {
    const searchValue = document.getElementById("searchInput").value.toLowerCase();
    const searchFiltered = filteredList.filter(university =>
        university.name.toLowerCase().includes(searchValue)
    );

    if (searchFiltered.length === 0) {
        const grid = document.getElementById("universityGrid");
        grid.innerHTML = "";

        const msg = document.createElement("div");
        msg.className = "no-result-message";
        msg.innerHTML = `Oops! Hasil untuk <strong>"${searchValue}"</strong> tidak ditemukan.`;
        grid.appendChild(msg);

        document.querySelector(".pagination").innerHTML = "";
    } else {
        displayUniversities(searchFiltered);
    }
}

export function showSuggestions(keyword) {
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
