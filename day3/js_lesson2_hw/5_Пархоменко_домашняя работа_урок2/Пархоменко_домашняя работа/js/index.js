window.onload = function (){
	var btn = document.querySelector('input[type=submit]');
	var inputs = document.querySelectorAll('input[type=text]');
	var form1 = document.querySelector('#form1');

	btn.onclick = formValid;

	function formValid() {

		if (form1.classList.contains('notValid')) {
			form1.classList.remove('notValid');
		}

		for (var i = 0; i < inputs.length; i++) {
				if (inputs[i].classList.contains('empty')) {
					inputs[i].classList.remove('empty');
				}

		}

		for (var i = 0; i < inputs.length; i++) {
				if (inputs[i].value == "") {
					inputs[i].classList.add('empty');
					form1.classList.add('notValid');
				}

		}

		if (form1.classList.contains('notValid')) {
			return false;
		}
		else {
			alert('Форма отправлена');
		}


	}
		
		var gallery_slider1 = document.querySelector('.gallery_slider1');
		var gallery = new GallerySlider(gallery_slider1);

		var gallery2 = new GallerySlider2('gallery_slider2');
		var gallery3 = new GallerySlider3('gallery_slider3');

}


function GallerySlider (gallery){
	this.gallery = gallery;
	var images = this.gallery.querySelectorAll('.photos>img');
	var btn_next = this.gallery.querySelector('.buttons .next');
	var btn_prev = this.gallery.querySelector('.buttons .prev');
	var i = 0;

	btn_next.onclick = function (){
		images[i].classList.remove('showed');
		i++;
		if (i>=images.length) {
			i = 0;
		}
		images[i].classList.add('showed');
		
	}

	btn_prev.onclick = function (){
		images[i].classList.remove('showed');
		i--;
		if (i<0) {
			i = images.length - 1;
		}
		images[i].classList.add('showed');
	}


	
}

function GallerySlider2 (name){
	this.name = name;
	var images  = document.querySelectorAll('.' + this.name+' .photos>img');
	var btn_next = document.querySelector('.' + this.name + ' .buttons .next');
	var btn_prev = document.querySelector('.' + this.name + ' .buttons .prev');
	var i = 0;

	btn_next.onclick = function (){
		images[i].classList.remove('showed');
		i++;
		if (i>=images.length) {
			i = 0;
		}
		images[i].classList.add('showed');
		
	}

	btn_prev.onclick = function (){
		images[i].classList.remove('showed');
		i--;
		if (i<0) {
			i = images.length - 1;
		}
		images[i].classList.add('showed');
	}


	
}

function GallerySlider3 (name){
	this.name = name;
	var btn_next = document.querySelector('.' + this.name + ' .buttons .next');
	var btn_prev = document.querySelector('.' + this.name + ' .buttons .prev');

	btn_next.onclick =click_next;

	btn_prev.onclick =click_prev;

	var tmp = bind(click_next, btn_next);

	setInterval(tmp, 2500);	
}

function click_next(){

	var images = this.parentElement.previousElementSibling.querySelectorAll('img');
	var img = this.parentElement.previousElementSibling.querySelector('.showed');
	var i = images.indexOf(img);
    /*console.log(images);
    console.log([1, 2, 3]);
	var i = index(images);*/

	images[i].classList.remove('showed');
	i++;
	if (i>=images.length) {
		i = 0;
	}
	images[i].classList.add('showed');
}

function click_prev(){
	var images = this.parentElement.previousElementSibling.querySelectorAll('img');
	var i = index(images);

	images[i].classList.remove('showed');
	i--;
	if (i<0) {
		i = images.length - 1;
	}
	images[i].classList.add('showed');
}

function index(elem){
	var images = elem;

	for (var i = 0; i < images.length; i++){
		if (images[i].classList.contains('showed')){
			return i;
		}
	}
}

function bind(func, context) {
  return function() { // (*)
    return func.apply(context, arguments);
  };
}