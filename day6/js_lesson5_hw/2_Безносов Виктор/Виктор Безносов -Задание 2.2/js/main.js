$(function(){
	var i = 0;
	var animation = false; //Это для блокировки нажатия кнопок, пока идет анимация
	var images = '.photos img';

	$('.buttons .next').on('click' , function(){	
		
		if (!animation)
		{
			animation = true; //Блокируем кнопку
			$(images).eq(i).css({left: 0}).animate({
				width: 0
			}, 300);
			
			i++;
			if (i>=$(images).length)
			{
				i = 0;
			}

			$(images).eq(i).css({right: 0}).animate(
													{width: '100%'}, 
													300 , 
													function(){
														$(images).eq(i-1).css({left: 'auto'});	
														//Убираем свойство left: 0, а то порнография какая-то получается 
														animation = false;	
														//Снимаем блокировку с кнопки											
													});
		}
		
	});

	$('.buttons .prev').on('click' , function(){
		
		if (!animation)
		{
			animation = true; //Блокируем кнопку
			$(images).eq(i).css({right: 0}).animate({
				width: 0
			}, 300);

			i--;
			if (i<0)
			{
				i = $(images).length - 1;
			}

			$(images).eq(i).css({left: 0}).animate(
													{width: '100%'},
													300,
													function(){
														$(images).eq(i).css({left: 'auto'});
														//Убираем свойство left: 0, а то порнография какая-то получается 
														animation = false;	
														//Снимаем блокировку с кнопки
													});
		}

	});			
});