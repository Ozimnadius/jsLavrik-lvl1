$(function () {
    var car_items = $('.faq');

    car_items.owlCarousel({
        items: 3,
        margin: 10,
        autoHeight: true,
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
    });

});
