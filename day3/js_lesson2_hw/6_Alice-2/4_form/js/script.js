window.onload = function(e){

  var mainInf = document.querySelectorAll('input[name]'),
      form = document.querySelector('form');
      console.log(form);

  form.addEventListener('submit', checkInp);

  function checkInp(e) {
    for (var i = 0; i < mainInf.length; i++) {
    var data = mainInf[i].value;
      if (data === '' || data === ' ') {
        e.preventDefault();
        mainInf[i].classList.add('empty-inp');
        mainInf[i].addEventListener('focus', focus);
        function focus() {
          this.classList.remove('empty-inp');
        }
      }
    }
  }
}
