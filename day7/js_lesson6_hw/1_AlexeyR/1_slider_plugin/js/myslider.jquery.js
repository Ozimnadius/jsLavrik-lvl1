(function($){

	$.fn.myslider = function(settings){
		var options = $.extend({
			auto: false,
			rate: 1000,
			btnNext: '.gallery-1 .buttons .next',
			btnPrev: '.gallery-1 .buttons .prev',
			images: '.gallery-1 img'

		},settings)


		this.each(function(){
			this.images = $(options.images);
			this.auto = options.auto;
			this.btnPrev = options.btnPrev;
			this.btnNext = options.btnNext;
			this.rate = options.rate;


			var i = 0;
		    var slider = this;

			this.prev = function () {
				slider.images.eq(i).css({left:'0', right: ""}).animate({
		            width: 0
		        }, 500).removeClass('showed');
				i--;

				if (i < 0) {
					i = slider.images.length - 1;
				}

				slider.images.eq(i).css({left:"", right: '0'}).animate({
		            width: '100%'
		        }, 500);
			}

			this.next = function () {

				slider.images.eq(i).css({left:"", right: "0"}).animate({
		            width: 0
		        }, 500).removeClass('showed');;
				i++;

				if (i >= slider.images.length) {
					i = 0;
				}

				slider.images.eq(i).css({left:'0', right: ""}).animate({
		            width: '100%'
		        }, 500);
			}

		    $(slider.btnPrev).on('click', function(){ slider.prev();});
		    $(slider.btnNext).on('click', function(){ slider.next();});

			if(slider.auto)	{
		        setInterval(slider.next, slider.rate);
		    }
		});

		return this;
	};

})(jQuery);