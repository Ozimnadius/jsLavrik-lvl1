window.onload = function() {
    document.querySelector('#open_popup').onclick = function() {
        var p = new Popup();
        p.open('<h3>Новое модальное окно</h3>'+
                '<p>Текст модального окна</p>');
    }

    function Popup() {

        var popup_overlay = document.querySelector('.popup-overlay');
        if(!popup_overlay) {
            var popup_overlay = document.createElement('div');
            popup_overlay.className = 'popup-overlay popup-overlay-closed';
            document.body.appendChild(popup_overlay);
        }
        
        var popup_container = document.querySelector('.popup-container');
        if(!popup_container) {
            var popup_container = document.createElement('div');
            popup_container.className = 'popup-container popup-container-closed';
            document.body.appendChild(popup_container);
        }

        this.open = function(content) {
            popup_overlay.classList.remove('popup-overlay-closed');
            popup_container.classList.remove('popup-container-closed');
            popup_container.innerHTML = content;
        }

        this.close = function() {
            popup_overlay.classList.add('popup-overlay-closed');
            popup_container.classList.add('popup-container-closed');
        }
        
        popup_overlay.onclick = this.close;

    }

}