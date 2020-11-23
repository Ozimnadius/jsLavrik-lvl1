window.onload = function(e){
    
    var inputs = document.querySelectorAll('.form input');
		
	var formInf = document.querySelector('form');
	formInf.onsubmit = stopSend;
	
    function stopSend(e){
		
		var errorForm = 0;
		
		for(var i = 0; i < inputs.length; i++){
			
			if (inputs[i].value == '') {
				errorForm++;
				inputs[i].classList.add('errorInput');
			}
		}
		
		if (errorForm > 0) { alert("Форма не отправлена. Заполните поля!"); return false;}
		else { alert('Форма отправлена'); return true; }
    }
	
	for(var i = 0; i < inputs.length; i++) {
		inputs[i].oninput = function() {
			if(this.classList.contains('errorInput')) {
				this.classList.remove('errorInput');
			}
			
		}
		
	}
}

