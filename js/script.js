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
    1280: {
      slidesPerView: 3,
      slidesPerColumn: 2
    },
    1366: {
      slidesPerView: 3,
      slidesPerColumn: 2,
      spaceBetween: 10
    },

    1440: {
      slidesPerView: 3,
      slidesPerColumn: 2,
      spaceBetween: 10
    },

    1600: {
      slidesPerView: 3,
      slidesPerColumn: 2,
      spaceBetween: 10
    },
  },
});

$(document).ready(function(){
	$("div.slide-panel p.open").click(function(){
    event.preventDefault();
		$("div.top-panel").animate({left:'0'},500);
	});
});

$(document).ready(function(){
  $(".message__close" ).click(function() {
    event.preventDefault();
    $("div.top-panel").animate({left:'-200%'},500);
  });
});
