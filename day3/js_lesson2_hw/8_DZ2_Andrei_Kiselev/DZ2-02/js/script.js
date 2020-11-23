window.onload = function(){

    //var btn_prev = document.querySelector('#gallery .buttons .prev');
    //var btn_next = document.querySelector('#gallery .buttons .next');
	
    
    var i = 0;

    /*btn_prev.onclick = function(){
         images[i].classList.remove('showed');
         i--;
         
         if(i < 0){
             i = images.length - 1;
         }
         
         images[i].classList.add('showed');
    }

    btn_next.onclick = function(){
         images[i].classList.remove('showed');
         i++;
         
         if(i >= images.length){
             i = 0;
         }
         
         images[i].classList.add('showed');
    }*/
	
	function changeImages(){
		var images = document.querySelectorAll('.photos img');
			images[i].classList.remove('showed');
         i++;
         
         if(i >= images.length){
             i = 0;
         }
         
         images[i].classList.add('showed');
		
		
	}
	
		setInterval(changeImages, 1000);


	

}