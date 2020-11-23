window.onload = function () {
    var images = document.querySelectorAll('.gallery-1 .photos img');
    var slider = new Slider(images);

    setInterval(function(){
        slider.prev();
    }, 1000);

    document.querySelector('.gallery-1 .buttons .prev').onclick = function(){
        slider.prev();
    }

    document.querySelector('.gallery-1 .buttons .next').onclick = function(){
        slider.next();
    }

}

function Slider(images) {
    this.images = images;
    var i = 0;

    this.prev = function () {
        this.images[i].classList.remove('showed');
        i--;

        if (i < 0) {
            i = this.images.length - 1;
        }

        this.images[i].classList.add('showed');
    }

    this.next = function () {
        this.images[i].classList.remove('showed');
        i++;

        if (i >= this.images.length) {
            i = 0;
        }

        this.images[i].classList.add('showed');
    }
}