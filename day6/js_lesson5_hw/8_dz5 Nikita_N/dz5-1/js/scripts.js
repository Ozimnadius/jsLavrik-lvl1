$(function () {

    /*$('.menu a').on('click', function (e) {
        e.preventDefault();
        
        $('.menu a').removeClass('active').filter(this).addClass('active');
        
        var selector = $(this).attr('href'); /* #about - строка */
     /*   var h = $(selector); /* jquery-элемент заголовка
        
        $('html, body').animate({
            scrollTop: h.offset().top - 70
        }, 400);

    });*/


    //---------------------------------//

    fadeBtn();

    function fadeBtn() {
        if($(this).scrollTop() > 400){
            $('.btn').fadeIn(700);
        }

        else{
            $('.btn').fadeOut(700);
        }
    }

    $(window).on('scroll',function () {
        fadeBtn();
    });

    $('.btn').on('click',function () {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
    })

});
