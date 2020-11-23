window.onload = function () {

    var slider = new Slider({
        images: '.gallery-1 img',
        btnPrev: '.gallery-1 .buttons .prev',
        btnNext: '.gallery-1 .buttons .next',
        auto: false, /**/
        t: 500
    });

    var slider2 = new Slider({
        images: '.gallery-2 img',
        btnPrev: '.gallery-2 .buttons .prev',
        btnNext: '.gallery-2 .buttons .next',
        auto: false
    });

}

function Slider(gallary) {

    this.images = document.querySelectorAll(gallary.images);
    var len = this.images.length;
    this.prev =  document.querySelector(gallary.btnPrev);
    this.next =  document.querySelector(gallary.btnNext);
    var i = 0; 
    
    var imgset = this.images;
    console.log('111   ' +  imgset);

    this.prev.onclick  = function () {
           move( imgset, -1);
    }   

    this.next.onclick = function () {
            move( imgset, 1);
        }

    function move(elem, direction) {
        console.log(elem);
        elem[i].classList.remove('showed');

        if (direction > 0) { i++; }
        else { i--; }
 
        if ((direction > 0) && (i >= elem.length)) {
            i = 0;
        }
        else if ((direction < 0) && (i < 0)) {
            i = elem.length - 1;
        }

       elem[i].classList.add('showed');
    }

}
