window.onload = function() {

  function Popup(obj) {

    this.link = document.querySelector(obj.link);
    this.overlay = document.querySelector(obj.overlay);
    this.close = document.querySelector(obj.close);
    this.div = document.querySelector(obj.div);

    var popup = this;//Все равно до конца не понимаю почему без этого не работает...

    this.openPopup = function(e) {
      e.preventDefault();
      popup.overlay.classList.add('show');
    };

    this.closePopup = function(e) {
      popup.overlay.classList.remove('show');
    };

    this.link.addEventListener('click', popup.openPopup);
    this.close.addEventListener('click', popup.closePopup);

    window.addEventListener('click', function(e) {
        if (e.target === popup.overlay) {
          popup.closePopup();
        }
      });

      window.addEventListener('keydown', function(e) {
        if (e.keyCode === 27) {
          if (popup.overlay.classList.contains('show')) {
            popup.closePopup();
          }
        }
      });

      this.genContent = function (content) {
        popup.div.innerHTML = content;
      }
  }

  var entrance = new Popup ({
    link: '.entrance-link',
    overlay: '.overlay-entrance',
    close: '.close-entrance',
    div: '.entrance'
  });

  var map = new Popup ({
    link: '.map-link',
    overlay: '.overlay-map',
    close: '.close-map',
    div: '.map'
  });

  var info = new Popup ({
    link: '.info-link',
    overlay: '.overlay-info',
    close: '.close-info',
    div: '.info'
  });

  info.genContent('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ut lacus eget ligula aliquet tristique et accumsan nunc. Aliquam pulvinar dictum nibh, ut sagittis tortor fermentum vitae. Fusce a auctor risus. Ut eget convallis quam. Duis mollis ex at magna pellentesque bibendum. Integer lacinia arcu et tristique sagittis. Vivamus eu quam consequat, cursus nisi vel, venenatis diam.');

//entrance.genContent('Форма');

  console.log(entrance);
  console.log(map);
  console.log(info);

  var mainInf = entrance.overlay.querySelectorAll('input[name]'),
      form = entrance.overlay.querySelector('form');

  form.addEventListener('submit', checkInp);

  function checkInp(e) {
    for (var i = 0; i < mainInf.length; i++) {
    var data = mainInf[i].value;
      if (data === '' || data === ' ') {
        e.preventDefault();
        mainInf[i].classList.add('empty-inp');
      }
    }
  }

  for (var i = 0; i < mainInf.length; i++) {
    mainInf[i].addEventListener('focus', focus);
    function focus() {
      this.classList.remove('empty-inp');
    }
  }

}
