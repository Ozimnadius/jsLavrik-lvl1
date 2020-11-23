(function(){

	window.Popup = function(obj){
	    
		var popup = document.querySelector(obj.popup);
		var overlay = document.querySelector(obj.overlay);
		var showPopup = document.querySelector(obj.showPopup);	
		var inner = obj.inner;	

		var context = this;

		context.open = function(txt){
			popup.classList.add('active'); 
			overlay.classList.add('active'); 
			popup.innerHTML = txt; 
	    }
	    
	    context.close = function(){
			popup.classList.remove('active'); 
			overlay.classList.remove('active');	        
	    }

	    showPopup.onclick = function(){
	    	context.open(inner);
	    }

	    overlay.onclick = function(){
	    	context.close();
	    }
	    
	}

})()