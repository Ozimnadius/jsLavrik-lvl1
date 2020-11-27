/* умный аналог window.onload */
$(function(){

    /* получение элементов */
    var answ = $('.answer');

    answ.hide();
    answ.prev().on('click', function(){
      $(this).next().slideToggle();
    });
});
