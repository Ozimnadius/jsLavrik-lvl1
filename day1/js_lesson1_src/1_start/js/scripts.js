window.onload = function(e){
    
    /*
    document.querySelector -> один элемент дом
    document.querySelectorAll -> массив элементов дом
    
    document.querySelector(css селектор)
    
    */

    var buttons = document.querySelectorAll('.actions input');
    
    for(var i = 0; i < buttons.length; i++){
        buttons[i].onclick = btnClick1;
    }
    
}

function btnClick1(e){
    // this - элемент DOM
    /* for(var k in this){
        document.body.innerHTML += '<b>' + k + '</b> ' + this[k] + '<br>';
    } */
    var name = this.getAttribute('name');
    
    if(name == 'save'){
        console.log('1');
    }
    else if(name == 'delete'){
        console.log('2');
    }
}

