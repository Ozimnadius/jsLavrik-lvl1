function $(selector){
    var elements = document.querySelectorAll(selector);
    return new OurJquery(elements);
}

function OurJquery(elements){
    
    this.elements = elements;
    
}

/* Так, наверное, меньше памяти в оперативке занимает */

OurJquery.prototype = {
    
    on: function(eventname, f){
        for(var i = 0; i < this.elements.length; i++){
            this.elements[i].addEventListener(eventname, f);
        }
        return this;
    },
    
	addClass: function(name){
		for(var i = 0; i < this.elements.length; i++){
            this.elements[i].classList.add(name);
        }
        return this;
    },
    
    removeClass: function(name){
        for(var i = 0; i < this.elements.length; i++){
            this.elements[i].classList.remove(name);
        }
        return this;
    },
    
    html: function(html){
        if(typeof(html) === "undefined"){
            return this.elements[0].innerHTML;
        }
        for(var i = 0; i < this.elements.length; i++){
            this.elements[i].innerHTML = html;
        }
        return this;
    },
	
	fade: function(t){
		for(var i = 0; i < this.elements.length; i++){
		     this.elements[i].addEventListener('click', function(){
				var self = this;
				var fps = 30; 
				var time = t || 500; 
				var steps = time / fps;   
				var op = 1;
				var d0 = op / steps; 
				var timer = setInterval(function(){
					op -= d0;
					self.style.opacity = op;
					steps--;
						if(steps <= 0){
						  clearInterval(timer);
						  self.style.display = 'none';
						}
				}, (1000 / fps));
				}
			);
		}
        return this;
	},

	open: function(context){
		for(var i = 0; i < this.elements.length; i++){
            this.elements[i].addEventListener('click', function(){
				var self = this;
				var popOverlay = document.createElement('div');
				var popUp = document.createElement('div');
				document.body.insertBefore(popOverlay, document.body.firstChild);
				document.body.insertBefore(popUp, document.body.firstChild);
				popOverlay.style.cssText = 'position: fixed; \
											top: 0; \
											left: 0; \
											width: 100%; \
											height: 100%; \
											background: rgba(8, 8, 8, 0.5); \
											z-index: 1; \
											cursor: pointer;';
				popUp.innerHTML = context;
				popUp.style.cssText = 'position: fixed; \
										top: 30%; \
										left: 40%; \
										min-width: 100px; \
										max-width: 400px; \
										background: rgba(255, 255, 255, 1); \
										z-index: 2; \
										padding: 15px;';
				popOverlay.addEventListener('click', function(){
					document.body.removeChild(popOverlay);
					document.body.removeChild(popUp);
				});
			});
		}
        return this;
	}
}

      
	

