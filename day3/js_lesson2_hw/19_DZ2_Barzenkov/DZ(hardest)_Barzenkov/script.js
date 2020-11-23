window.onload = function(e){

	var images = document.querySelectorAll('img');
	var i=0;
	
	setInterval  ( function(){
	 
		images[i].classList.remove('active');
			i++;
			if (i>images.length-1){
			i=0;
		}
		images[i].classList.add('active');

		
	},1000);

	


}