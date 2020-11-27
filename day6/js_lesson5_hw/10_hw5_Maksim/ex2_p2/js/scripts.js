$(function(){
    var $photos = $('.gallery .photos img');
    var WidthDec = {width:'-=100%'};
    var WidthInc = {width:'+=100%'};
    var left = {'right':'initial', 'left':'0'};
    var right = {'left':'initial', 'right':'0'};

    $('.gallery .prev').on('click', function() {
        if($photos.filter('.showed').is('img:first-of-type')) {
            
            $photos.filter('.showed')
            .css(left)
            .stop(true, true)
            .animate(WidthDec, 750)
            .removeClass('showed');
            
            $photos.filter('img:last-of-type')
            .css(right)
            .stop(true,true)
            .animate(WidthInc, 750)
            .addClass('showed');

        } else {
            $photos.filter('.showed')
            .css(left)
            .stop(true, true)
            .animate(WidthDec, 750)
            .removeClass('showed')
            .prev()
            .css(right)
            .stop(true, true)
            .animate(WidthInc, 750)
            .addClass('showed');
        }
    });

    $('.gallery .next').on('click', function() {
        if($photos.filter('.showed').is('img:last-of-type')) {
            
            $photos.filter('.showed')
            .css(right)
            .stop(true, true)
            .animate(WidthDec, 750)
            .removeClass('showed');
            
            $photos.filter(':first')
            .css(left)
            .stop(true,true)
            .animate(WidthInc, 750)
            .addClass('showed');

        } else {
            $photos.filter('.showed')
            .css(right)
            .stop(true,true)
            .animate(WidthDec, 750)
            .removeClass('showed')
            .next()
            .css(left)
            .stop(true,true)
            .animate(WidthInc, 750)
            .addClass('showed');
        }
    });
});