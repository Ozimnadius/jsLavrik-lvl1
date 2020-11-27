$(function () {

    $('.faq').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: true,
                loop: false
            }
        }
    });


    var items = $('.item');
    var maxHeight = 0;


    function setHeight(){


        for (var i = 0; i<items.length; i++) {

        if( items.eq(i).height() > maxHeight){
            maxHeight = items.eq(i).height();
        }
    }

    $('.item').css('min-height', maxHeight+'px');
    //$('.item').height(maxHeight); - почему при изменении окна это совсем не работает??

    }

    setHeight();

    //как то странно это работает. Срабатыывает только при 2-ом resize/..

    $(window).on('resize', function(){
        setHeight();
    })

});

