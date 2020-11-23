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
    this.hasClass = function(name){
        var flag = false;
        for(var i = 0; i < this.elements.length; i++){
            if (this.elements[i].classList.contains(name)) {flag = true}
        }
        
        return flag;
    }
    this.blurUnder = function(name){
        for(var i = 0; i < (this.elements.length-2); i++){
            this.elements[i].classList.add(name);
        }
        
        return this;
    }

    this.css = function(name, value){
        for(var i = 0; i < this.elements.length; i++){
            this.elements[i].style.cssText += name +':' + value;
        }
        
        return this;
    }

    this.disable = function(){
        for(var i = 0; i < this.elements.length; i++){
            this.elements[i].disabled = true;
        }
        
        return this;
    }
    this.enable = function(){
        for(var i = 0; i < this.elements.length; i++){
            this.elements[i].disabled = false;
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

    this.addElement = function(newtags, newclass){
        for(var i = 0; i < this.elements.length; i++){
            var el =  document.createElement( newtags );
            el.className = newclass;
            elements[i].appendChild(el);
        }
        
       return this;
    }
}