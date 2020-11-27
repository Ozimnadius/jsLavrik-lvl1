(function($){
    $.fn.slider = function(settings) {
        var options = $.extend({
            speed: 2000,
            time: 5000,
            auto_change: false,
        }, settings);
        
        var images = $(this);
        $(images).css("display", "none");

        if (options.auto_change) { 
            var timerId = setInterval(function() {
                next();    
            }, options.time);   
        }
        
        $(options.prev).on('click', function() {
            prev();
        });

        $(options.next).on('click', function() {
            next();
        });

        var i = $(this).length - 1;
        $(images).eq(i).css("display", "block");
        
        
        prev = function() {
            $(images).eq(i).fadeOut(options.speed);
            i++;
            if(i >= $(images).length){
                i = 0;
            }
            $(images).eq(i).fadeIn(options.speed);    
        }

        next = function() {
            $(images).eq(i).fadeOut(options.speed);
            i--;
            if(i <= 0) {
                i = $(images).length-1;
            }
            $(images).eq(i).fadeIn(options.speed);    
        }

        return this;
    };
})(jQuery);