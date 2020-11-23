
function Popup() {

    this.open = function (content) {
        var newOverlay = document.createElement('div');
        newOverlay.className ='overlay';
        document.querySelector('.wrapper').appendChild(newOverlay);

        var newWindow = document.createElement('div');
        newWindow.className ='window';
        document.querySelector('.wrapper').appendChild(newWindow);

        //$('.overlay').removeClass('hidden');
        $('.window').html(content);//.removeClass('hidden')

        $('.overlay').on('click',function(){
            close();
        });

        function close() {
            /*$('.overlay').addClass('hidden');
            $('.window').addClass('hidden');*/
            document.querySelector('.wrapper').removeChild(newOverlay);
            document.querySelector('.wrapper').removeChild(newWindow);
        }
    };
}


var p = new Popup();

$('.callPopup').on('click',function(){
    p.open('<img src="img/1.png"> </img>' +
        '<p>Я модальное окно!</p> ');
});


var g = new Popup();

$('.callPopup2').on('click',function(){
    g.open('<img src="img/1.jpeg"> </img>' +
        '<p> И я тоже!</p>');
});
