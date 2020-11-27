$(function(){
	
	var $page = $('html, body');
	
	/* плавный клик по ссылкам */
	
	$('nav a').on('click', function(){
		var selector = $(this).attr('href');
		var h = $(selector);
		
		$page.animate({
			scrollTop: h.offset().top - 85 
		}, 1000);
	});
	
	/* Реализация ДЗ со стрелками

	Есть проблема. Могу получить массив 
	var $arrows = $('.arrow-up, .arrow-down');
	Могу даже в консоль вывести $arrows[0] или $arrows[1],
	но подвесить на них событие .on не могу. Пишет про ошибку, но я не могу её понять.
	При этом на переменную $arrows событие .on подвешивается. 
	Поэтому пришлось вводить две отдельные переменные на каждую стрелку и 
	копипастить код.
	
	*/
	
	var $arrows = $('.arrow-up, .arrow-down');
	var $arrowUp = $('.arrow-up');
	var $arrowDown = $('.arrow-down');
	
	$(this).scroll(function(){
		if ($arrows.offset().top > 700){
			$arrows.css('opacity', '1');
		}
		else {
			$arrows.css('opacity', '0');
		};
	});
	
    $arrows.on('click', function(){
        var target = 0;
        
        if($(this).hasClass('arrow-down')){
            target = $(document).height();
        }
        
		$page.animate({
			scrollTop: target
		}, 1000);
	});
    
	/*$arrowUp.on('click', function(){
		$page.animate({
			scrollTop: 0
		}, 1000);
	});
	
	$arrowDown.on('click', function(){
		$page.animate({
			scrollTop: $(document).height()
		}, 1000);
	});*/
});