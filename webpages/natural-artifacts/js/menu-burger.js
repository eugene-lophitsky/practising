const burgerButton = document.querySelector(".burger");
let menuListHidden = document.querySelector(".menu-list");
let menuListShown = document.querySelector("menu-list-show");

function openMenuBurger () {
   if(menuListHidden.style.filter === "opacity(0)") {
    menuListHidden.style.filter = "opacity(100)"
   } else {
    menuListHidden.style.filter = "opacity(0)";
   }
}
burgerButton.addEventListener("click", openMenuBurger);