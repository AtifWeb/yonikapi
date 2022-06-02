let BurgerIcon = document.querySelector(".burger_icon");

BurgerIcon.addEventListener("click", (e) => {
  document
    .querySelector("header .header_content nav")
    .classList.toggle("active");
});
