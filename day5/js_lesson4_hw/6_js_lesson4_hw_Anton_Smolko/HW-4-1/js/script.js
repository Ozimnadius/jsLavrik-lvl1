$(function() {
	$('.faq__item').on('click', function() {
		$(this).children('.faq__answer').slideToggle();
		$('.faq__item').not(this).children('.faq__answer').slideUp();
	});
});