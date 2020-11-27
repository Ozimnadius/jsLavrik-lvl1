$(function() {
    var slider = new Slider({
            images: '#gallery img',
            btnPrev: '#gallery .buttons .prev',
            btnNext: '#gallery .buttons .next',
            // autoplay: true,
            autoplayTimeout: 2000
        })

    function Slider(obj) {
        var i = 0;
        this.images = $(obj.images);
        this.autoplay = obj.autoplay;
        this.autoplayTimeout = obj.autoplayTimeout;
        this.btnPrev = obj.btnPrev;
        this.btnNext = obj.btnNext;

        var slider = this;

        function slide(direction) {
            slider.images.eq(i).animate({"left": (-100 * direction) + "%"}, 1000, (function() {
                $(this).css("opacity", 0);
                $('input').prop("disabled", false);
            }));
            i += direction;                                                                                                                                                             // --
            if(i < 0){
                i = slider.images.length - 1;
            } else if(i >= slider.images.length) {
                i = 0;
            }
            slider.images.eq(i).css({"left": (100 * direction) + "%", "opacity": "1"}).animate({"left": "0"}, 1000, (function() {
                $(slider.btnPrev, slider.btnNext).prop("disabled", false);
            }));
        }

        $(slider.btnPrev).on('click', function() {
            $(this).prop("disabled", true);
            $(slider.btnNext).prop("disabled", true);
            slide(-1);
        })
        $(slider.btnNext).on('click', function() {
            $(this).prop("disabled", true);
            $(slider.btnPrev).prop("disabled", true);
            slide(1);
        })
 
        // this.autoPlay = function() {
        //     setInterval(function() {
        //         $(slider.btnPrev).prop("disabled", true);
        //         $(slider.btnNext).prop("disabled", true);
        //         slide(1);
        //     }, slider.autoplayTimeout);
        // }
        // if(slider.autoplay) {
        //     slider.autoPlay();
        // }
    }
});
    


