// JavaScript source code
const header = document.querySelector("header");

window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 0);
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open')
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('open')
};

document.querySelector("#popup-open-btn").addEventListener("click", function () {
    document.querySelector(".popup").classList.add("active");
});

document.querySelector(".popup .popup-close-btn").addEventListener("click", function () {
    document.querySelector(".popup").classList.remove("active");
});