window.onload = function(e){

    var form = document.querySelector('form');
    var inputs = document.querySelectorAll('input');
    var spans = document.querySelectorAll('.formspan');

    var spanInfo = ['E-mail' , 'Телефон' , 'Пароль'];
    var spanError = ['Введите E-mail' , 'Введите Телефон' , 'Введие Пароль'];

    form.onsubmit = function(){
        var success = true;
        for (var i = 0; i < inputs.length - 1; i++)
        {
            if (inputs[i].value == '')
            {
                success = false;
                inputs[i].classList.add('active');
                spans[i].innerHTML = spanError[i];
                spans[i].classList.add('span-error');
            }
            else
            {
                 inputs[i].classList.remove('active');  
                 spans[i].innerHTML = spanInfo[i]; 
                 spans[i].classList.remove('span-error');             
            }
        }
        if (success == true)
        {
           return true;
        }
        else
        {
            return false;
        }     
    }

}

