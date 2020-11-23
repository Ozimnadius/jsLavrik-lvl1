// var btn_prev = document.querySelector('#gallery .buttons .prev');
// var btn_next = document.querySelector('#gallery .buttons .next');
// var images = document.querySelectorAll('#gallery .photos img');
// var i = 0;
// btn_prev.onclick = function(){
//      images[i].className = '';
//      i = i - 1; /* i-- */
//      if(i < 0){
//          i = images.length - 1;
//      }
//      images[i].className = 'showed';
// }
// btn_next.onclick = function(){
//      images[i].className = '';
//      i = i + 1; /* i++ */
//      if(i >= images.length){
//          i = 0;
//      }
//      images[i].className = 'showed';
// }
// ДЗ-2-3

"use strict"

window.onload = function() {
    var slider = new Slider({
        images: '#gallery img',
        btnPrev: '#gallery .buttons .prev',
        btnNext: '#gallery .buttons .next',
        autoplay: true,
        autoplayTimeout: 1000
    })

    var slider2 = new Slider({
        images: '#gallery-2 img',
        btnPrev: '#gallery-2 .buttons .prev',
        btnNext: '#gallery-2 .buttons .next',
        autoplay: true,
        autoplayTimeout: 2000
    })

    function Slider(obj) {
        var i = 0;
        this.images = document.querySelectorAll(obj.images);
        this.autoplay = obj.autoplay;
        this.autoplayTimeout = obj.autoplayTimeout;
        this.btnPrev = obj.btnPrev;
        this.btnNext = obj.btnNext;

        var slider = this;

        this.prev = function() {
            slider.images[i].classList.remove('showed');
            i--;
            if(i < 0){
                i = slider.images.length - 1;
            }
            slider.images[i].classList.add('showed');
        }
        this.next = function() {
            slider.images[i].classList.remove('showed');
            i++;
            if(i >= slider.images.length){
                i = 0;
            }
            slider.images[i].classList.add('showed');
        }
        
        document.querySelector(slider.btnPrev).onclick = function() {
            slider.prev();
        }
        document.querySelector(slider.btnNext).onclick = function() {
            slider.next();
        }
        this.autoPlay = function() {
            setInterval(function() {
                slider.next();
            }, slider.autoplayTimeout);
        }
        if(slider.autoplay) {
            slider.autoPlay();
        }
    }
}

