$(function () {

   var alignHeight = function(){
        var maxHeight = 0;


        $('.answer').each(function() {
            if ($(this).height() > maxHeight)
            {
                maxHeight = $(this).height();               
            }        
        });       

        $('.item').each(function() {
            $(this).css('height', maxHeight);            
        });        

        console.log(maxHeight);        
    }

    $('.mySlider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
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
      ]
    });




    alignHeight();
    $(window).resize(function(event) {
        alignHeight();
    });

});
