$(function () {

    $('.faq').owlCarousel({
        loop: true,
        margin: 20,
        dots:true,
        autoHeight:true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 1,
                nav: false
            },
            1000: {
                items: 1,
                nav: true,
                loop: false
            }
        }
    })
});
