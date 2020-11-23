window.onload = function(e){
    var form = document.querySelector('form');
    var inputs = document.querySelectorAll('input[type=text]');
    form.onsubmit = submitForm;
    
    
    function submitForm(e){
        var flag = 0;
        for(var i = 0; i < inputs.length; i++) {
            inputs[i].classList.remove('error');
            if(inputs[i].value == '') {
                inputs[i].placeholder = 'Заполните это поле!'
                inputs[i].classList.add('error');
                var error = true;
            }
        }
        if (error) {
            return false;
        }
    }
    
}

