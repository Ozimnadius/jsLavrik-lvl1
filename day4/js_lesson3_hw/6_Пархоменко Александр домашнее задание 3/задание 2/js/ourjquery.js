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

    this.fade = function fade(t, f){
        var time = t || 2000;
        var fps = f || 100;
        

        for (var i = 0; i<this.elements.length; i++){
            fade_action(this.elements[i], time, fps);    
        }
        
        
        return this;
    }
}

function fade_action (elem, t, f){
    var fps = f; 
    var time = t; 
    var steps = time / (1000/fps);   
    var op = 1;
    var d0 = op / steps;
    var tmp = 0;
    
    
        var timer = setInterval(function(){
            op -= d0;
            elem.style.opacity = op;
            steps--;
            if(steps == 0){
                clearInterval(timer);
                elem.style.display = 'none';
            }
        }, (1000 / fps));
    
    
}

