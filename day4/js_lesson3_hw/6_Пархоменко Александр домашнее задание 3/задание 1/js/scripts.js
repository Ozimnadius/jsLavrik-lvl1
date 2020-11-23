window.onload = function(e){
    var pop_up = document.querySelector('.pop_up');
    var bckg = document.querySelector('.pop_up_bckg');
    var btn = document.querySelector('.pop_up_btn')

    btn.addEventListener('click', pop_up_toggle.bind(this, [pop_up, bckg, btn]));
    bckg.addEventListener('click', pop_up_toggle.bind(this, [pop_up, bckg, btn]));
    
    function pop_up_toggle(item){
        var elements = item;

        for (var i = 0; i<elements.length; i++){
            elements[i].classList.toggle('open');
        }

    }

}