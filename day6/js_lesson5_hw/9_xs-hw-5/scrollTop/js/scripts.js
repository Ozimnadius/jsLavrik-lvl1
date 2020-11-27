$(function () {

	var butTop = $('.butTop');

	$(window).on("scroll", function (e) { 
	 	console.log("scroll");
	 	
	 	if ($(this).scrollTop() > 100) {
	 		butTop.fadeIn(300);
	 	}
	 	else {
	 		butTop.fadeOut(300);
	 	}
	});

	butTop.click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, {
            duration: 2000,
            easing: 'swing'
        });
    });

    $('.menu a').on('click', function (e) {
        e.preventDefault();
        
        $('.menu a').removeClass('active').filter(this).addClass('active');
        
        var selector = $(this).attr('href'); /* #about - строка */
        var h = $(selector); /* jquery-элемент заголовка */
        
        $('html, body').animate({
            scrollTop: h.offset().top - 70
        }, 400);
        
        
    });


});
