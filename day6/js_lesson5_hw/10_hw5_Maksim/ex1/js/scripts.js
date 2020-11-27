$(function () {

    var $toTop = $('#toTop');

    var $obj = $(this).on('scroll', function(e) {
        var scrolled = $(this).scrollTop();
        if(scrolled >= 600) {
            $toTop.css('display', 'block');
        } else {
            $toTop.css('display', 'none');
        }
    });
    
    $toTop.on('click', function() {
        $('html, body').animate({
            scrollTop: -$obj.scrollTop()
        }, 1000);
    });
    
    // $('.menu a').on('click', function (e) {
    //     e.preventDefault();
        
    //     $('.menu a').removeClass('active').filter(this).addClass('active');
        
    //     var selector = $(this).attr('href'); /* #about - строка */
    //     var h = $(selector); /* jquery-элемент заголовка */
        
    //     $('html, body').animate({
    //         scrollTop: h.offset().top - 70
    //     }, 400);
        
        
    // });


});
