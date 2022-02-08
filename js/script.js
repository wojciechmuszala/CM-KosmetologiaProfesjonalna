const burger = document.querySelector('.burger');
const sideMenu = document.querySelector('.side-menu div');

// function showMenu() {
//     console.log('klik')
//     sideMenu.classList.toggle('lol');
// }

// burger.addEventListener('click',showMenu());

burger.addEventListener('click', function () {
    sideMenu.classList.toggle('show')
})