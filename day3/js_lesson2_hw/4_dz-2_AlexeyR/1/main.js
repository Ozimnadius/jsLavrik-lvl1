window.onload = function(e){

	var span = document.querySelectorAll('span'),
		userData = document.querySelectorAll('input[type=text]'),
		form = document.querySelector('form'),

		name = document.querySelector('input[name=name]'),
		email = document.querySelector('input[name=email]'),
		tel = document.querySelector('input[name=tel]')

	for(var i=0; i < userData.length; i++){
		userData[i].oninput = deleteErr;
	}

	form.onsubmit = function(){
		if(name.value == ''){
			name.classList.add('error');
		}
		if(email.value == ''){
			email.classList.add('error');
		}
		if(tel.value == ''){
			tel.classList.add('error');
		}
		if(name.classList.contains('error')||email.classList.contains('error')||tel.classList.contains('error')){
			return false;
		}

		alert('форма отправлена');
	};

	function deleteErr(){
		this.classList.remove('error');
	}

};