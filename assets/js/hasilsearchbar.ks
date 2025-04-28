function updateHasilPencarian(totalKampus) {
  const input = document.getElementById("searchInput");
  const keyword = input.value.trim();
  const page = 1;
  const perPage = 16;
  const start = (page - 1) * perPage + 1;
  const end = Math.min(start + perPage - 1, totalKampus);

  const hasilPencarian = document.getElementById("hasilPencarian");

  if (keyword !== "") {
    hasilPencarian.textContent = `Ditemukan ${totalKampus} kampus yang sesuai dengan pencarian "${keyword}" — menampilkan ${start}–${end} kampus.`;
  } else {
    hasilPencarian.textContent = "";
  }
}

function filterUniversities() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const cards = document.querySelectorAll(".university-card");
  let totalKampus = 0;

  cards.forEach(card => {
    const title = card.textContent.toLowerCase();
    const match = title.includes(input);
    card.style.display = match ? "block" : "none";
    if (match) totalKampus++;
  });

  updateHasilPencarian(totalKampus);
}
