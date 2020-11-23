window.onload = function () {
    var images = document.querySelectorAll('.gallery .photos img');
    var slider = new Slider(images);
    
    // Перелистываем слайдер каждую секунду по кругу 
    setInterval(function() {
        slider.next();
    }, 1000);
}

function Slider(images) {
    this.images = images;
    var i = 0;

    this.next = function () {
        this.images[i].classList.remove('showed');
        i++;

        if (i >= this.images.length) {
            i = 0;
        }

        this.images[i].classList.add('showed');
    }
}