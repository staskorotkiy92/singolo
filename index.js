const MENU_ITEMS = document.querySelectorAll('.navbar__item');
const MENU = document.querySelector('.navbar__list');

MENU.addEventListener ('click', function (event) {
    MENU.querySelectorAll('li').forEach ((item) => {
        item.classList.remove('active');
    });
    event.target.closest('.navbar__item').classList.add('active');
    
})