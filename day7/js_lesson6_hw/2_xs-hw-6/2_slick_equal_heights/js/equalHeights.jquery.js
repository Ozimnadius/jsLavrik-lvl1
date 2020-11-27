(function($){
    $.fn.equalHeights = function(settings){
        var defaults = {
        };
        
        var options = $.extend(defaults, settings);
        var heights = new Array();
        var maxheight = 0;

        this.each(function(){

           $.each($('.item'), function() {
                if (maxheight < $(this).children().height()) { 
                    maxheight = $(this).children().height();
                }
                console.log('children: ' +  $(this).children().height());
            });

            console.log(maxheight);
            $('.item').height(maxheight + 20);

        });
        
        return this;
    };
})(jQuery);

