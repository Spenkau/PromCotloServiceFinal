const number = document.querySelectorAll('.big-number').forEach(number => {
const top = number.getBoundingClientRect().top;
window.addEventListener('scroll', function onScroll() {
    if (window.pageYOffset > top - window.innerHeight / 1) {
        this.removeEventListener('scroll', onScroll);
        let start = +number.innerHTML;
        const interval = setInterval(function() {
        number.innerHTML = ++start;
            if (start >= number.dataset.max) {
            clearInterval(interval);
            }
        }, 40);
    }
});
});

let swiperLicenses = new Swiper(".mySwiperLicenses", {
    slidesPerView: 1,
    centeredSlides: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
    mousewheel: false,
    keyboard: true,
});

var swiperReviews = new Swiper(".mySwiperReviews", {
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
    //   type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    mousewheel: false,
    keyboard: true,
  });

let swiperGallery = new Swiper(".mySwiperGallery", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
    },
    pagination: {
    el: ".swiper-pagination",
    },
});

jQuery('.lightzoom').lightzoom();

    