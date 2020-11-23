window.onload = function(){
	var item = document.querySelectorAll('.item');

	var p = new Popup();

	for(var i=0; i<item.length; i++){
		item[i].onclick = function(){
			p.open('111');
		};
	};

};

	function Popup(){

		var popap = document.querySelector('.popap');
		var overlay = document.querySelector('.overlay');

		this.open = function(content){

			overlay.classList.add('block');
			popap.classList.add('block');
			popap.innerHTML = content;

		};

		this.close = function(){

			overlay.classList.remove('block');
			popap.classList.remove('block');

		};

		overlay.onclick = this.close;
	};



