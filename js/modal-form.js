var overlay = document.querySelector(".overlay");
var modal = document.querySelector(".modal");
var buyButton = document.querySelectorAll(".food-item__opener");

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


  window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
      overlay.classList.remove("overlay--on");
    }
  });
}
