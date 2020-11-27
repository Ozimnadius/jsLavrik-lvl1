(function($) {
	
	/*Хотелось бы, конечно, и стлили в отдельный файл для данного плагина повыносить, 
	такие, например, как position: relative и absolute для родителя и дочернего, 
	или по виду анимации, но ограничен во времени, так что плагин не совсем универсальный,
	но с данными дивами работает )) */
	
	
	$.fn.alexSlider = function(settings){
		
		var defaults = {
			images: this.find('img'),
			prev: this.find(':button').first(),
			next: this.find(':button').last(),
			auto: false,
			rate: 2000
		};
		
		var options = $.extend(defaults, settings);
		
		var isRun = false;	
		var i = 0;
		var sliderWidth = options.images.eq(i).width();
		
		function flagOff(){
			isRun = false;
		};
		
	options.prev.on( 'click', function () {
		
        move(-1, -sliderWidth);
    });   

    options.next.on('click', function () {
		
		move(1, sliderWidth);
     });
	 
	 
	 
	function move(direction, moveLeft) {
		if(isRun){
				return
			};
			isRun = true;
			
		// скрыть 
		options.images.eq(i).animate({
           	left: moveLeft
	    }, 1000, flagOff);
			
		i += direction;
		if (i < 0) {
			i = options.images.length - 1;
		}
		else if (i >= options.images.length) {
			i = 0;
		}
		
		// показать
		options.images.eq(i).css({
			'left': -moveLeft}).animate({
								left: 0
		}, 1000, flagOff);
	}
	
	if(options.auto){
        setInterval(function() {move(1, sliderWidth);}, options.rate);
    }
		return this;
	};
	
})(jQuery);