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
        images: '.gallery img',
        btnPrev: '.gallery .buttons .prev',
        btnNext: '.gallery .buttons .next',
        autoplay: true,
        autoplayTimeout: 5000
    })

    function Slider() {
        var i = 0;
        this.gallery = document.querySelectorAll(this.images);
        this.prev = function() {
            this.gallery[i].classList.remove('showed');
            i--;
            if(i < 0){
                i = this.gallery.length - 1;
            }
            this.gallery[i].classList.add('showed');
        }
        this.next = function() {
            this.gallery[i].classList.remove('showed');
            i++;
            if(i >= this.gallery.length){
                i = 0;
            }
            this.gallery[i].classList.add('showed');
        }
        document.querySelector('.prev').onclick = function() {
            this.prev();
        }
        document.querySelector('.next').onclick = function() {
            this.next();
        }
        this.autoplayTimeout = 3000;
        this.autoplay = false;
        this.autoPlay = function() {
            setInterval(function() {
                btn_next.click();
            }, this.autoplayTimeout);
        }
        if(this.autoplay) {
            this.autoPlay();
        }
    }

    // К сожалению не разобрался с синтаксисом такого рода объектов :(

    function Some(some) {
        this.name = some.name;
        this.age = some.age;
    }

    var test = new Some({
        name: 'Вася',
        age: 35
    })

    alert(test.name);
    alert(test.age)

    
}

