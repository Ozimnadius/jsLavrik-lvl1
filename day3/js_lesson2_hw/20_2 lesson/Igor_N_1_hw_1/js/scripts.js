window.onload = function(e) {

    var input = document.querySelectorAll('input[name=text]'),
        button = document.querySelector('button[type="submit"]'),
        form = document.querySelector('.form')

    button.onclick = function(form) {
        for (var i = 0; i < input.length; i++) {
            if (input[i].value == '') {
                input[i].classList.add("active");
                return false;
            }
        }
    }
}