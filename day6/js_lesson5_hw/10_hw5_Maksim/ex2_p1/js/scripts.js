$(function(){
    var $photos = $('.gallery .photos img');
    var heightWidthDec = {height:'-=100%', width:'-=100%'};
    var heightWidthInc = {height:'+=100%', width:'+=100%'};
    var leftTop = {'right':'initial', 'bottom':'initial', 'left':'0', 'top': '0'};
    var rightBottom = {'left':'initial', 'top':'initial', 'right':'0', 'bottom': '0'};

    $('.gallery .prev').on('click', function() {
        if($photos.filter('.showed').is('img:first-of-type')) {
            
            $photos.filter('.showed')
            .css(leftTop)
            .stop(true, true)
            .animate(heightWidthDec, 750)
            .removeClass('showed');
            
            $photos.filter('img:last-of-type')
            .css(rightBottom)
            .stop(true,true)
            .animate(heightWidthInc, 750)
            .addClass('showed');

        } else {
            $photos.filter('.showed')
            .css(leftTop)
            .stop(true, true)
            .animate(heightWidthDec, 750)
            .removeClass('showed')
            .prev()
            .css(rightBottom)
            .stop(true, true)
            .animate(heightWidthInc, 750)
            .addClass('showed');
        }
    });

    $('.gallery .next').on('click', function() {
        if($photos.filter('.showed').is('img:last-of-type')) {
            
            $photos.filter('.showed')
            .css(rightBottom)
            .stop(true, true)
            .animate(heightWidthDec, 750)
            .removeClass('showed');
            
            $photos.filter(':first')
            .css(leftTop)
            .stop(true,true)
            .animate(heightWidthInc, 750)
            .addClass('showed');

        } else {
            $photos.filter('.showed')
            .css(rightBottom)
            .stop(true,true)
            .animate(heightWidthDec, 750)
            .removeClass('showed')
            .next()
            .css(leftTop)
            .stop(true,true)
            .animate(heightWidthInc, 750)
            .addClass('showed');
        }
    });
});