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

$("#appear").click(function () {
    $("#appearMenu").slideToggle(900);
});
