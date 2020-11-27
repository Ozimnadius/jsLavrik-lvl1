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
        rate: 5000
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
        slider.images.eq(i).css({

    }).animate({

    }, 5000);
    i--;

    if (i < 0) {
        i = slider.images.length - 1;
    }

    slider.images.eq(i).css({

        }).animate({

        }, 5000);
    }

    this.next = function () {
        slider.images.eq(i).css({
            top: '100%',
            left: '100%',
            zIndex: 1
        }).animate({
            top: 0,
            left: 0,
            width: 0
        }, 5000);
    i++;

    if (i >= slider.images.length) {
      i = 0;
    }

    slider.images.eq(i).css({
          top: 0,
          left: 0,
          zIndex: 2
      }).animate({
          top: '100%',
          left: '100%',
          width: '100%'
      }, 5000);
    }

    $(slider.btnPrev).on('click', function(){ slider.prev();});
    $(slider.btnNext).on('click', function(){ slider.next();});

    if(slider.auto)	{
        setInterval(slider.next, slider.rate);
    }
};
