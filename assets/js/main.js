const menuToggle = document.getElementById("mobile-toggle");
const navitems = document.querySelector(".nav__items");
const pageOverlay = document.querySelector(".page__overlay");

let isMenuOpen = false;

// mobile menu handler
menuToggle.addEventListener("click", () => {
    isMenuOpen = !isMenuOpen
    isMenuOpen ? document.body.style.overflowY = "hidden" : document.body.style.overflowY = "auto";
  
    console.log("clicked");
    navitems.classList.toggle("show");
    pageOverlay.classList.toggle("show");
})