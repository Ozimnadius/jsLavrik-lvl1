window.onload = function () {
    var btnSubmit = document.querySelector('input[type=submit]');
    var inputText = document.querySelectorAll('input[type=text]');

    function inputValidate() {
        if (this.value == '') {
            this.classList.add('error');
            return false;
        } else {
            this.classList.remove('error');
        }
    }

    btnSubmit.onclick = function (e) {
       for (var i = 0; i < inputText.length; i++) {
           if (!inputValidate.call(inputText[i])) {
               e.preventDefault();
           }

       }
    };

    inputText.oninput(function () {
    });
};
