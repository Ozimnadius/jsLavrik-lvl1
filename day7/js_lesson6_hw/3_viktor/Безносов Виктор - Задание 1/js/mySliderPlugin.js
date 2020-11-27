(function($){

	$.fn.mySlider = function(objSlider){
		var i = 0;

		var images = this.children(objSlider.images).children();
		var btnNext = this.find(objSlider.btnNext)
		var btnPrev = this.find(objSlider.btnPrev);
		

		var options = $.extend({
			auto: false,
			time: 1000
		},objSlider)

		var sliderNext = function(){
			images.eq(i).removeClass('showed');
			i++;
			if (i >= images.length)
			{
				i = 0;
			}
			images.eq(i).addClass('showed');
		}

		var sliderPrev = function(){
			images.eq(i).removeClass('showed');
			i--;
			if (i<0)
			{
				i = images.length - 1;
			}
			images.eq(i).addClass('showed');			
		}

		if (options.auto == false)
		{
			btnNext.on('click' , function(){
				sliderNext();
			});

			btnPrev.on('click' , function(){
				sliderPrev();
			});	
		}
		else
		{
			$('.buttons').hide();
			var timer = setInterval(function(){
				sliderNext();
			} , options.time);
		}		

	};

})(jQuery);