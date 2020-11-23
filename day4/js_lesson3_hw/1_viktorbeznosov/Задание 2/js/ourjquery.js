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

    this.fade = function(f,t){

      var callback = f || function(){}
      var i; //сделал счетчик видимым внутри функции fadeElem
      var limit = this.elements.length - 1;
      
      var time = t || 500; 

          function fadeElem(elem, time){         
            var count = i;   //сделал счетчик видимым внутри функции setInterval  
            var fps = 50;         
            var steps = time / fps;        
            var op = 1;       
            var d0 = op / steps;              
    
            var timer = setInterval(function(){            
              op -= d0;           
              elem.style.opacity = op;           
              steps--;   

              if(steps < 0)
              // Здесь поставил условие (steps < 0) вместо (steps == 0), что бы callback() не срабатывал до того, как divы погаснут
              {              
                clearInterval(timer);              
                elem.style.display = 'none';                            
                if (count == limit)
                //Честно говоря, вообще не понял, как оно работает!!!   
                //Тут вместо limit можно ставить любое число от 0 до elements.length - 1
                //И все будет работать
                  {  
                      callback();
                  }
              }             
            }, (1000 / fps)); 
          }

          for(i = 0; i < this.elements.length; i++){
              fadeElem(this.elements[i] , time);
          }  


          return this;     
    }

}