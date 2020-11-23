function OurJquery(elements) {
	// this.elements = elements;
	this.elements = document.querySelectorAll(elements);

	this.on = function(eventname, f) {
		for ( var i = 0; i < this.elements.length; i++) {
			this.elements[i].addEventListener(eventname, f);
		}
	}

	this.hide = function(t) {
		var fps = 50;
		var time = t || 500;
		var steps = time / fps;
		var op = 1;
		var dO = op / steps;
		var elements = this.elements;
		var timer = setInterval(function() {
			op -= dO;
			for ( var i = 0; i < elements.length; i++) {
				elements[i].style.opacity = op;
			}
			steps--;
			if(steps === 0) {
				clearInterval(timer);
				for ( var i = 0; i < elements.length; i++) {
					elements[i].style.display = 'none';
				}
			}
		}, (1000 / fps));
	}

	this.show = function(t) {
		var fps = 50;
		var time = t || 500;
		var steps = time / fps;
		var op = 0;
		var dO = 1 / steps;
		var elements = this.elements;
		for ( var i = 0; i < elements.length; i++) {
			elements[i].style.display = 'block';
		}
		var timer = setInterval(function() {
			op += dO;
			for ( var i = 0; i < elements.length; i++) {
				elements[i].style.opacity = op;
			}
			steps--;
			if(steps === 0) {
				clearInterval(timer);
			}
		}, (1000 / fps));
	}
}

function popUp(obj) {
	this.text = obj.text;
	this.modal = document.querySelector(obj.modal);

	var body = document.querySelector('body');
	var panel = document.createElement('div');
	var overlay = document.createElement('div');

	panel.className = 'panel';
	overlay.className = 'overlay';

	if (!document.querySelector('.panel')) {
		body.appendChild(panel);
		body.appendChild(overlay);
	}	

	panel = document.querySelector('.panel');
	overlay = document.querySelector('.overlay');

	this.open = function() {
		panel.style.display = 'block';
		overlay.style.display = 'block';
		panel.innerHTML = this.text;
		var panelWidth = panel.offsetWidth;

		var panelHeight = panel.offsetHeight;
		var panelLeft = ( document.body.clientWidth - panelWidth ) / 2;
		var panelTop = ( document.body.clientHeight - panelHeight ) / 2;
		panel.style.top = panelTop + 'px';
		panel.style.left = panelLeft + 'px';
	}
	this.close = function() {
		panel.style.display = 'none';
		overlay.style.display = 'none';
		panel.innerHTML = '';
	}
	var popUp = this;
	this.modal.onclick = function() {
		popUp.open();
	}
	overlay.onclick = function() {
		popUp.close();
	}
}

window.onload = function(e) {
	var modal1 = new popUp({
		text: 'Задание №1',
		modal: '.btn1'
	});

	var modal2 = new popUp({
		text: 'Задание №1 Задание №1 Задание №1',
		modal: '.btn2'
	});

	var btn3 = new OurJquery('.btn3');
	var btn4 = new OurJquery('.btn4');
	var square = new OurJquery('.square');

	btn3.on('click', function() {
		square.hide();
	})

	btn4.on('click', function() {
		square.show();
	})
};