window.onload = function(e){
    
    var inputs = document.querySelectorAll('.check');
    
    document.querySelector('form').onsubmit = function(e){
        var error = false;
        
        for(var i = 0; i < inputs.length; i++){
            if(inputs[i].value === ''){
                inputs[i].classList.add('err');
                error = true;
            }
        }
        
        if(error){
            e.preventDefault();
        }
    };

    
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
    
    /*$('.items .item').html('1').addClass('nz').on('click', function(){
        this.style.color = 'red';
    });
    
    console.log($('.items .item').html());*/




    /*----------ДЗ3-2-------*/

   $('.square1').fade(3000).addClass('Vasiliy');

   $('.square2').show(8000).addClass('Nikolay');

    $('.items .item').fade(8000).addClass('add2');

    $('.stealth').show(10000);





    /* 
     *  $('.items .item').fade(300); 
     *  https://dmitrylavrik.ru/javascript/prostaya-animaciya-na-javascript
     *  */
};





