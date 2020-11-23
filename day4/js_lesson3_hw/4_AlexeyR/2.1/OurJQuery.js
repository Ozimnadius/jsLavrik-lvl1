function $(selector){
		var elements;
		if(selector instanceof HTMLElement){
			/* На самом деле не совсем правильно, потому что будет Array, а не NodeList */
			elements = [selector];
		}
		else{
		elements = document.querySelectorAll(selector);
	}
	return new OurJQuery(elements);
}

function OurJQuery(elements){
	this.elements = elements;

		this.on = function(eventname, f){
			for(var i = 0; i < this.elements.length; i++){
				this.elements[i].addEventListener(eventname, f);
			}

			return this;
		}

		this.fade = function(elem, t, f){
			for(var i = 0; i < this.elements.length; i++){
				this.elements[i] = fade(elem, t, f);
			}
			return this;
		}

		function fade(elem, t, f){
			var fps = 50;
			var time = t;
			var steps = time / fps;
			var op = 1;
			var d0 = op / steps;
			var callback = f|| function(){};

			var timer = setInterval(function(){
				op -= d0;
				elem.style.opacity = op;
				steps--;

				if(steps == 0){
					clearInterval(timer);
					elem.style.display = 'none';
					callback();
				}
			}, (1000 / fps));
		};
};

