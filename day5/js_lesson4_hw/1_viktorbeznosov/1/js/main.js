$(function(){
	$('.extend').hide();
	$('.open').on('click' , function(){
		$(this).parent().children('.extend').slideToggle();
		$('.open').not(this).parent().children('.extend').slideUp();
	});
});