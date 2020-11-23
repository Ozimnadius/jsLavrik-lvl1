window.onload = function () {

    var slider = new Slider({
        images: '.gallery-1 img',
        btnPrev: '.gallery-1 .buttons .prev',
        btnNext: '.gallery-1 .buttons .next',
        auto: true, /**/
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
    var len = this.images.length;
    this.prev =  document.querySelector(gallary.btnPrev);
    this.next =  document.querySelector(gallary.btnNext);
    var i = 0; 
    

    if (this.images.length == 0) { alert('empty gallery!'); return; }

    if ( (!this.prev) && (!this.next)) { gallary.auto = true; }

    if (gallary.auto) {
        var t = gallary.t ? gallary.t : 1000;
        if ( this.prev ) { this.prev.classList.add('hide'); }
        if ( this.next ) { this.next.classList.add('hide'); }
        tick( gallary.t, function() {
            console.log('Круг замкнулся!');
        });
    }

      if ( this.prev ) {
        this.prev.onclick  = function () {
           move.call( document.querySelectorAll(gallary.images), -1);
        }   
    }

     if ( this.next ) {
        this.next.onclick = function () {
            move.call( document.querySelectorAll(gallary.images), 1);
        }
    }

    function move(direction) {
        //console.log(this);
        this[i].classList.remove('showed');

        if (direction > 0) { i++; }
        else { i--; }
 
        if ((direction > 0) && (i >= this.length)) {
            i = 0;
        }
        else if ((direction < 0) && (i < 0)) {
            i = this.length - 1;
        }

       this[i].classList.add('showed');
    }

    function tick(t, f) {
        var callback = f || function() {};
        //console.log(this);
        
        timer = setInterval(function() {
            move.call( document.querySelectorAll(gallary.images), 1 );
            if ( i == len-1 ) {
                callback();
            }
        }, t);
    }
   
}
