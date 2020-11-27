$(function(){

    var slider = new Slider({
        images: '.gallery-1 img',
        btnPrev: '.gallery-1 .buttons .prev',
        btnNext: '.gallery-1 .buttons .next',
        auto: true, 
        t: 500
    });

    slider.images[3].src = "img/1.jpg";

    var slider2 = new Slider({
        images: '.gallery-2 img',
        btnPrev: '.gallery-2 .buttons .prev',
        btnNext: '.gallery-2 .buttons .next',
        auto: false
    });
});


function Slider(gallary) {

    this.images = $(gallary.images); 
    this.next =  $(gallary.btnNext);
    this.prev =  $(gallary.btnPrev);
    var i = 0; 
    var len = this.images.length;
    var imgset = this.images; 

    this.prev.on( 'click', function () {
        move( imgset, -1);
    });   

    this.next.on('click', function () {
       move( imgset, 1);
     });


    function move(elem, direction) {
        $(elem).eq(i).fadeOut(1000);

        i += direction;
 
        if ((direction > 0) && (i >= elem.length)) {
            i = 0;
        }
        else if ((direction < 0) && (i < 0)) {
            i = elem.length - 1;
        }
       $(elem).eq(i).fadeIn(1000);
    }

    if (gallary.auto) {
        var t = gallary.t ? gallary.t : 1000;
        if ( this.prev ) { this.prev.addClass('hide'); }
        if ( this.next ) { this.next.addClass('hide'); }
        tick( gallary.t, function() {
            console.log('Круг замкнулся!');
        });
    }

    function tick(t, f) {
        var callback = f || function() {};
        
        timer = setInterval(function() {
            move( imgset, 1 );
            if ( i == len-1 ) {
                callback();
            }
        }, t);
    }

}