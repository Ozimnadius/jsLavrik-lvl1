window.onload = function(){

    var btn_prev = document.querySelector('.gallery .buttons .prev');
    var btn_next = document.querySelector('.gallery .buttons .next');
    var images = document.querySelectorAll('.gallery .photos img');
    var slider = new slider(images); 

    btn_prev.onclick = function() {
        slider.prev();
    }

    btn_next.onclick = function() {
        slider.next();
    }
       
    var timerId = setInterval(function() {
        slider.next();    
    }, 1000);


function slider(images) {
    this.images = images;
    var i = 0;

    this.prev = function() {
        this.images[i].classList.remove('showed');
        i--;
         
        if(i < 0){
            i = this.images.length - 1;
        }
         
        this.images[i].classList.add('showed');    
    }

    this.next = function() {
        this.images[i].classList.remove('showed');
        i++;
         
        if(i >= this.images.length){
            i = 0;
        }
         
        this.images[i].classList.add('showed');    
    }
}
}