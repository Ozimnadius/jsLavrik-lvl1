$(function () {

    $('.faq').owlCarousel({
        loop: true,
        margin: 20,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 3,
                nav: false
            },
            1000: {
                items: 5,
                nav: true,
                loop: false
            }
        },
		onResized: function() {setHeight();},
		
    })
	
	var elem = $('.item');
	var elem_inner = $('.item_inner');
	
	function setHeight(){
		var hght = 0;
		
		elem_inner.each(function() {
			if(hght < $(this).height()) {
				hght = $(this).height();
			}
		});
		
		console.log(hght);
		
		elem.each(function() {
			$(this).css("min-height", hght);
		});
	}
	
	setHeight();
			
	$(window).on('resize', function(){
			setHeight();
	});
	

});
