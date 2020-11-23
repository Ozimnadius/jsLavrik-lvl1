window.onload = function(){
    
    var data = document.querySelectorAll('input[type=text]');
    var form = document.querySelector('form');
    var btnAll = document.querySelector('input[name=valAll]');
    var btn1 = document.querySelector('input[name=val1]');


    //form.onsubmit = validateAll;
    btnAll.onclick = validateAll;
    btn1.onclick = validate; /* знаю, что два сабмита быть не должно, просто хочется 
    по разным кликам опробовать разные обработчики*/
  
    function validate(e){
        for (var i = 0; i < data.length; i++) {
            if (data[i].value === '') { 
                data[i].classList.add('red');
                data[i].setAttribute('placeholder', 'empty ' + data[i].name + '!!!');
                return false; 
            }
        }
        alert ('OK');
    }

    function validateAll(e){
        var err = 0;
        for (var i = 0; i < data.length; i++) {
            if (data[i].value === '') { 
                data[i].classList.add('red');
                data[i].setAttribute('placeholder', 'empty ' + data[i].name + '!!!');
                err++;
            }
            else data[i].classList.add('green');
        }
        if ( err > 0 ) { return false; }
        alert ('OK');
    }

    for (var i = 0; i < data.length; i++) {
        data[i].onfocus = function() { this.classList.remove('red'); }
    }
}

