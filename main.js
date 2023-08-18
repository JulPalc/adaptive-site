const navButton = document.querySelector('.nav-button');
const mobileNav = document.querySelector('.mobile-nav');
const body = document.body;

navButton.addEventListener('click', function (e){
    e.stopPropagation();
    mobileNav.classList.toggle('mobile-nav-active')
    navButton.classList.toggle('nav-button-close')
    body.classList.toggle('no-scroll')
})
mobileNav.addEventListener('click', function (e){
    e.stopPropagation();
})