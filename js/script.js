const burger = document.querySelector('.burger');
const sideMenu = document.querySelector('.side-menu div');
const menuItem = document.querySelectorAll('.side-menu a')
const offerItem = document.querySelectorAll('.offer div.offer-photo')
const priceList = document.querySelector('.offer div.price-list')

burger.addEventListener('click', function () {
    sideMenu.classList.toggle('show')
})

menuItem.forEach((menuItem) => {
    menuItem.addEventListener('click', function () {
        sideMenu.classList.remove('show')
        console.log('klik-menu')
    })

})

// offerItem.forEach((offerItem) => {
//     offerItem.addEventListener('click', function () {
//         priceList.classList('show')
//         console.log('klik-offer')

//     })
// })