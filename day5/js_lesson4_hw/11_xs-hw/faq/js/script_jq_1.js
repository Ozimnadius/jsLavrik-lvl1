$(function(){
  var answers = $('.answer');

  $('.item').on('click', function() {

    var answer = $(this).children('.answer');
    
    answers.slideUp(1000);
    answers.removeClass('show'); 
    answer.toggleClass('show');
    answer.slideToggle(1000);

  });

});