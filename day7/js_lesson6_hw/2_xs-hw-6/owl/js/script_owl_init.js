$(function () {

    $('.gallery-1').owlCarousel({
        loop: true,         // по кругу
        margin: 20,         // расстояние межд картинками
        stagePadding: 50,   //сдвиг краев оббл просмотра на часть картинки
        //center: true,       // лев край галереи от центра экрана
        merge: false,
        //autoWidth:true,
        // autoHeight: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true       // показывать навигац элты
            },
            600: {
                items: 2,
                loop: false,
                nav: false,
            },
            1000: {
                items: 3,
                nav: true,
                mergeFit:false
            }
        }
    });

   var gal2 = $('.gallery-2');
   gal2.owlCarousel({
        loop: true,
        nav: true,
        autoplay:true,
        autoplayTimeout:1000,
        autoplayHoverPause:true,
    });

    gal2.on('mousewheel', '.owl-stage', function (e) {
        if (e.deltaY>0) {
            gal2.trigger('next.owl');
        } else {
            gal2.trigger('prev.owl');
        }
        e.preventDefault();
    });

    $('.play').on('click',function(){
         owl.trigger('play.owl.autoplay',[1000])
    })
    $('.stop').on('click',function(){
        owl.trigger('stop.owl.autoplay')
    })



});


   
