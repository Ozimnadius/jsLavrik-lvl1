$(function() {
	$('.question').on('click', function(){
		var current = $(this).next();
		current.slideToggle(1000);
		$('.answer').not(current).slideUp();
	});
});