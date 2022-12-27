'use strict';
function scrollTop() {
    const topButton = document.getElementById('button');
    topButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

scrollTop();

function appearMenu() {
    const appearButton = document.getElementById('appear');
    const responsivMenu = document.getElementById('appearMenu');
    appearButton.addEventListener('click', () => {
        responsivMenu.classList.toggle('responsive-menu-appear');
    })
}

appearMenu();