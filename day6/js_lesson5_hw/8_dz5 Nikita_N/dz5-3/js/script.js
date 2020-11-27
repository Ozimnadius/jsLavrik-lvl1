$ (function (){

    var first = new Slider({
        images:'.gallery1 .photos img',
        btnPrev: '.gallery1 .prev',
        btnNext: '.gallery1 .next',
        auto:false,
        rate:500
    });

    var second = new Slider({
        images:'.gallery2 .photos img',
        btnPrev: '.gallery2 .prev',
        btnNext: '.gallery2 .next',
        auto:true,
        rate:2000
    });
});

function Slider(obj) {
    var sl = this;
    sl.images = $(obj.images);
    sl.btnPrev = obj.btnPrev;
    sl.btnNext = obj.btnNext;
    sl.auto = obj.auto;
    sl.rate = obj.rate || 1000;

    function move(direction){

        i+=direction;

        if (i>= sl.images.length){
            i=0;
        }

        else if (i < 0){
            i = sl.images.length - 1;
        }

    }

    var i=0;

    this.prev = function () {
        sl.images.eq(i).animate({
            left:1000
        },500).animate({
            opacity:0
        },700);


        move(1);

        //sl.images.eq(i).addClass('showed');

        sl.images.eq(i).css({left:-1000}).animate({
            opacity:1,
            left:0
        },500);


    };

    this.next = function () {

        sl.images.eq(i).animate({
            left:-1000
        },500).animate({
            opacity:0,
        },700);

        move(1);

        //sl.images.eq(i).addClass('showed');

        sl.images.eq(i).css({left:1000}).animate({
            opacity:1,
            left:0

        },500);

    };


    $(sl.btnPrev).on('click',function () {
       sl.prev();
    });

    $(sl.btnNext).on('click',function () {
        sl.next();
    });

    if (sl.auto){
        setInterval(sl.next,sl.rate);
    }
}