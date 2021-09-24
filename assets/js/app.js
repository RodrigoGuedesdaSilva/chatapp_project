const menu = document.querySelector('#hamburger-menu');
const menuLink = document.querySelector('.menu');

menu.addEventListener('click', function() {
    menu.classList.toggle('active');
    menuLink.classList.toggle('is-active');
})

document.onclick = function(e) {
    if(e.target !== menu && e.target !== menuLink) {
        menu.classList.remove('active');
        menuLink.classList.remove('is-active')
    }
}
