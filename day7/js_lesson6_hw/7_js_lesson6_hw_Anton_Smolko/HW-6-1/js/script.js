(function($){
    $.fn.slider = function (settings) {
        var options = $.extend({
            controlsClass: 'controls',
            autoplay: false,
            autoplayTimeout: 3000,
        }, settings);

        this.images = this.find('img');
        this.wrap("<div class='slider'></div>");
        this.parent().append("<div class=" + options.controlsClass + ">");
        $('.' + options.controlsClass).append("<button class='prev'>Назад</button><button class='next'>Вперед</button>");
        this.btnPrev = '.prev';
        this.btnNext = '.next';
        var i = 0;
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
                $('.' + options.controlsClass).children().prop("disabled", false);
            }));
        }

        $(slider.btnPrev).on('click', function() {
            $('.' + options.controlsClass).children().prop("disabled", true);
            slide(-1);
        })
        $(slider.btnNext).on('click', function() {
            $('.' + options.controlsClass).children().prop("disabled", true);
            slide(1);
        })

        this.autoPlay = function() {
            setInterval(function(){
                $('.' + options.controlsClass).children().prop("disabled", true);
                slide(1);
            }, options.autoplayTimeout);
        }

        if(options.autoplay) {
            slider.autoPlay();
        }
    }
    return this;
})(jQuery);

$(function() {
    $('.photos').slider({
        autoplay: true,
        controlsClass: 'slider-nav'
    });
    
});
    


