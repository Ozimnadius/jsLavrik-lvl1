$(function(){
    var $photos = $('.gallery .photos img');
    $('.gallery .prev').on('click', function() {
        if($photos.filter('.showed').is('img:first-of-type')) {
            $photos.filter('.showed').removeClass('showed');
            $photos.filter('img:last-of-type').addClass('showed');
        } else {
            $photos.filter('.showed').removeClass('showed').prev().addClass('showed');
        }
    });
    $('.gallery .next').on('click', function() {
        if($photos.filter('.showed').is('img:last-of-type')) {
            $photos.filter('.showed').removeClass('showed');
            $photos.filter(':first').addClass('showed');
        } else {
            $photos.filter('.showed').removeClass('showed').next().addClass('showed');
        }
    });
});