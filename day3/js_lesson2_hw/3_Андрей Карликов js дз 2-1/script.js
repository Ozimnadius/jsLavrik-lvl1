window.onload = function() {

  var form = document.querySelector('form');
  var text = document.querySelectorAll('input[type=text]');
  var btn = document.querySelector('input[type=submit]');
  
  btn.onmousedown = function() {
	  this.classList.add('clicked');
  }
  
    btn.onmouseup = function() {
	  this.classList.remove('clicked');
  }

for (i = 0; i < text.length; i++) {
  text[i].onfocus = function() {
      this.classList.remove('error');

  }
}

  form.onsubmit = function() {

    for (i = 0, j = 0; i < text.length; i++) {
      if (text[i].value == '') {
        text[i].classList.add('error');
        j++;
      }
    }
      if (j > 0) {
        return false;
      }
    }

}
