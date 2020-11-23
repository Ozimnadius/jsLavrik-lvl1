window.onload = function () {
    var p = new Popup();
    
    document.querySelector('.open-modal').onclick =  function(){
        var content = 'Привет!';
        p.open(content);
    }
}
    
function Popup(){

    this.popupDiv = document.querySelector('.popup');
    this.overlayDiv = document.querySelector('.overlay');
    var popup = this;

    popup.open = function(content){
        popup.overlayDiv.classList.add('active');
        popup.popupDiv.classList.add('active');
        popup.popupDiv.innerHTML = content;
    }

    popup.close = function(){
         popup.overlayDiv.classList.remove('active');
        popup.popupDiv.classList.remove('active');
    }
    popup.overlayDiv.onclick = popup.close;

}