var swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  initialSlide: 1,
  centeredSlides: true,
  grabCursor: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

var swiper = new Swiper('.swiper-container-1', {
  slidesPerView: 3,
  slidesPerColumn: 2,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    1024: {
      slidesPerView: 2,
      slidesPerColumn: 2
    },
    1280: {
      slidesPerView: 3,
      slidesPerColumn: 2
    },
    1366: {
      slidesPerView: 3,
      slidesPerColumn: 2,
      spaceBetween: 30
    },

    1440: {
      slidesPerView: 3,
      slidesPerColumn: 2,
      spaceBetween: 30
    },

    1600: {
      slidesPerView: 3,
      slidesPerColumn: 2,
      spaceBetween: 30
    },
  },
});

var modalSearch = document.querySelector(".top-panel");
var closeButton = document.querySelector(".top-panel__close");
var openButton = document.querySelectorAll(".open-btn");

if (modalSearch) {
  for (var i = 0; i < openButton.length; i++) openButton[i].addEventListener("click", function(event) {
    event.preventDefault();
    modalSearch.classList.add("top-panel--on");
  });

  modalSearch.addEventListener("click", function() {
    modalSearch.classList.remove("top-panel--on");
  });

  modalSearch.addEventListener("click", function(event) {
    event.stopPropagation();
  });

  closeButton.addEventListener("click", function() {
    modalSearch.classList.remove("top-panel--on");
  });

  window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
      modalSearch.classList.remove("top-panel--on");
    }
  });
}
