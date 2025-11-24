let navBurger = document.querySelector('#nav-burger');
let navLinks = document.querySelector('.nav-links');

navBurger.addEventListener('click', () => {
    if (navLinks.style.opacity == '1') {
        navLinks.style.opacity = '0';
    } else {
        navLinks.style.opacity = '1';
    }
});