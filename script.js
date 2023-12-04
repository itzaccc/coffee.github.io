const toggle = document.getElementById("toggleDark");
const body = document.querySelector("body");
const icon = toggle.querySelector("i");

toggle.addEventListener("click", function () {
  icon.classList.toggle("bi-moon");
  if (icon.classList.contains("bi-moon")) {
    body.style.backgroundColor = "beige";
    body.style.color = "black";
  } else {
    body.style.backgroundColor = "peachpuff";
    body.style.color = "black";
  }
  body.style.transition = "1s";
});
