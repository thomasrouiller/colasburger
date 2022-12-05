var button = document.querySelector(".burger-close");
var menu = document.querySelector(".burger-open");

var openMenu = function () {
  menu.classList.toggle("is-open");
  button.classList.toggle("is-active");
};

button.addEventListener("click", openMenu);
