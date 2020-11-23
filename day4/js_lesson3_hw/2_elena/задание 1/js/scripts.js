window.onload = function(e){
    
	function Popup() {
		
		/* инициализация */
		var elem = document.querySelector('body');
		elem.insertAdjacentHTML("beforeEnd","<div class='overlay'></div><div class='modal'></div>");
		
		this.overlay = document.querySelector('.overlay');
		this.modal = document.querySelector('.modal');
		
		var popup = this;
		
		this.open = function(content) {
			popup.modal.innerHTML = content;
			popup.overlay.style.display = 'block';
			popup.modal.style.display = 'block';
		}
		
		this.close = function() {
			popup.overlay.style.display = 'none';
			popup.modal.style.display = 'none';
		}
		
		this.overlay.onclick = popup.close;
	}
	
	
	var p = new Popup();
	
	p.open('<h1>модальное окно</h1>');
 
 }