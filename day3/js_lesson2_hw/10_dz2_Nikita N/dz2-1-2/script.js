/**
 * Created by Asus on 20.03.2017.
 */

window.onload = function (){

    var inputs = document.querySelectorAll('form input[type=text]');
    var name = document.querySelector('form input[data-val=name]');
    var email = document.querySelector('form input[data-val=email]');
    var phone = document.querySelector('form input[data-val=phone]');
    var span1 = document.querySelector('.first');
    var span2 = document.querySelector('.second');
    var span3 = document.querySelector('.third');
    var submit = document.querySelector('form');

    submit.onsubmit = formValidate;

    function formValidate() {
        var j=0;
        
        var errors = [];
        
        for(var i=0;i<inputs.length;i++){
            if (inputs[i].value === '') {
                inputs[i].classList.add('wrong');
                errors.push('Заполните все поля!');
                break;
            }
        }
            
                /*
        if(!isNaN(name.value) && name.value !== ''){
            name.classList.add('wrong');
            errors.push('В имени не может быть цифр!');
        }

        else{
            j++;
        }


        if(isNaN(phone.value) && phone.value !==''){
            phone.classList.add('wrong');
            errors.push('Телефон должен состоять только из цифр!');
        }

        else{
            j++;
        }
*/
        /*alert(j);*/

        if(j < inputs.length + 6){
            span1.innerHTML = errors.join('<br>');
            return false;
        }
    }
};





