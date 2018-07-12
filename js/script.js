var overlay = document.querySelector(".overlay");
var modal = document.querySelector(".call");
var modalButton = document.querySelector(".call__submit");
var buyButton = document.querySelectorAll(".details__btn");

if (overlay) {
  for (var i = 0; i < buyButton.length; i++) buyButton[i].addEventListener("click", function(event) {
    event.preventDefault();
    overlay.classList.add("overlay--on");
  });

  overlay.addEventListener("click", function() {
    overlay.classList.remove("overlay--on");
  });

  modal.addEventListener("click", function(event) {
    event.stopPropagation();
  });

  modalButton.addEventListener("submit", function() {
    overlay.classList.remove("overlay--on");
  });

  window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
      overlay.classList.remove("overlay--on");
    }
  });
}

var overlaySearch = document.querySelector(".search-overlay");
var modalSearch = document.querySelector(".modal");
var closeButton = document.querySelector(".modal-search__close");
var openButton = document.querySelectorAll(".house-layer");

if (overlaySearch) {
  for (var i = 0; i < openButton.length; i++) openButton[i].addEventListener("click", function(event) {
    event.preventDefault();
    overlaySearch.classList.add("search-overlay--on");
  });

  overlaySearch.addEventListener("click", function() {
    overlaySearch.classList.remove("search-overlay--on");
  });

  modalSearch.addEventListener("click", function(event) {
    event.stopPropagation();
  });

  closeButton.addEventListener("click", function() {
    overlaySearch.classList.remove("search-overlay--on");
  });

  window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
      overlaySearch.classList.remove("search-overlay--on");
    }
  });
}
