$(function () {
    var car_items = $('.faq');

    car_items.owlCarousel({
        items: 3,
        margin: 10,
        dots: false,
        nav: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 2,
                nav: false,
                dots: true
            },
            1000: {
                items: 3,
                nav: true,
            }
        },
        onResized: function(){ 
            console.log('RESIZE!!!'); 
            car_items.equalHeights();
        }, 
    });

    car_items.equalHeights();
    $(window).on('resize', function () { 
        console.log('resize!!!' + $( window ).width()); 
        car_items.equalHeights(); 
    });
});
