window.onload = function(){
	$('.item').on('click', function(){
		$(this).fade(this, 4000, function(){
				alert(1)
				});
	});

}




