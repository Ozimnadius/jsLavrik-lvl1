/**
 * Created by Asus on 20.03.2017.
 */

window.onload = function (){

    var inputs = document.querySelectorAll('form input[type=text]');
    var name = document.querySelector('form input[data-val=name]');
    var email = document.querySelector('form input[data-val=email]');
    var phone = document.querySelector('form input[data-val=phone]');
    var span1 = document.querySelector('.first');
    var submit = document.querySelector('form');

    submit.onsubmit = formValidate;

    function formValidate() {
        var j=0;
        for(var i=0;i<inputs.length;i++){

            /*Проверка на пустоту инпутов*/

            if (inputs[i].value === '') {
                inputs[i].classList.add('wrong');
                span1.innerHTML ='<br>Заполните все поля!';
            }

            else {
                inputs[i].classList.remove('wrong');
                j++;
            }
        }

        /*alert(j);*/

        if(j<inputs.length){
            return false;
        }
    }
};





