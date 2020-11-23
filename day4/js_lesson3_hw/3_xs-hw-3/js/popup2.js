window.onload = function(){
    
    var btn1 = $('.pop_btn_1');
	var pop1 = new Popup( btn1);
	
	btn1.on('click', function(e) { pop1.open('<p>j khsdfjkhkjsd hgkjh kjsd hgkj hkjsdgh kdsfgkj hkjfgd</p>', e.clientY); });

    var btn2 = $('.pop_btn_2');
    var pop2 = new Popup( btn2);
    
    btn2.on('click', function(e) { pop2.open('<p>второе окно, с картинкой </p><img src="img/1.jpg" class="illustr">', e.clientY); });

}

function Popup(btn){

    var body = $("body"); 
    var blured = new OurJquery(document.body.children);

    if ($('.overlay').elements.length == 0) {
        body.addElement('div', 'overlay');
    }
    this.over = $('.overlay');

    if ($('.popup').elements.length == 0) {
        body.addElement('div', 'popup');
        this.pop = $('.popup');
        this.pop.addElement('div', 'x');
        this.popX = $('.x');
        this.popX.html('X'); 
        this.pop.addElement('div', 'text');
        this.popText = $('.text');
    }
    else {
        this.pop = $('.popup');
        this.popX = $('.x');
        this.popText = $('.text');
    }
    
    this.open = function(content, Y){

    	this.popText.html(content);
        this.over.addClass('show');
        this.pop.css('top',  Y + 10 +'px');
        this.pop.addClass('show');
        blured.blurUnder('blur');
        btn.disable();
    }

    var el = this;
    var flag_fade = false;

    function close(el) {
        if (!flag_fade) {
            blured.removeClass('blur');
            btn.on('click', function() {return false;} );
            fade([el.over, el.pop], 2000, 40);
        }
    }

    function fade(elems, t, f){
      var fps = f || 50; 
      var time = t || 500; 
      var steps = time / fps;   
      var op = 1;
      var d0 = op / steps;
      flag_fade = true;

      var timer = setInterval(function(){
        op -= d0;
        for (var i = 0; i <elems.length; i++) {
            elems[i].css('opacity', op);
        }
        steps--;

        if(steps == 0){
            clearInterval(timer);
            flag_fade = false;
            for (var i = 0; i <elems.length; i++) {
                elems[i].removeClass('show');
                elems[i].css('opacity', 1); 
                btn.enable();
            }
        }
      }, (1000 / fps));
    }
    
    this.popX.on('click',  function(){
        close(el);
    });

    this.over.on('click', function(){
        close(el);
    });
}




