window.onload = function(e){
    
    $('.items .item').html('1').addClass('nz').on('click', function(){
        this.style.color = 'red';
        $('.items .item').fade(function(){
            alert('Callback!');
        },300 );       
    });    
  
    
    /* 
     *  $('.items .item').fade(300); 
     *  https://dmitrylavrik.ru/javascript/prostaya-animaciya-na-javascript
     *  */
}