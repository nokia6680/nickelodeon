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
});

$(document).ready(function(){
	$("div.slide-panel p.open").toggle(function(){
		$("div.slide-panel").animate({left:'201px'},500);}, function() {
		$("div.slide-panel").animate({left:0},500);
	});
});
