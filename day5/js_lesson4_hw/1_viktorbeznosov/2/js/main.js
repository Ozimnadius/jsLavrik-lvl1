$(function(){
	var i = 0;

	$('.buttons .next').on('click' , function(){
		$('.photos img').eq(i).removeClass('showed');
		i++;
		if (i>=$('.photos img').length)
		{
			i = 0;
		}
		$('.photos img').eq(i).addClass('showed');
	});

	$('.buttons .prev').on('click' , function(){
		$('.photos img').eq(i).removeClass('showed');
		i--;
		if (i<0)
		{
			i = $('.photos img').length - 1;
		}
		$('.photos img').eq(i).addClass('showed');
	});			
});