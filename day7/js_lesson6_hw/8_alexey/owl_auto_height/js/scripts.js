$(function () {

    $('.faq').owlCarousel({
        loop: true,
        margin: 10,
		autoHeight:true,
		autoHeightClass: 'item',
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 3,
                nav: true
            },
            1000: {
                items: 5,
                nav: true,
                loop: true
            }
        }
    })
});
