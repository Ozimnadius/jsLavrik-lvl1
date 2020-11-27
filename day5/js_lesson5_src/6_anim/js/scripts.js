$(function () {

    $('.item').on('click', function () {
        $(this).stop(true, true).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300);
    });

    $('.item').on('contextmenu', function (e) {
        e.preventDefault();

        /*
         $(this).animate({
         height: 100
         }, 500).animate({
         opacity: 0.5
         }, 500);
         */

        $(this).animate({
            height: '-=100px',
            opacity: 0.5
        }, 500, $.bez([.51,1.92,.43,-0.98]));
    });

});
