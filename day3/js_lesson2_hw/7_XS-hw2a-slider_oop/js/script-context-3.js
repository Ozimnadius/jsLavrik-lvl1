window.onload = function () {

    var slider = new Slider({
        images: '.gallery-1 img',
        btnPrev: '.gallery-1 .buttons .prev',
        btnNext: '.gallery-1 .buttons .next',
        auto: false, /**/
        t: 500
    });

    slider.images[3].src = "img/1.jpg";
    console.log( slider.images[3].src );

    var slider2 = new Slider({
        images: '.gallery-2 img',
        btnPrev: '.gallery-2 .buttons .prev',
        btnNext: '.gallery-2 .buttons .next',
        auto: false
    });

}

function Slider(gallary) {

    this.images = document.querySelectorAll(gallary.images);
    this.prev =  document.querySelector(gallary.btnPrev);
    this.next =  document.querySelector(gallary.btnNext);
    
    var mover = new move(this.images);

    this.prev.onclick  = function () {
        mover.step(-1);
    }   

    this.next.onclick = function () {
        mover.step(1);
    }

    function move(imset) {
        var i = 0; 
        this.imset = imset;
        //console.log(this.imset);

        this.step = function(direction) {
            this.imset[i].classList.remove('showed');

            if (direction > 0) { i++; }
            else { i--; }
     
            if ((direction > 0) && (i >= this.imset.length)) {
                i = 0;
            }
            else if ((direction < 0) && (i < 0)) {
                i = this.imset.length - 1;
            }

           this.imset[i].classList.add('showed');
        }
        
    }

}
