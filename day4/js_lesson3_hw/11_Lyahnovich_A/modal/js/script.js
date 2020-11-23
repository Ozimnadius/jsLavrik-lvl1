/*window.onload = function(){
    var push = document.querySelector('.push');
    var overlay = document.querySelector('.overlay');
    var modal_window = document.querySelector('.modal_window');

    push.onclick = function() {
        show_modal();
        position_modal();
    }

    overlay.onclick = function() {
        show_modal();
    }

    function show_modal() {
        overlay.classList.toggle('show');
        modal_window.classList.toggle('show');
    }

    function position_modal() {
        var position_top = (overlay.offsetHeight / 2) - (modal_window.offsetHeight / 2);
        var position_left = (overlay.offsetWidth / 2) - (modal_window.offsetWidth / 2);
        modal_window.style.top = position_top + 'px';
        modal_window.style.left = position_left + 'px';
    }
}*/

window.onload = function(){
    var modal = new modal('.overlay', '.modal_window');
    
    document.querySelector('.push').onclick = function() {
        modal.show_modal();
    }
	document.querySelector('.overlay').onclick = function() {
        modal.show_modal();
    }

    function modal(overlay, modal_window) {
        this.overlay = document.querySelector(overlay);
        this.modal_window = document.querySelector(modal_window);
        

        this.show_modal = function() {
            this.overlay.classList.toggle('show');
            this.modal_window.classList.toggle('show');
            this.position_modal();
        }

        this.position_modal = function() {
            var position_top = (this.overlay.offsetHeight / 2) - (this.modal_window.offsetHeight / 2);
            var position_left = (this.overlay.offsetWidth / 2) - (this.modal_window.offsetWidth / 2);
            this.modal_window.style.top = position_top + 'px';
            this.modal_window.style.left = position_left + 'px';
        }
    } 
}