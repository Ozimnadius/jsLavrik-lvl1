window.onload = function() {

  //Просто одинокий Pop-up))
  var entranceLink = document.querySelector('.entrance-link'),
      overlayEntrance = document.querySelector('.overlay-entrance'),
      closeEntrance = overlayEntrance.querySelector('.close-entrance');


  entranceLink.addEventListener('click', openPopup);

  closeEntrance.addEventListener('click', hidePopup);

  window.addEventListener('click', function(e) {
    if (e.target === overlayEntrance) {
      hidePopup();
    }
  });

  window.addEventListener('keydown', function(e) {
    if (e.keyCode === 27) {
      if (overlayEntrance.classList.contains('show')) {
        hidePopup();
      }
    }
  });

  function openPopup(e) {
    e.preventDefault();
    overlayEntrance.classList.add('show');
  }

  function hidePopup(e) {
    overlayEntrance.classList.remove('show');
  }
}
