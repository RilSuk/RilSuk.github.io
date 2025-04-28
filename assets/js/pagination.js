import { displayUniversities } from './display.js';

export let currentPage = 1;
export const itemsPerPage = 16;

export function renderPagination(list, filteredList) {
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
            window.scrollTo(0, 0);
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
            window.scrollTo(0, 0);
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
            window.scrollTo(0, 0);
        }
    };
    pagination.appendChild(next);
}
