var swiper = new Swiper('.swiper', {
    slidesPerView: 1, // Geser 1 per 1
    spaceBetween: 20,
    loop: true, // Agar mengulang kembali ke awal
    autoplay: {
        delay: 3000, // Geser otomatis setiap 3 detik
        disableOnInteraction: false // Tetap autoplay meski ada interaksi pengguna
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        320: { slidesPerView: 1, spaceBetween: 10 },
        768: { slidesPerView: 2, spaceBetween: 15 },
        1024: { slidesPerView: 3, spaceBetween: 20 },
        1280: { slidesPerView: 4, spaceBetween: 20 }
    },
    watchOverflow: true,
    on: {
        init: function () { checkNavButtons(this); },
        slideChange: function () { checkNavButtons(this); }
    }
});

function checkNavButtons(swiper) {
    var prevButton = document.querySelector('.swiper-button-prev');
    var nextButton = document.querySelector('.swiper-button-next');
    
    if (!swiper.params.loop) { // Jika loop aktif, biarkan tombol selalu muncul
        prevButton.style.display = swiper.isBeginning ? "none" : "flex";
        nextButton.style.display = swiper.isEnd ? "none" : "flex";
    } else {
        prevButton.style.display = "flex";
        nextButton.style.display = "flex";
    }
}

function goToPage(url) {
    window.location.href = url;
}
