$(function () {
    var carousel = $('.faq');

    carousel.slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        speed: 300,
       //adaptiveHeight: true,

        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ],
    });

   /* var alignHeight = function(){ 
        var maxHeight = 0; 


        $('.item').each(function() { 
            if ($(this).height() > maxHeight) 
            { 
                maxHeight = $(this).height(); 
            } 
        }); 

        $('.item').each(function() { 
            $(this).height(maxHeight); 
        }); 

            console.log(maxHeight); 
    } 

    alignHeight();
     $(window).on('resize', function () { 
        console.log('resize!!!' + $( window ).width()); 
        alignHeight(); 
    });*/

    carousel.equalHeights();

    $(window).on('resize', function () { 
        //console.log('resize!!!' + $( window ).width()); 
        carousel.equalHeights(); 
    });

    $(carousel).on('resize', function () { 
        console.log('resize CAROUSEL!!!'); 
        carousel.equalHeights(); 
    });

});


   
