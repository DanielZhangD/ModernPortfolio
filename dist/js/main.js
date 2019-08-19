// Selecting DOM items
// DOM = Document Object Model, UI Structure
// HTML Tags, UI Structure, etc.

//menuButton, selects btn-menu
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');

//selecting the menu items
//can't use query selector - that only selects one
const navItems = document.querySelectorAll('.nav-item');

// Set Menu Initial State
//let is reassigning variable
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    menuBtn.classList.toggle('close');
    menu.classList.toggle('show');
    menuNav.classList.toggle('show');
    menuBranding.classList.toggle('show');
    navItems.forEach(item => item.classList.toggle('show'));
    showMenu = !showMenu;
}