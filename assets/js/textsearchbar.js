
    const typingTexts = [
        "Cari Universitas...",
        "Contoh: Universitas Indonesia",
        "Contoh: UGM",
        "Contoh: Universitas Riau",
        "Contoh: ITB"
    ];

    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const searchInput = document.getElementById("searchInput");

    function typePlaceholder() {
        const currentText = typingTexts[textIndex];
        if (isDeleting) {
            charIndex--;
        } else {
            charIndex++;
        }

        searchInput.placeholder = currentText.substring(0, charIndex);

        if (!isDeleting && charIndex === currentText.length) {
            setTimeout(() => {
                isDeleting = true;
                typePlaceholder();
            }, 1500); // jeda sebelum menghapus
            return;
        }

        if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % typingTexts.length;
        }

        setTimeout(typePlaceholder, isDeleting ? 50 : 100); // kecepatan ketik/hapus
    }

    typePlaceholder(); // mulai efek saat halaman dimuat