$(function(){

	$('.navigation a').on('click', function(e){
		e.preventDefault();

		var selector = $(this).attr('href');
		var section = $(selector);

		$('html, body').animate({
			scrollTop: section.offset().top - 68
			}, 400);
		})


	$('.btn-up').on('click', function(e){
		e.preventDefault();

		$('html, body').animate({
			scrollTop: 0
			}, 400);
		})

	scrolling();
	activeItemMenu();

	$(window).on('scroll', function(e){

			activeItemMenu();
			scrolling();

		});

	});



	function activeItemMenu(){
		$(".item").each(function () {
			var selector = $(this).attr('href');
			var section = $(selector);

			var windowTop = $(window).scrollTop();
			var sectionTop = section.offset().top;

				/*console.log(section.offset());
				console.log(windowTop);
				console.log(sectionTop);*/

			if(windowTop>sectionTop-150){
				$('.navigation a').removeClass('active').filter(this).addClass('active');
			};
		});
	};

	function scrolling(){
			if(scrollY > 100){
				$('.btn-up').slideDown(400);
			}
			else{
				$('.btn-up').slideUp(400)
			}
	};



