function $(selector){
	var elements;
	
	if(selector instanceof HTMLElement){
		/* На самом деле не совсем правильно, потому что будет Array, а не NodeList */
		elements = [selector];
	}
	else{
		elements = document.querySelectorAll(selector);
	}
	
    return new OurJquery(elements);
}

function OurJquery(elements){
    
    this.elements = elements;
    
    this.on = function(eventname, f){
        for(var i = 0; i < this.elements.length; i++){
            this.elements[i].addEventListener(eventname, f);
        }
        return this;
    }
    
    this.fade = function(t, f, fun){
        for(var i = 0; i < this.elements.length; i++){
            var current_element = this.elements[i];
            fade(current_element, t, f, fun);
        }
        return this;
    }
    
    
    function fade(elem, t, f, fun){
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
                fun();
            }
           
        }, (1000 / fps));
        
    }
    
}