const burger = document.querySelector('.burger');
const sideMenu = document.querySelector('.side-menu div');

burger.addEventListener('click', function () {
    sideMenu.classList.toggle('show')
})