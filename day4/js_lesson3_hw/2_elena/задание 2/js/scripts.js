window.onload = function(e){
    
    var jqInputs = $('.check');
    
    jqInputs.on('click', function(){
        this.classList.remove('err');
    });
    
    jqInputs.on('focus', function(){
        this.classList.add('focus');
    });

    jqInputs.on('blur', function(){
        this.classList.remove('focus');
    });
    
    jqInputs.addClass('some').addClass('some1').addClass('some2');
    
	
	
	//$('.items .item').fade(5000, function(){console.log('fade');}).show(200, function(){console.log('show');});
	$('.items .item').fade(5000, function(){$('.items .item').show(20000, function(){$('.items .item').fade(3000);});});
    
    /* 
     *  $('.items .item').fade(300); 
     *  https://dmitrylavrik.ru/javascript/prostaya-animaciya-na-javascript
     *  */
}