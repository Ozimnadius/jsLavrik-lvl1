$(function(){
	$('.question').on('click', function() {
		$('.answer').slideUp();
		$(this).next().slideDown();
	});
});