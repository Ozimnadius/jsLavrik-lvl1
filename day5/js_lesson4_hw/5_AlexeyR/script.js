$(function(){

	$('.question').on('click', function(){

		if(!$(this).hasClass('active')){
			$('.question').removeClass('active');
			$(this).addClass('active');

			$('.answer').slideUp();
			$(this).next().slideDown();
		}
		else{
			$(this).next().slideUp();
			$(this).removeClass('active');
		}
	});
});

$('.answer').hide()