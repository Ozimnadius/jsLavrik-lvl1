function setTimer(obj) {
	this.element = obj.element || 'body';
	this.time = obj.time || 36804;
	var timer = this;
	var clock = ["hours", "minutes", "seconds"];
	for (var i = 0; i < clock.length; i++) {
		$(timer.element).append('<span class=' + clock[i] + '>');
	}

	setInterval(function() {
		var hours = $('.hours');
		var minutes = $('.minutes');
		var seconds = $('.seconds');

		var unit = getUnit(timer.time);

		hours.text(unit[0] + ' час' + unitEndingWriten(getUnit(timer.time)[0], 'hour'));
		minutes.text(unit[1] + ' минут' + unitEndingWriten(getUnit(timer.time)[1], 'min'));
		seconds.text(unit[2] + ' секунд' + unitEndingWriten(getUnit(timer.time)[2], 'sec'));

		timer.time--;

	}, 1000);

	function getUnit(time) {
		var hours = parseInt(time / 3600);
		var minutes = parseInt((time % 3600) / 60);
		var seconds = (time % 3600) % 60;
		return [unitFormatting(hours), unitFormatting(minutes), unitFormatting(seconds)];
	}

	function unitFormatting(unit) {
		return ("00" + unit).slice( String(unit).length );
	}

	function unitEndingWriten(time, unit) {
		var result;
		if (time == 1 || ((time != 11) && (time % 10 == 1)) ) {
			return (unit == 'hour') ? '' : 'а';
		}  else if ( (time % 10 == 0) || (time % 10 >= 5) || (time >= 5 && time <= 14) ) {
			return (unit == 'hour') ? 'ов' : '';
		} else {
			return (unit == 'hour') ? 'а' : 'ы';
		}
	}
}

$(function() {

	var timer = new setTimer({
		element: '.task',
		time: 5422
	});

});