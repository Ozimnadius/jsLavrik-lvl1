$(function () {

    $('.items').on('focus', 'input[type="text"]', function(){
        $(this).addClass('active'); 
    });

    $('.items').on('blur', 'input[type="text"]', function(){
       $(this).removeClass('active'); 
    });
    
    $('.addField').on('click', function(){
       var $div = $('<div/>').addClass('item');
       $('<input>').attr('type', 'text').addClass('check').appendTo($div); 
       $('.items').append($div);
    });
    
});
