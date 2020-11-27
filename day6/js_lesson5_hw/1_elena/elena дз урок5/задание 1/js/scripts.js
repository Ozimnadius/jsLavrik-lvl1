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
	
	var btnUp = $('.up');
	
    function scroolBtn(){
        var top = $(this).scrollTop();
		
		if (top > 300) {
			btnUp.fadeIn(500);
		}
		else {
			btnUp.fadeOut(500);
		}
    }
    
    scroolBtn();
    
	$(document).on('scroll', scroolBtn);
	
	btnUp.on('click', function() {
		 $('html, body').animate({
            scrollTop: 0
        }, 400);
		
	})
	

});
