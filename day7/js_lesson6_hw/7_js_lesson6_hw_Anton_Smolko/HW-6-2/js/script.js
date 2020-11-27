(function($){
    $.fn.sliderHeight = function (settings) {
        var options = $.extend({
            itemClass: '',
        }, settings);

        this.height = 0;
        var slider = this;
        var items = slider.find(options.itemClass);
        items.each(function(){
            if($(this).innerHeight() > slider.height) {
                slider.height = $(this).innerHeight();
            }
        });
        $(options.itemClass).innerHeight(slider.height);
        return this;
    }
})(jQuery);

$(function() {

    function callback(event) {
        $('.owl-carousel').sliderHeight({
            itemClass: '.owl-item'
        });
    }

    $('.owl-carousel').owlCarousel({
        onInitialized: callback,
        items: 3,
        margin: 20,
        loop: true,
        nav: true
    });

    $('.slick').on('init', function() {
        $(this).sliderHeight({
            itemClass: '.slick-slide'
        });
    });

    $('.slick').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      dots: true,
    });

});
    


