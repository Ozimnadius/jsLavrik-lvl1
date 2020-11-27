$(function(){
    
    $('.ask').on('click', function(){
        $('.answer').not($(this).next()).slideUp();
        $(this).next().slideToggle();
    });

});