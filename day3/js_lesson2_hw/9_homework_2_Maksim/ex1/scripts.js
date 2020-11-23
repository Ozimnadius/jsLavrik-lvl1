window.onload = function() {
    var form = document.querySelector('form[name=simple_form]');
    var inputs = document.querySelectorAll('input[type=text], input[type=email], input[type=password]');

    for(var i = 0; i < inputs.length; i++) {
        inputs[i].oninput = function() {
            this.classList.remove('border-red');
        }
    }
    
    form.onsubmit = checkInputs;

    function checkInputs() {
        var counter = 0;
        for(var i = 0; i < inputs.length; i++) {
            if(inputs[i].value == '') {
                inputs[i].classList.add('border-red');
                counter++;
            }
        }
        if(counter) {
            return false;
        }
    }
}