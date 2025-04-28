const swiper = new Swiper('.custom-swiper-container', {
  loop: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  spaceBetween: 30,
  navigation: {
    nextEl: '.custom-swiper-button-next',
    prevEl: '.custom-swiper-button-prev',
  },
  speed: 600,
  on: {
    slideChangeTransitionStart: function () {
      const slides = document.querySelectorAll('.custom-slide-item');
      slides.forEach(slide => {
        slide.style.opacity = '0.5';
        slide.style.transform = 'scale(0.9)';
      });

      const activeSlide = document.querySelector('.swiper-slide-active');
      if (activeSlide) {
        activeSlide.style.opacity = '1';
        activeSlide.style.transform = 'scale(1.1)';
      }
    },
  },
});

// Set image background dynamically
document.querySelectorAll('.custom-slide-item').forEach(slide => {
  const imageUrl = slide.getAttribute('data-image');
  if (imageUrl) {
    slide.style.backgroundImage = `url(${imageUrl})`;
  }

  // Add click event to each slide
  slide.addEventListener('click', () => {
    alert(`Slide clicked: ${slide.textContent}`);
  });
});

window.addEventListener('load', () => {
  const activeSlide = document.querySelector('.swiper-slide-active');
  if (activeSlide) {
    activeSlide.style.opacity = '1';
    activeSlide.style.transform = 'scale(1.1)';
  }
});
