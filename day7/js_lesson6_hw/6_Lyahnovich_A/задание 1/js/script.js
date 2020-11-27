$(function(){
    var images = $('.gallery .photos img');
    $(images).slider({speed: 500, time: 10000, auto_change: true, next: '.buttons .next', prev: '.buttons .prev'});
});