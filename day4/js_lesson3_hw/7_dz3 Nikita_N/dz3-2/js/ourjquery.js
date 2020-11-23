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
    };
    
    this.addClass = function(name){
        for(var i = 0; i < this.elements.length; i++){
            this.elements[i].classList.add(name);
        }
        
        return this;
    };
    
    this.removeClass = function(name){
        for(var i = 0; i < this.elements.length; i++){
            this.elements[i].classList.remove(name);
        }
        
        return this;
    };
    
    this.html = function(html){
        if(typeof(html) === "undefined"){
            return this.elements[0].innerHTML;
        }
        
        for(var i = 0; i < this.elements.length; i++){
            this.elements[i].innerHTML = html;
        }
        
        return this;
    };


    this.fade = function (time,fps) {
        var fd = this;
        fd.fps = fps || 50;
        fd.time = time ||500;
        var steps = fd.time / fd.fps;
        var op = 1;
        var d0 = op / steps;

        var timer = setInterval(function(){
            // уменьшаем текущее значение opacity
            op -= d0;

            // уменьшаем количество оставшихся шагов анимации
            steps--;

            for(var i = 0; i < fd.elements.length; i++){
                // устанавливаем opacity элементу DOM
                fd.elements[i].style.opacity = op;

                // если анимация окончена
                if(steps <= 0){
                    // убираем интервал выполнения
                    clearInterval(timer);
                    // и убираем элемент из потока документа
                    fd.elements[i].style.display = 'none';
                }
            }
        }, (1000 / fd.fps));

            return this;
    };

    this.show = function (time,fps) {
        var fd = this;
        fd.fps = fps || 50;
        fd.time = time ||500;
        var steps = fd.time / fd.fps;
        var op = 0;
        var d0 = 1/ steps;

        var timer = setInterval(function(){
            // уменьшаем текущее значение opacity
            op += d0;

            // увеличиваем количество шагов
            steps++;

            for(var i = 0; i < fd.elements.length; i++){

                // ставим элемент в поток документа
                fd.elements[i].style.display = 'block';
                // устанавливаем opacity элементу DOM
                fd.elements[i].style.opacity = op;

                // если анимация окончена
                if(op > 1){
                    // убираем интервал выполнения
                    clearInterval(timer);
                }
            }
        }, (1000 / fd.fps));

        return this;
    };

}



