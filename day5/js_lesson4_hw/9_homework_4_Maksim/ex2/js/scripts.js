$(function() {
    $('.question').on('click', function() {
        $(this).next('div').slideDown();
        $(this).prevAll('div').not('.question').slideUp();
        $(this).nextAll('div').slice(1).not('.question').slideUp();
    });
});