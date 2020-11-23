window.onload = function(e){
     
    var items = $('.items .item');
    items.on('click', function(){
        $(this).fade(2000, 40, function(){
            alert('Я исчез!');
        }); 
    });
    
}