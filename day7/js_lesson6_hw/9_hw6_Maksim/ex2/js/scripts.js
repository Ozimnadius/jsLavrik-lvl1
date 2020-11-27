$(function () {
                
    $('.faq').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: false,
                loop: true
            },
            600: {
                items: 2,
                nav: false,
                loop: true
            },
            1000: {
                items: 3,
                nav: false,
                loop: true
            },
            1200: {
                items: 4,
                nav: false,
                loop: true
            },
            1350: {
                items: 5,
                nav: false,
                loop: false
            }
        },
        onInitialized: function(){
            var $items = $('.item');
            setTimeout(function(){
                autoHeight();
            },0);
        },
        onResized: autoHeight
    });
    

    function autoHeight() {
        var $items = $('.item');

        $items.each(function(){
            $(this).css('height', 'auto');
        })

        var height = [];

        var $item = $items.each(function(){
            height[height.length] = $(this).height();
        });

        var max = ArrayMax(height);

        $items.each(function(){
            if($(this).height() < max) {
                $(this).css('height', max);
            }
        });

        function ArrayMax(array) {
            return Math.max.apply(Math, array);
        }
    }
});
