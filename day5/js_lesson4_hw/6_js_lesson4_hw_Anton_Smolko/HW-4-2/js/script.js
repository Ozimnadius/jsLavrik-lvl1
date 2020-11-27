$(function() {
    var slider = new Slider({
            images: '#gallery img',
            btnPrev: '#gallery .buttons .prev',
            btnNext: '#gallery .buttons .next',
            autoplay: true,
            autoplayTimeout: 2000
        })

        var slider2 = new Slider({
            images: '#gallery-2 img',
            btnPrev: '#gallery-2 .buttons .prev',
            btnNext: '#gallery-2 .buttons .next',
            autoplay: true,
            autoplayTimeout: 5000
        })

    function Slider(obj) {
        var i = 0;
        this.images = $(obj.images);
        this.autoplay = obj.autoplay;
        this.autoplayTimeout = obj.autoplayTimeout;
        this.btnPrev = obj.btnPrev;
        this.btnNext = obj.btnNext;

        var slider = this;

        this.prev = function() {
            slider.images.eq(i).removeClass('showed');
            i--;
            if(i < 0){
                i = slider.images.length - 1;
            }
            slider.images.eq(i).addClass('showed');
        }
        this.next = function() {
            slider.images.eq(i).removeClass('showed');
            i++;
            if(i >= slider.images.length){
                i = 0;
            }
            slider.images.eq(i).addClass('showed');
        }
        
        $(slider.btnPrev).on('click', function() {
            slider.prev();
        });
        $(slider.btnNext).on('click', function() {
            slider.next();
        });
        this.autoPlay = function() {
            setInterval(function() {
                slider.next();
            }, slider.autoplayTimeout);
        }
        if(slider.autoplay) {
            slider.autoPlay();
        }
    }
});
    


