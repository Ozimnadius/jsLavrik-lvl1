$(function() {
    
     var slider1 = new Slider({
        images: '.gallery-1 img',
        btnPrev: '.gallery-1 .buttons .prev',
        btnNext: '.gallery-1 .buttons .next',
        auto: true, 
        rate: 1000
    });
    
    var slider2 = new Slider({
        images: '.gallery-2 img',
        btnPrev: '.gallery-2 .buttons .prev',
        btnNext: '.gallery-2 .buttons .next'
    });

    function Slider(obj) {
        var slider = this;
        slider.images = $(obj.images);
        slider.btnPrev = obj.btnPrev;
        slider.btnNext = obj.btnNext;
        slider.auto = obj.auto;
        slider.rate = obj.rate || 1000;
        var i = 0;


        slider.prev = function(){
            $(slider.images[i]).removeClass('showed');
            i--;

            if (i < 0) {
                i = slider.images.length - 1;
            }

            $(slider.images[i]).addClass('showed');
        }
        slider.next = function(){
            $(slider.images[i]).removeClass('showed');
            i++;

            if (i >= slider.images.length) {
                i = 0;
            }

           $(slider.images[i]).addClass('showed');
        }

        $(slider.btnPrev).click(function(){
            slider.prev();
        });

        $(slider.btnNext).click(function(){
            slider.next();
        });

        if(slider.auto){
            setInterval(slider.next, slider.rate)
        }
    }

});
   

 