const burger = document.querySelector('.burger');
const sideMenu = document.querySelector('.side-menu div');
const offer = document.querySelector('.offer-photo')
const priceList = document.querySelector('.price-list')

burger.addEventListener('click', function () {
    sideMenu.classList.toggle('show')
})