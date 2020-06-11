const menuBtn = document.querySelector('.main-nav--interactive__toggle'),
    menu = document.querySelector('.main-nav--interactive'),
    menuElements = document.querySelectorAll('.site-list--interactive__item');

menuBtn.onclick = function () {

    if(!menu.classList.contains('visible')){
        menu.classList.add('visible');
        menuBtn.classList.add('change');
    } else {
        menu.classList.remove('visible');
        menuBtn.classList.remove('change');
    }
};

menuElements.forEach(function (elem) {
        elem.addEventListener("click", function () {
            menu.classList.remove('visible');
            menuBtn.classList.remove('change');

        })
});

