$(function() {
    $('.question').on('click', function() {
        $(this).next('div').slideToggle();
    });
});