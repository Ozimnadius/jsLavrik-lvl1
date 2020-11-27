$(function() {
    
    new Slider({
        images: '.gallery-1 img',
        btnPrev: '.gallery-1 .buttons .prev',
        btnNext: '.gallery-1 .buttons .next',
        auto: false
    });
    
	new Slider({
        images: '.gallery-2 img',
        btnPrevHorizontal: '.gallery-2 .buttons .prev2',
        btnNextHorizontal: '.gallery-2 .buttons .next2',
		photos: '.photos',
        auto: false,
        rate: 2000
    });
});


function Slider(obj) {
    
	this.images = $(obj.images);	
	this.auto = obj.auto;
	this.btnPrev = obj.btnPrev;
	this.btnNext = obj.btnNext;
	this.btnPrevHorizontal = obj.btnPrevHorizontal;
	this.btnNextHorizontal = obj.btnNextHorizontal;
	this.parentImages = obj.photos;
    this.rate = obj.rate || 1000;
	
	var i = 0;
    
    var slider = this;

	this.prev = function () {
		slider.images.eq(i).css({'left':'0', 
								'top':'0', 
								'right':'auto', 
								'bottom':'auto'}).animate({width: 0,
								opacity:'0'}, 500);
		i--;

		if (i < 0) {
			i = slider.images.length - 1;
		}

		slider.images.eq(i).css({'left':'auto', 
								'top':'auto', 
								'right':'0', 
								'bottom':'0'
								}).animate({width: '100%',
								opacity:'1'}, 500);
	}

	this.next = function () {
		slider.images.eq(i).css({'left':'auto', 
								'top':'auto', 
								'right':'0', 
								'bottom':'0'}).animate({width: 0, opacity:'0'}, 500);
		i++;

		if (i >= slider.images.length) {
			i = 0;
		}

		slider.images.eq(i).css({'left':'0', 
								'top':'0', 
								'right':'auto', 
								'bottom':'auto'}).animate({width: '100%',
								opacity:'1'}, 500);
	}
	
				/* --------- Горизонтальный слайдер не получился------------- 
	
	this.prevHorizontal = function () {
		
		slider.images.eq(i).css({'width':'100%'}).animate({'left':'0', 'right':'auto'}, 500, $.bez([.55,.55,.55,.55]));
		i--;

		if (i < 0) {
			i = slider.images.length - 1;
		}

		slider.images.eq(i).css({'width':'100%'}).animate({'left':'auto', 'right':'0'}, 500, $.bez([.55,.55,.55,.55]));
	}
	
	this.nextHorizontal = function () {
		
		
		slider.images.eq(i).css({'width':'100%'}).animate({'left':'auto', 
								'right':'0'}, 500, $.bez([.55,.55,.55,.55]));
		i++;

		if (i >= slider.images.length) {
			i = 0;
		}

		slider.images.eq(i).css({'width':'100%'}).animate({'left':'0', 
								'right':'auto'}, 500, $.bez([.55,.55,.55,.55]));
	}*/
	
	$(slider.btnPrev).on('click', function(){slider.prev();});
    $(slider.btnNext).on('click', function(){slider.next();});
	
	/* $(slider.btnPrevHorizontal).on('click', function(){slider.prevHorizontal();});
    $(slider.btnNextHorizontal).on('click', function(){slider.nextHorizontal();});	 */
	
	if(slider.auto)	{
        setInterval(slider.next, slider.rate);
    }
};
