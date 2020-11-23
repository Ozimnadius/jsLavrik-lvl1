window.onload = function(e){

  var mainInf = document.querySelectorAll('input[name]'),
      submit = document.querySelector('input[type=submit]');

  submit.addEventListener('click', checkInp);

  function checkInp(e) {
    for (var i = 0; i < mainInf.length; i++) {
    var data = mainInf[i].value;
      if (data === '') {
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
