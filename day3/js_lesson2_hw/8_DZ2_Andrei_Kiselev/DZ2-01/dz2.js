window.onload = function(){
	//Variables
	var username = document.querySelector('.username');
	var userpassword = document.querySelector('.userpassword');
	var user_email = document.querySelector('.user-email');
	var submit = document.querySelector('.submit_btn');
	var norm = document.querySelector('.norm');
	var empty = document.querySelector('.empty');
	//Functions
	

/*function highLight(){
  console.log('Функция highLight работает');
  var inputs = document.querySelectorAll('input[type="text"]');
  
  for (var i = 0; i < inputs.length; i++){
    var value = inputs[i].value;
    if (value != '') {
    inputs[i].classList.add('valid');
    inputs[i].classList.remove('invalid');
      norm.classList.add('show');
      empty.classList.remove('show');
  } else if (value == '') {
    inputs[i].classList.remove('valid');
    inputs[i].classList.add('invalid');
    //inputs[i].focus();
    norm.classList.remove('show');
    empty.classList.add('show');
    return false;
    
  }
  }
  
}*/
	
    submit.addEventListener('click', highLightSeparate);
	
	function highLightSeparate(e){
        e.preventDefault();
        checkName();
        checkPassword();
        checkEmail();
	}
    
	function checkName(){
		if(username.value != '') {
			username.classList.add('valid');
			username.classList.remove('invalid');
			norm.classList.add('show');
			empty.classList.remove('show');
		  }	else  {
			  username.classList.remove('valid');
				  username.classList.add('invalid');
				  norm.classList.remove('show');
				  empty.classList.add('show');
		  }
				  
			
			  
	}
	function checkPassword(){
		if(userpassword.value != '') {
				userpassword.classList.add('valid');
				userpassword.classList.remove('invalid');
				norm.classList.add('show');
				empty.classList.remove('show');
			}	else {
				userpassword.classList.remove('valid');
					userpassword.classList.add('invalid');
					norm.classList.remove('show');
					empty.classList.add('show');
			} 
					
			
	}
	function checkEmail(){
		if(user_email.value != '') {
				user_email.classList.add('valid');
				user_email.classList.remove('invalid');
				norm.classList.add('show');
				empty.classList.remove('show');
		}	else  {
			user_email.classList.remove('valid');
					user_email.classList.add('invalid');
					norm.classList.remove('show');
					empty.classList.add('show');
		}
					
				
	}
}

