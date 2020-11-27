$(function() {
	
	//alert("Документ доступен для выполнения скриптов");	
	function checkPosition(event){
		
		var top = $(document).scrollTop();//or $(this)
		//console.log(top +'px');
		if (top > 0) {
			
			//console.log('>1');
			$('.to-top').fadeIn(1600);//if stop(true, true) появляется резко
			$('.top-title').stop(true, true).slideUp(300);
		} else if (top < 1) {
			//console.log('<1');
			$('.to-top').stop(true, true).fadeOut(1600);
			$('.top-title').stop(true, true).slideDown(300).delay(1000).slideUp(300);	
		}	
				
	}
	
	$(window).on('scroll', checkPosition);//or document or document.body
		
	/*function returnPosition(){
		console.log('return position');
		$(this).css({
			position: 'fixed',
			bottom: '100px',//100px
			opacity: ''
		})
	}*/
	function deleteAttrAfterAnimate(){
		$(this).removeAttr('style');		
	}
		
	function moveToTop(){
		//console.log('click on the button');
		$('html, body').animate({scrollTop: 0}, 1500);
	}
	function liftButton(){
		$('.to-top').animate({
			bottom: '3000px',
			opacity: '0'
		}, 1500, deleteAttrAfterAnimate);//было returnPosition
		
	}
	$('.to-top').on('click', liftButton);
	$('.to-top').on('click', moveToTop);
		
	//Проверка отображения кнопки при обновлении страницы и положении внизу
	$(window).on('keydown keyup', this, function (event) {//если пишу 'load' здесь, не срабатывает наверное из-за 'this'
		if (event.keyCode == 116 || event.which == 116) {
			console.log('F5 pressed!');
			checkPosition();
		}
	
	});
	window.onload = checkPosition();//работает
	
	//$(window).on('load', checkPosition);//не работает
});

