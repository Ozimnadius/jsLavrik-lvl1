window.onload = function(){
    
    var button = document.querySelector('.button');
    var text = document.querySelectorAll('input[type=text]');
    var form = document.querySelector('form');

    function stopMove(){
        return false;
    }
    function continueMove(){
        return true;
    }

    button.onclick = function() {
        var flag = false;
        for(var i = 0; i < text.length; i++){

            if(text[i].value.trim() == "") {
                text[i].classList.add('error');
                flag = true;
            }
            else {
                text[i].classList.remove('error');
            }
        }
        
        if(flag) {
            form.onsubmit = stopMove;
        }
        else {
            form.onsubmit = continueMove;
        }
    }
    
}

