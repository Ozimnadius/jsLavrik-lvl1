(function(){

	window.myTimer = function(elem,time){

		var myElem = document.querySelector(elem);
		var myTime = time;
		var context = this;

		context.start = function(){
			myElem.innerHTML = oninit(myTime);
			var counter = setInterval(function(){	
				myElem.innerHTML = oninit(ontick());	
				if (myTime <= 0)
				{
					clearInterval(counter);
					context.stop();
				}			
			},1000)	;			
		}

		context.stop = function(){
			myTime = 0;
			myElem.innerHTML = onend();
		}

		var oninit = function(data){

			var myDay = parseInt(data/86400);
			var myDayStr = myDay + '';
			var myHour = parseInt(data%86400/3600);
			var myHourStr = myHour + '';
			var myMinute = parseInt(data%86400%3600/60);	
			var myMinuteStr = myMinute + '';
			var mySecond = parseInt(data%86400%3600%60);
			var mySecondStr = mySecond + '';

			/* --------------------------------------- Склоняем дни ------------------------------------------------------*/	
			if (myDayStr == '0')
			{
				myDayStr = '';
			}
			else if (myDayStr == '1' || myDayStr == '21')
			{
				myDayStr = myDayStr + ' день';
			}
			else if ((parseInt(myDayStr) >= 2 && parseInt(myDayStr) <= 4) || (parseInt(myDayStr) >= 22 && parseInt(myDayStr) <= 24))
			{
				myDayStr = myDayStr + ' дня';
			}
			else
			{
				myDayStr = myDayStr + ' дней';
			}

			/* --------------------------------------- Склоняем часы ------------------------------------------------------*/	
			if (myHourStr == '0')
			{
				myHourStr = '';
			}
			else if (myHourStr == '1' || myHourStr == '21')
			{
				myHourStr = myHourStr + ' час';
			}
			else if ((parseInt(myHourStr) >= 2 && parseInt(myHourStr) <= 4) || (parseInt(myHourStr) >= 22 && parseInt(myHourStr) <= 24))
			{
				myHourStr = myHourStr + ' часа';
			}
			else
			{
				myHourStr = myHourStr + ' часов';
			}

			/* --------------------------------------- Склоняем минуты ----------------------------------------------------*/
			if (myMinuteStr == '0')
			{
				myMinuteStr = '';
			}
			else if (parseInt(myMinuteStr[myMinuteStr.length-1]) == 1 && myMinuteStr != '11')
			{
				myMinuteStr = myMinuteStr + ' минута';
			}
			else if ((parseInt(myMinuteStr[myMinuteStr.length-1]) >= 2 && parseInt(myMinuteStr[myMinuteStr.length-1]) <= 4) 
				  && !(parseInt(myMinuteStr) >= 12 && parseInt(myMinuteStr) <= 14))
			{
				myMinuteStr = myMinuteStr + ' минуты';
			}
			else
			{
				myMinuteStr = myMinuteStr + ' минут';
			}

			/* ---------------------------------------- Склоняем секунды ---------------------------------------------------*/
			if (mySecondStr == '0')
			{
				mySecondStr = '';
			}
			else if (parseInt(mySecondStr[mySecondStr.length-1]) == 1 && mySecondStr != '11')
			{
				mySecondStr = mySecondStr + ' секунда';
			}
			else if ((parseInt(mySecondStr[mySecondStr.length-1]) >= 2 && parseInt(mySecondStr[mySecondStr.length-1]) <= 4) 
				  && !(parseInt(mySecondStr) >= 12 && parseInt(mySecondStr) <= 14))
			{
				mySecondStr = mySecondStr + ' секунды';
			}
			else
			{
				mySecondStr = mySecondStr + ' секунд';
			}

			return 'Осталось ' + myDayStr+ ' ' + myHourStr + ' ' + myMinuteStr + ' ' + mySecondStr;

		}

		var ontick = function(){
			return --myTime;
		}

		var onend = function(){
			return 'Время вышло';
		}

	}

})()


