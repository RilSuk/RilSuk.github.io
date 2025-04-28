import { universities } from './universities.js';
import { displayUniversities } from './display.js';
import { currentPage } from './pagination.js';

export let filteredList = [...universities];

export function applyFilters() {
    let tempList = [...universities];

    const isSwastaChecked = document.getElementById("swasta").checked;
    const isNegeriChecked = document.getElementById("negeri").checked;

    if (isSwastaChecked || isNegeriChecked) {
        tempList = tempList.filter(university =>
            (isSwastaChecked && university.category === "Swasta") ||
            (isNegeriChecked && university.category === "Negeri")
        );
    }

    const selectedIslands = Array.from(document.querySelectorAll(".pulau:checked")).map(el => el.value);
    if (selectedIslands.length > 0) {
        tempList = tempList.filter(university => selectedIslands.includes(university.island));
    }

    const selectedAccreditations = Array.from(document.querySelectorAll(".akreditasi:checked")).map(el => el.value);
    if (selectedAccreditations.length > 0) {
        tempList = tempList.filter(university => selectedAccreditations.includes(university.accreditation));
    }

    if (document.getElementById("sortAZ").checked) {
        tempList.sort((a, b) => a.name.localeCompare(b.name));
    } else if (document.getElementById("sortZA").checked) {
        tempList.sort((a, b) => b.name.localeCompare(a.name));
    }

    filteredList = tempList;
    displayUniversities(filteredList);
}

export function cancelFilters() {
    document.getElementById("filterPanel").classList.add("hidden");
    document.querySelector(".custom-overlay").classList.add("hidden");
}

