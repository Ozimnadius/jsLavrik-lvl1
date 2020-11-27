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

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        onInitialized: function(){
            alignHeight();
        },
        onResized: function(){
            alignHeight();
        },
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });

    // $('.owl-carousel').owlCarousel().on('resized.owl.carousel', function(event) {       
    //     alignHeight();
    // }) 

});
