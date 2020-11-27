$(function() {
	
    var MyTimer = new MyTimer({
		timeEnd: '2017-04-28T23:47:35+03:00', // дата окончания акции в формате YYYY-MM-DDThh:mm:ss (+hh:mm)
		elem: '.timer div span:first-child'
		
	});
	
	MyTimer.start();
		
	function MyTimer(time) {
		
		this.dataEnd = new Date(time.timeEnd);
		this.elem = $(time.elem);
		this.elemW = $(this.elem.next());
		var timer = this;
		var timeInt;
		var number; // для склонения слов
		var timeTotal = Date.parse(timer.dataEnd) - Date.parse(new Date());;
				
		this.start = function() {
			
			if (timeTotal < 0) { 
				timer.end();
				}
			else { 
				ontick();
				timeInt = setInterval(ontick,1000);
				}
		};
		
		
		function getWordEnd(number, word1, word2, word3) {
			
			number = number % 100;
			if(number > 10 && number < 20) {number = word1;}
			else {
				number = number % 10;
				switch(number) {
					case 1: 
						number = word2;
						break;
					case 2:
					case 3:
					case 4:
						number = word3;
						break;
					case 0:
					case 5:
					case 6:
					case 7:
					case 8:
					case 9:
						number = word1;
						
				}
			}
			
			return number;
		}
				
		function ontick() {
			timeTotal = Date.parse(timer.dataEnd) - Date.parse(new Date());
			
			var seconds = Math.floor((timeTotal/1000) % 60 );
			var minutes = Math.floor((timeTotal/1000/60) % 60 );
			var hours = Math.floor((timeTotal/(1000*60*60)) % 24 );
			var days = Math.floor(timeTotal/(1000*60*60*24));
			
			timer.elem.eq(0).html(days); 
			timer.elem.eq(1).html(hours);
			timer.elem.eq(2).html(minutes);
			timer.elem.eq(3).html(seconds);
			
				
			seconds = getWordEnd(seconds, 'секунд', 'секунда', 'секунды');
			minutes = getWordEnd(minutes, 'минут', 'минута', 'минуты');
			hours = getWordEnd(hours, 'часов', 'час', 'часа');
			days = getWordEnd(days, 'дней', 'день', 'дня');
			
			timer.elemW.eq(0).html(days);
			timer.elemW.eq(1).html(hours);
			timer.elemW.eq(2).html(minutes);
			timer.elemW.eq(3).html(seconds);
			
			if(timeTotal <= 0){
				clearInterval(timeInt);
				timer.end();
			}
		};
		
		this.end = function() {
			$('.timer').html('конец акции');
		}
	};
	
	
	
});
	

