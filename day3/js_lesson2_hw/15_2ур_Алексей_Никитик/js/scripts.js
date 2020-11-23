window.onload = function(){
    
    var input = document.querySelectorAll('input[id]');
	    	
	var submit = document.querySelector('input[type="submit"]');
			
	submit.addEventListener('click', function(){
		for (var i = 0; i < input.length; i++){
			if (input[i].value == ''){
				input[i].classList.add('wrongtext');
				input[i].setCustomValidity('Эти поля обязательны для заполнения!');
			}
		}	
	});
    
    for (var i = 0; i < input.length; i++){
        input[i].oninput = function(){
            this.classList.remove('wrongtext');
        }
    }
} 



