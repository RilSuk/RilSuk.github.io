import { renderPagination, currentPage, itemsPerPage } from './pagination.js';

export function displayUniversities(list) {
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

    renderPagination(list, list);
}
