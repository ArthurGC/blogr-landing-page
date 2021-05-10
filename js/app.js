function openHamb() {
    menu.classList.toggle('flex');
    buttons.classList.toggle('flex');
}

function openSubMenu() {
    if (this.id == 1) {
        subMenu1.classList.toggle('display');
        subMenu2.classList.remove('display');
        subMenu3.classList.remove('display');
    }
    else if (this.id == 2) {
        subMenu2.classList.toggle('display');
        subMenu1.classList.remove('display');
        subMenu3.classList.remove('display');
    }
    else if (this.id == 3) {
        subMenu3.classList.toggle('display');
        subMenu2.classList.remove('display');
        subMenu1.classList.remove('display');
    }
}

const hamb = document.querySelector('.header__navbar__hamb');
const menu = document.querySelector('.header__navbar__menu');
const buttons =  document.querySelector('.header__navbar__buttons');

const linksMenu = document.querySelectorAll('.header__navbar__item');

const subMenu1 = document.querySelector('.header__navbar__item--ul1');
const subMenu2 = document.querySelector('.header__navbar__item--ul2');
const subMenu3 = document.querySelector('.header__navbar__item--ul3');

hamb.addEventListener('click',openHamb)

linksMenu.forEach(link => {
    link.addEventListener('click', openSubMenu)
});

