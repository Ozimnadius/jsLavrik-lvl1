window.onload = function () {

    var linksGalleryHref = document.querySelector('.gallery');
    var overlay = document.querySelector('.overlay');
    var close = document.querySelector('.close');
    var popup = document.querySelector('.popup');
    var popupContent = document.querySelector('.popup div');

    linksGalleryHref.addEventListener('click', function(e) {
        console.log(e.target.dataset.href);
        overlay.classList.add('showed');
        popup.classList.add('showed');
        popupContent.innerHTML = '<img src="' + e.target.dataset.href + '">';
    });

    overlay.onclick = function(){
        overlay.classList.remove('showed');
        popup.classList.remove('showed');
    }

    close.onclick = function(){
        overlay.classList.remove('showed');
        popup.classList.remove('showed');
    }

}

