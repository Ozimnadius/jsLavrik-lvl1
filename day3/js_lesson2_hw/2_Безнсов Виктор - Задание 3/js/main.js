window.onload = function(){

	function Slider(obj){

		var images = document.querySelectorAll(obj.images);
		this.buttonNext = document.querySelector(obj.btnNext);
		this.buttonPrev = document.querySelector(obj.btnPrev);
		var auto = obj.auto;
		
		var i = 0;

		this.prev = function(){
			images[i].className = '';		
			i--;
			if (i < 0)
			{
				i = images.length - 1;
			}
			images[i].className = 'showed';			
		}
		this.next = function(){
			images[i].className = '';
			i++;
			if (i >= images.length)
			{
				i = 0;
			}
			images[i].className = 'showed';	
		}

		this.carusel = function(){
			
			var count = 0;
			var timer = setInterval(function(){

				images[count].className = '';
				count++;
				if (count >= images.length)
				{
					count = 0;		
				}
				images[count].className = 'showed';	

			},1000);
			
		}

		if (!auto)
		{
			this.buttonPrev.onclick = this.prev;
			this.buttonNext.onclick = this.next;
		}
		else
		{
			this.carusel();
		}
	}

	var slider1 = new Slider({
		images: '.gallery1 .photos .img1',
		btnPrev: '.gallery1 .buttons .prev1',
		btnNext: '.gallery1 .buttons .next1',
		auto: false		
	})

	var slider2 = new Slider({
		images: '.gallery2 .photos .img2',
		btnPrev: '.gallery2 .buttons .prev2',
		btnNext: '.gallery2 .buttons .next2',
		auto: true		
	})
}