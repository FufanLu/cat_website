'use strict';

(function () {
    const hamburgerEl = document.querySelector('.hamburger-btn')
    hamburgerEl.addEventListener('click', () => {
        document.querySelector('.header__nav').classList.toggle('active');
    });
})();
