$(function() {

    new Slider({
        images: '.gallery-1 img',
        btnPrev: '.gallery-1 .buttons .prev',
        btnNext: '.gallery-1 .buttons .next',
        auto: false
    });

});


function Slider(obj) {

	this.images = $(obj.images);
	this.auto = obj.auto;
	this.btnPrev = obj.btnPrev;
	this.btnNext = obj.btnNext;
    this.rate = obj.rate || 1000;

	var i = 0;

    var slider = this;

	this.prev = function () {
		slider.images.eq(i).css({top: '0', bottom: '',left:'0', right: ''}).animate({
            width: 0
        }, 500).removeClass('showed');
		i--;

		if (i < 0) {
			i = slider.images.length - 1;
		}

		slider.images.eq(i).css({top: '', bottom: '0', left:'', right: '0'}).animate({
            width: '100%'
        }, 500);
	}

	this.next = function () {

		slider.images.eq(i).css({top: '', bottom: '0',left:'', right: '0'}).animate({
            width: 0
        }, 500).removeClass('showed');;
		i++;

		if (i >= slider.images.length) {
			i = 0;
		}

		slider.images.eq(i).css({top: '0', bottom: '',left:'0', right: ''}).animate({
            width: '100%'
        }, 500);
	}

    $(slider.btnPrev).on('click', function(){ slider.prev();});
    $(slider.btnNext).on('click', function(){ slider.next();});

	if(slider.auto)	{
        setInterval(slider.next, slider.rate);
    }
};
