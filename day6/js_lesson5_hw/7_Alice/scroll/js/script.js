$(function () {

    $('.menu a').on('click', function (e) {
        e.preventDefault();

        $('.menu a').removeClass('active').filter(this).addClass('active');

        var selector = $(this).attr('href'); /* #about - строка */
        var h = $(selector); /* jquery-элемент заголовка */

        $('html, body').animate({
            scrollTop: h.offset().top - 70
        }, 400);


    });

    var $arrow = $('.arrow')
    $arrow.hide();

    $(window).on('scroll', function() {
      if ($(this).scrollTop() > 500) {
        $arrow.fadeIn();
      } else {
        $arrow.fadeOut();
      }
    });

    $arrow.on('click', function (e) {
        e.preventDefault();

        $('html, body').animate({
            scrollTop: 0
        }, 800);

    });

});
