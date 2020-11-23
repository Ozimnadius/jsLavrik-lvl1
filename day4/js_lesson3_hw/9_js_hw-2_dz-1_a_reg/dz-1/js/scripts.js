window.onload = function() {

	var form = document.querySelector('form');
	var inputs = document.querySelectorAll('input[type=text]');
	var submit = document.querySelector('input[name=submit]')
	var err = false;
	
	// submit.onclick = validate;
	form.onsubmit = validate;
	
	function validate() {
		
		for (var i = 0; i < inputs.length; i++) {
			
			if (inputs[i].value == '') {
				
				if (!inputs[i].classList.contains('err')) {
					inputs[i].classList.add('err');
				}
				if (inputs[i].classList.contains('ok')) {
					inputs[i].classList.remove('ok');
				}
				
				/* inputs[i].classList.toggle('err');
				inputs[i].classList.toggle('ok'); */
				
				err = true;
			}
			else {
				
				if (!inputs[i].classList.contains('ok')) {
					inputs[i].classList.add('ok');
				}
				if (inputs[i].classList.contains('err')) {
					inputs[i].classList.remove('err');
				}
				
				/* inputs[i].classList.toggle('ok');
				inputs[i].classList.toggle('err'); */
				
				err = false;
			}
		}
		
		if (err) {
			alert('Заполните все поля');
			return false;
		}
		else {
			alert('Форма проверена, отправляем');
		}
	}
}
