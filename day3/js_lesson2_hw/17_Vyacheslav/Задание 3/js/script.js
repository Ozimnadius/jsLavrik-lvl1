window.onload = function () {
    
    var slider = new Slider({
        images: '.gallery-1 .photos img',
        btnPrev: '.gallery-1 .buttons .prev',
        btnNext: '.gallery-1 .buttons .next',
        auto: false
    });

    var slider2 = new Slider({
        images: '.gallery-2 .photos img',
        /*btnPrev: '.gallery-2 .buttons .prev',
        btnNext: '.gallery-2 .buttons .next',*/
        auto: true
    });
    
}

function Slider(obj) {
    console.log(obj.images);

    this.images = document.querySelectorAll(obj.images);
    this.prev = document.querySelector(obj.btnPrev) || false;
    this.next = document.querySelector(obj.btnNext) || false;

    var context = this;

    var i = 0;

    this.prev.onclick = prevImg;

    function prevImg() {
        context.images[i].classList.remove('showed');
        i--;

        if (i < 0) {
            i = context.images.length - 1;
        }

        context.images[i].classList.add('showed');
    }

    this.next.onclick = nextImg;

    function nextImg() {
        context.images[i].classList.remove('showed');
        i++;

        if (i >= context.images.length) {
            i = 0;
        }

        context.images[i].classList.add('showed');
    }

    if(obj.auto && (this.next == false)){
        setInterval(nextImg.bind(this), 1000);
    }
}
