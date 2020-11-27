$(function() {
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false,
            loop:false
        },
        1000:{
            items:5,
            nav:true,
            loop:false
        }
    }
});

var max_height = 0;
function dynamic_height() {
	$('.answer').each(function() {
		var this_height = $(this).height();
		if (this_height > max_height) {
			max_height = this_height + $(this).prev().height();
		}
	});
	$('.item').height(max_height);
	max_height = 0;
}
dynamic_height();
$(window).resize(dynamic_height);
});