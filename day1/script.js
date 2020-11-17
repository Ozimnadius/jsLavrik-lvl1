window.onload = function () {

    let cInp1 = document.querySelector('.calc__input[name=first]');
    let cInp2 = document.querySelector('.calc__input[name=second]');
    let cBtns = document.querySelectorAll('.calc__btn');
    let cRes = document.querySelector('.calc__res');

    for (let i=0;i<cBtns.length;i++){
        cBtns[i].addEventListener('click', calcRes);
    }

    function calcRes(){
        let name = this.name;
        let result = 0;

        if (name=='plus'){
           result = parseInt(cInp1.value)+parseInt(cInp2.value)
        } else if ( name=='minus'){
            result = parseInt(cInp1.value)-parseInt(cInp2.value)
        } else if ( name=='multiply'){
            result = parseInt(cInp1.value)*parseInt(cInp2.value)
        } else {
            result = parseInt(cInp1.value)/parseInt(cInp2.value)
        }

        cRes.innerHTML = result;
    }


    let sInp1 = document.querySelector('.sum__input[name=num1]');
    let sInp2 = document.querySelector('.sum__input[name=num2]');
    let sBtn = document.querySelector('.sum__btn');
    let sRes = document.querySelector('.sum__res');


    sBtn.onclick = function () {
        sRes.innerHTML = parseInt(sInp1.value)+parseInt(sInp2.value);
        this.disabled = true;
    };

    sInp1.addEventListener('input',sumOnInput);
    sInp2.addEventListener('input',sumOnInput);

    function sumOnInput(){
        if (sBtn.disabled){
            sBtn.disabled = false;
        }
    }


};