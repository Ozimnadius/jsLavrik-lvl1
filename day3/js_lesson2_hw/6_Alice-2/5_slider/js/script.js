window.onload = function(){

  var images = document.querySelectorAll('#gallery .photos img');
  var i = 0;

  setInterval(function() {
    images[i].classList.remove('showed');
    i++;

    if(i >= images.length){
        i = 0;
    }

    images[i].classList.add('showed');

  }, 1000);

}
