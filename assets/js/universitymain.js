import { universities } from './universities.js';
import { displayUniversities } from './display.js';
import { applyFilters, cancelFilters } from './filters.js';
import { filterUniversities, showSuggestions } from './search.js';

// Inisialisasi
let filteredList = [...universities];
displayUniversities(filteredList);

// Event listeners
document.getElementById("applyFiltersBtn").onclick = applyFilters;
document.getElementById("cancelFiltersBtn").onclick = cancelFilters;
document.getElementById("searchInput").oninput = (e) => {
    const keyword = e.target.value;
    if (keyword.length > 0) {
        showSuggestions(keyword);
    } else {
        document.getElementById("suggestions").classList.add("hidden");
        document.querySelector(".custom-overlay").classList.add("hidden");
    }
};
document.getElementById("searchInput").onkeypress = (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        filterUniversities();
    }
};
