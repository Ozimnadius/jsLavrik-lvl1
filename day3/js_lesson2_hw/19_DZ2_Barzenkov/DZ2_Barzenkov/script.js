window.onload = function(e){
	var inp = document.querySelectorAll('input[name=form]');
	var but = document.querySelector('.but');
	var text = document.querySelector('span');
	var forma = document.querySelector('.forma');
	var i = 0;

	
	but.onclick = function (){
	var err = true;

		for(i = 0; i < inp.length;i++){
			 if(inp[i].value==''){
			 	inp[i].classList.add('hh');
			 	err = false;
			 }else{inp[i].classList.remove('hh');  } 
		}
		console.log(err);

		if (err==false){
			text.innerHTML = 'Заполните все поля';
			return false;
		} else{
			text.innerHTML = "Форма отправлена";
			text.style.color = 'black';
			forma.style.display = 'none';
			but.setAttribute ('value', 'Готово');
		}

		

		
	}	




}

