// burger = document.querySelector('.burger')
// navbar = document.querySelector('.navbar')
// navlist = document.querySelector('.nav-list')
// rightNav = document.querySelector('.rightNav')

// burger.addEventListener('click', ()=>{
// rightNav.classList.toggle('v-class-resp');
// navlist.classList.toggle('v-class-resp');
// navbar.classList.toggle('h-nav-resp');
// });



// input information backend start
var burger = document.querySelector('.burger');
var navbar = document.querySelector('.navbar');
var navlist = document.querySelector('.nav-list');
var rightNav = document.querySelector('.rightNav');

burger.addEventListener('click', () => {
    rightNav.classList.toggle('v-class-resp');
    navlist.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');
});
