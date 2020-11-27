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

 	$('.scrollup').hide();

 	$(window).on('scroll', function(e) {
 		// console.log(window.pageYOffset);
 		if (window.pageYOffset > 100)
 		{
 			$('.scrollup').fadeIn(300);
 		}
 		else
 		{
 			$('.scrollup').fadeOut(300);
 		}
 	});

 	$('.scrollup').on('click' , function(){
       $('html, body').animate({
            scrollTop: 0
        }, 400);    		
 	});

});
