  function Elevate(obj) {
              this.threshold = obj.threshold || 200;
     this.buttonResponseTime = obj.responseTime || 300;
             this.scrollTime = obj.scrollTime || 500;
          this.buttonElement = obj.buttonElement || 'button';
            this.buttonClass = obj.buttonClass || 'button-up';
             this.buttonText = obj.buttonText || 'Up';
                     var bUp = this;

    this.buttonShow = function(elem) {
      var topScroll = $('body, html').scrollTop();
      if (topScroll > bUp.threshold) {
        $(elem).fadeIn(bUp.responseTime);
      } else {
        $(elem).fadeOut(bUp.responseTime);
      }
    }

    var newElem = document.createElement(bUp.buttonElement);
    newElem.className = bUp.buttonClass;
    newElem.innerHTML = bUp.buttonText;
    var body = document.querySelector('body');
    body.appendChild(newElem);

    bUp.buttonShow(newElem);

    $(document).on('scroll', function() {
      bUp.buttonShow(newElem);
    });

    $(newElem).on('click', function(e) {
      e.preventDefault(); 
      e.stopPropagation();
      $('body, html').stop().animate({scrollTop: 0}, bUp.scrollTime);  
    });
  }

$(function () {

  var btnUp = new Elevate({
    scrollTime: 1500,
    buttonText: 'Вверх'
  });

});
