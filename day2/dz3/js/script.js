window.onload = function () {

    var slider = new Slider({
        images: '.gallery-1 .photos img',
        prev: '.gallery-1 .buttons .prev',
        next: '.gallery-1 .buttons .next',
        autoplay: false
    });

    var slider2 = new Slider({
        images: '.gallery-2 .photos img',
        prev: '.gallery-2 .buttons .prev',
        next: '.gallery-2 .buttons .next',
        autoplay: true
    });
};

function Slider(settings) {
    this.images = document.querySelectorAll(settings.images);
    this.prevBtn =  document.querySelector(settings.prev);
    this.nextBtn =  document.querySelector(settings.next);
    this.autoplay = settings.autoplay;

    var i = 0;

    this.prev = function () {
        this.images[i].classList.remove('showed');
        i--;

        if (i < 0) {
            i = this.images.length - 1;
        }

        this.images[i].classList.add('showed');
    };

    this.next = function () {
        this.images[i].classList.remove('showed');
        i++;

        if (i >= this.images.length) {
            i = 0;
        }
        this.images[i].classList.add('showed');
    };

    this.prevBtn.addEventListener('click',()=>this.prev());

    this.nextBtn.addEventListener('click', ()=>this.next());


    if (this.autoplay ){
        setInterval(() => this.next(), 3000);
    }

}