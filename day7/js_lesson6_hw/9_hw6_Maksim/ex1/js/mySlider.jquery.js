(function($){
    $.fn.mySlider = function(settings){
        var defaults = {
            images: 'img',
            btnNext: '',
            btnPrev: '',
            auto: false
        };

        var options = $.extend(defaults, settings);

        this.each(function(){
            var $elem = $(this);
            var $photos = $elem.find(options.images);
            if(options.btnNext) {
                var $btnNext = $(options.btnNext);
                $btnNext.on('click', Next);
            }
            if(options.btnPrev) {
                var $btnPrev = $(options.btnPrev);
                $btnPrev.on('click', Prev);
            }
            if(!options.btnNext && !options.btnPrev) {
                options.auto = true;
            }

            var leftInc = {left:'+=100%'};
            var rightInc = {left:'-=100%'};
            var left = {'left':'-100%'};
            var right = {'left':'100%'};

            function Next() {
                if($photos.filter('.showed').is('img:last-of-type')) {
                    
                    $photos.filter('.showed')
                    .stop(true, true)
                    .animate(leftInc, 750)
                    .removeClass('showed');
                    
                    $photos.filter(':first')
                    .css(left)
                    .stop(true,true)
                    .animate(leftInc, 750)
                    .addClass('showed');

                } else {
                    $photos.filter('.showed')
                    .stop(true,true)
                    .animate(leftInc, 750)
                    .removeClass('showed')
                    .next()
                    .css(left)
                    .stop(true,true)
                    .animate(leftInc, 750)
                    .addClass('showed');
                }
            }

            function Prev() {
                if($photos.filter('.showed').is('img:first-of-type')) {
                    
                    $photos.filter('.showed')
                    .stop(true, true)
                    .animate(rightInc, 750)
                    .removeClass('showed');
                    
                    $photos.filter('img:last-of-type')
                    .css(right)
                    .stop(true,true)
                    .animate(rightInc, 750)
                    .addClass('showed');

                } else {
                    $photos.filter('.showed')
                    .stop(true, true)
                    .animate(rightInc, 750)
                    .removeClass('showed')
                    .prev()
                    .css(right)
                    .stop(true, true)
                    .animate(rightInc, 750)
                    .addClass('showed');
                }
            }

            if(options.auto) {
                setInterval(function(){
                    Next();
                },2000);
            }
        });

        return this;
    }
})(jQuery);