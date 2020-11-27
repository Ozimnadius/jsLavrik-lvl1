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

        sl.images.eq(i).css({'left':'inherit','top':'inherit','right':'0','bottom':'0'}).animate({
            width:0,
            opacity:0
        },600);

        move(-1);

        sl.images.eq(i).css({'bottom':'inherit','right':'inherit','left':'0','top':'0'}).animate({
            width:'100%',
            opacity:1
        },600);

    };

    this.next = function () {

        sl.images.eq(i).css({'left':'0','top':'0'}).animate({
            width:0,
            opacity:0
        },600);

        move(1);

        sl.images.eq(i).css({'top':'inherit','left':'inherit','right':'0','bottom':'0'}).animate({
            width:'100%',
            opacity:1
        },600);

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