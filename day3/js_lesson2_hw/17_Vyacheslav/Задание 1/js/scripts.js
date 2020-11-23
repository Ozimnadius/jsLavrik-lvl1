window.onload = function(e){
    
    var send = document.querySelector('form');
    var name = document.querySelector('input[name=user_name]');
    var phone = document.querySelector('input[name=phone]');


    send.onsubmit = function(){

        if(!isNameTrue(name)){

            name.classList.add('error');

            alert('Используйте русские буквы (без ё)');

            return false;
        }

        if(!isPhoneTrue(phone)){

            phone.classList.add('error');

            alert('Проверьте правильность введенного номера');

            return false;
        }

        alert('Спасибо. За Вами уже выехали!!!');
    }

    function isNameTrue(str){
        var name = str.value; 

        if(name == ''){
            return false;
        }

        for (var i = 0; i < name.length; i++){

            if(name.charCodeAt(i) < 1040 || name.charCodeAt(i) > 1103){

                return false;
            }
        }

        if(str.classList.contains('error')){
            str.classList.remove('error');
        }

        return true;
    }

    function isPhoneTrue(str){
        var phoneNum = phone.value;

        if( (phoneNum.length == 11) && (phoneNum.charAt(0) == '8') ){

            if(phone.classList.contains('error')){
                phone.classList.remove('error');
            }

            return true;

        } else if((phoneNum.length == 12) && ((phoneNum.charAt(0) + phoneNum.charAt(1)) == '+7')){

            if(phone.classList.contains('error')){
                phone.classList.remove('error');
            }

            return true;
        }

        return false;
    }
}

