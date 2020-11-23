window.onload = function () {
    
    var slider_1 = new Slider({
        images: '.gallery-1 .photos img',
        btnPrev: '.gallery-1 .buttons .prev',
        btnNext: '.gallery-1 .buttons .next',
        auto: false
    });

    var slider_2 = new Slider({
        images: '.gallery-2 .photos img',
        btnPrev: '.gallery-2 .buttons .prev',
        btnNext: '.gallery-2 .buttons .next',
        auto: true
    });
}

function Slider(params) {
    
    if(!params) {
        console.log('не заданы параметры');
        return;
    }
    
    var allowed_params = 'images btnPrev btnNext auto';

    for(var prop in params) {
        if(allowed_params.indexOf(prop) != -1) {
            this[prop] = params[prop];
        }
    }
    
    if(!('images' in this)) {
        console.log('Забыл фотки :)');
        return;
    } else {
        this.images = document.querySelectorAll(this.images);
    }

    var images = this.images;
    var i = 0;  


    if('btnPrev' in this) {
        this.btnPrev = document.querySelector(this.btnPrev);
        this.btnPrev.onclick = showPrev;
    } 

    if('btnNext' in this) {
        this.btnNext = document.querySelector(this.btnNext);
        this.btnNext.onclick = showNext;
    }

    if(this.auto === true) {
        this.auto = setInterval(function() {
            showNext();
        }, 2000);
    }
    
    function showPrev() {
        images[i].classList.remove('showed');
        i--;

        if (i < 0) {
            i = images.length - 1;
        }

        images[i].classList.add('showed');
    }
    function showNext() {
        images[i].classList.remove('showed');
        i++;

        if (i >= images.length) {
            i = 0;
        }

        images[i].classList.add('showed');
    }
}