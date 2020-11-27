$(function(){
    var $photos = $('.gallery .photos img');
    var leftInc = {left:'+=100%'};
    var rightInc = {left:'-=100%'};
    var left = {'left':'-100%'};
    var right = {'left':'100%'};

    $('.gallery .prev').on('click', function() {
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
    });

    $('.gallery .next').on('click', function() {
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
    });
});