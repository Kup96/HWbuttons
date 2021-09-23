"use strict"; 
const menu = document.body.querySelector(".menu");
const menuItems = menu.querySelectorAll(".menuChild");
let activeItem = menu.querySelector(".active");

function clickItem(i, index) {
    if (activeItem == i) return;
    else
    activeItem.classList.remove("active");
    i.classList.add("active");
    activeItem = i;
}
menuItems.forEach((i, index) => {
    i.addEventListener("click", () => clickItem(i, index));  
});
function changeColor(colorValue) {
    document.body.style.background = document.getElementById(colorValue);
};
