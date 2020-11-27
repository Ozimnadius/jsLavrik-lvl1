$(function() {
    
    new Slider({
        images: '.gallery-1 img',
        btnPrev: '.gallery-1 .buttons .prev',
        btnNext: '.gallery-1 .buttons .next',
        auto: false
    });
    
	new Slider({
        images: '.gallery-2 img',
        btnPrev: '.gallery-2 .buttons .prev',
        btnNext: '.gallery-2 .buttons .next',
        auto: true,
        rate: 2000
    });
});

function Slider(obj) {
    
	this.images = $(obj.images);	
	this.auto = obj.auto;
	this.prev = $(obj.btnPrev);
	this.next = $(obj.btnNext);
    this.rate = obj.rate || 1000;
	
	var i = 0;
    
    var slider = this;
	sliderWidth = slider.images.eq(0).width();
	
	this.prev.on( 'click', function () {
        move(-1, -sliderWidth);
    });   

    this.next.on('click', function () {
       move(1, sliderWidth);
     });
	 
	function move(direction, moveLeft) {
		
		// скрыть 
		slider.images.eq(i).animate({
            opacity: 0,
			left: moveLeft
	    }, 1000);
			
		i += direction;
		if (i < 0) {
			i = slider.images.length - 1;
		}
		else if (i >= slider.images.length) {
			i = 0;
		}
		
		// показать
		var sliderShow = slider.images.eq(i);
		$(sliderShow).css({"left": -moveLeft}); 
		
		sliderShow.animate({
            opacity: '1',
			left: 0,
		}, 1000);
	}
	
	if(slider.auto)	{
        setInterval(function() {move(1, sliderWidth);}, slider.rate);
    }

};



