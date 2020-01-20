var header = $('.header');
var scrollClass = 'scrolled';
var activateAtY = 20;

function deactivateHeader() {
    if (!header.hasClass(scrollClass)) {
        header.addClass(scrollClass);
    }
}

function activateHeader() {
    if (header.hasClass(scrollClass)) {
        header.removeClass(scrollClass);
    }
}

$(window).scroll(function () {
    header = $('.header');
    if ($(window).scrollTop() > activateAtY) {
        deactivateHeader();
    } else {
        activateHeader();
    }
});

$(window).ready(function () {
    // var canvas = document.getElementById("can");
    // var context = canvas.getContext("2d");

    // context.fillStyle = 'black';
    // context.fillRect(0, 0, 640, 360);
});