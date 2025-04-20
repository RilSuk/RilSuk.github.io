function showSuggestions() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const suggestionsBox = document.getElementById("suggestions");
  const overlay = document.querySelector(".custom-overlay");

  if (input.length === 0) {
      suggestionsBox.classList.add("hidden");
      overlay.classList.add("hidden");
      return;
  }

  const matched = universities.filter(u => u.name.toLowerCase().includes(input)).slice(0, 3);

  if (matched.length === 0) {
      suggestionsBox.classList.add("hidden");
      overlay.classList.remove("hidden");
      return;
  }

  suggestionsBox.innerHTML = "";

  matched.forEach(u => {
      const li = document.createElement("li");
      li.className = "univ-suggestion-item flex items-center gap-2 p-2 hover:bg-gray-100 cursor-pointer";

      li.innerHTML = `
          <img src="${u.image}" alt="${u.name}" class="w-8 h-8 object-contain rounded-full">
          <div>
              <strong>${u.name}</strong><br>
              <span class="text-xs text-gray-500">${u.island} - ${u.category}</span>
          </div>
      `;

      li.onclick = () => {
          document.getElementById("searchInput").value = u.name;
          suggestionsBox.classList.add("hidden");
          overlay.classList.add("hidden");
          filterUniversities();

          // Scroll ke elemen yang sesuai setelah render selesai
          setTimeout(() => {
              const safeId = "univ-" + u.name.toLowerCase().replace(/\s+/g, "-");
              const targetElement = document.getElementById(safeId);
              if (targetElement) {
                  targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
              }
          }, 100);
      };

      suggestionsBox.appendChild(li);
  });

  suggestionsBox.classList.remove("hidden");
  overlay.classList.remove("hidden");
}

function filterUniversities() {
  const searchValue = document.getElementById("searchInput").value.toLowerCase();
  const searchFiltered = filteredList.filter(university => 
      university.name.toLowerCase().includes(searchValue)
  );
  displayUniversities(searchFiltered);
}

function handleSearchKey(event) {
  if (event.key === "Enter") {
      event.preventDefault(); // mencegah reload form jika ada
      filterUniversities();
      document.getElementById("suggestions").classList.add("hidden");
      document.querySelector(".custom-overlay").classList.add("hidden");
  } else {
      showSuggestions(event.target.value);
  }
}

document.querySelector(".custom-overlay").addEventListener("click", () => {
  document.getElementById("suggestions").classList.add("hidden");
  document.querySelector(".custom-overlay").classList.add("hidden");
});
