function $(selector){
    var elements = document.querySelectorAll(selector);
    return new OurJquery(elements);
}

function OurJquery(elements){
    
    this.elements = elements;
   
    /**
     * Подвесить любое событие на группу элементов
     * @param string eventname Тип события
     * @param callable f Функция обработчик
     * @returns self Текущий объект
     */
    this.on = function(eventname, f){
        for(var i = 0; i < this.elements.length; i++){
            this.elements[i].addEventListener(eventname, f);
        }
        
        return this;
    }
    
    this.addClass = function(name){
        for(var i = 0; i < this.elements.length; i++){
            this.elements[i].classList.add(name);
        }
        
        return this;
    }
    
    this.removeClass = function(name){
        for(var i = 0; i < this.elements.length; i++){
            this.elements[i].classList.remove(name);
        }
        
        return this;
    }
    
    this.html = function(html){
        if(typeof(html) === "undefined"){
            return this.elements[0].innerHTML;
        }
        
        for(var i = 0; i < this.elements.length; i++){
            this.elements[i].innerHTML = html;
        }
        
        return this;
    }
	

	
	this.fade = function(t, c) {
		var elem = this.elements;
		var time = t || 500; 
		var callback = c || function(){};
		
		var fps = 50; 
		var steps = time / fps;   
		var op = 1;
		var d0 = op / steps;
		
		var timer = setInterval(function(){
			op -= d0;
			for(var i = 0; i < elem.length; i++){
				elem[i].style.opacity = op;
			}
			steps--;
					
			if(steps <= 0){
				clearInterval(timer);
				for(var i = 0; i < elem.length; i++){
					elem[i].style.opacity = 0;
					elem[i].style.display = 'none';
				}
				callback();
			}
		}, (1000 / fps));
				
		return this;
	}
	
	
	
	this.show = function(t, c) {
		var time = t || 500; 
		var callback = c || function(){};
		var elem = this.elements;
		
		var fps = 50; 
		var steps = time / fps;   
		var op = 0;
		var d0 = 1 / steps;
		
		var timer = setInterval(function(){
			op += d0;
			for(var i = 0; i < elem.length; i++){
				elem[i].style.opacity = op;
				elem[i].style.display = 'block';
			}
			steps--;
					
			if(steps <= 0){
				clearInterval(timer);
				for(var i = 0; i < elem.length; i++){
					elem[i].style.opacity = 1;
					elem[i].style.display = 'block';
				}
			callback();
			  
			}
		}, (1000 / fps));
		
		return this;
	}
	

	
/*	function fade(elem, t, f){
  // кадров в секунду (по умолчанию 50)
  var fps = f || 50; 
  // время работы анимации (по умолчанию 500мс)
  var time = t || 500; 
  // сколько всего покажем кадров
  var steps = time / fps;   
  // текущее значение opacity - изначально 0
  var op = 1;
  // изменение прозрачности за 1 кадр
  var d0 = op / steps;
  
  // устанавливаем интервал (1000 / fps) 
  // например, 50fps -> 1000 / 50 = 20мс  
  var timer = setInterval(function(){
    // уменьшаем текущее значение opacity
    op -= d0;
    // устанавливаем opacity элементу DOM
    elem.style.opacity = op;
    // уменьшаем количество оставшихся шагов анимации
    steps--;
    
    // если анимация окончена
    if(steps == 0){
      // убираем интервал выполнения
      clearInterval(timer);
      // и убираем элемент из потока документа
      elem.style.display = 'none';
    }
  }, (1000 / fps));
}*/
	
	
}