$(function(){
    
    var t_data = {
        d: 2,
        h: 20,
        i: 22,
        s: 5,
        dWord: 'дня',
        hWord: 'часов',
        iWord: 'минуты',
        sWord: 'секунды',
    };
    var t = new Timer(t_data);
    t.start();

});

function Timer(data){
    var finish = data.d*24*60*60 +data.h*60*60 +data.i*60 + data.s;

   var time = finish;

    this.start = function() {
        $('.timer').html('Time Left: '+ data.d + data.dWord + '  '  + data.h + data.hWord + '  ' + data.i + data.iWord + '  ' + data.s + data.sWord);
        
        if (time == finish) {
            timer = setInterval(tick, 1000);
        }
    }
    
    this.stop = function() {
        if (time != 0) {
             $('.timer').html('stop:');
            time = 0;
        }
    }

    this.oninit = function(data) {
         $('.timer').html('Time Left: '+ data.d + data.dWord  + data.h + data.hWord + data.i + data.iWord + data.s + data.sWord);
    }

    this.ontick = function(data) {}

    this.onend =  function(data) {
         $('.timer').html("0:00:00");
    }
    
    function tick(){
        console.log(time);
        if (time < 0){
            clearInterval(timer);
             $('.timer').html = "Action Ended: 0:00:00";
        }
        time--;
        render (); 
    }
    
    function render () {
        var finish = data.d*24*60*60 +data.h*60*60 +data.i*60 + data.s;

        var days = parseInt(time / (3600*24));
        var dop = time - (days * 3600*24); 

        var hours = parseInt(dop / 3600);
            dop = time  - (days * 3600*24) - (hours * 3600); 
        
        var mins = parseInt(dop / 60);
        var sec = dop = time  - (days * 3600*24) - (hours * 3600) - (mins*60);

        var d ,h,m,s;

       /* if ((hours == 1)||(hours == 21)) {h ='час';}
        else if ((hours == 2)||(hours >= 22)) {h ='часа';} 
        else if ((hours >= 2)&&(hours <= 20)) {h ='часов';} 

        if ((mins == 1)||(mins == 21)) {m ='минута';}
        else if ((mins >= 2)&&(mins <= 4)) {m ='минуты';} 
        else if ((mins >= 5)&&(mins <= 20)) {m ='минут';} */

        if ( mins < 10) { strMins = '0'+ mins; } else { strMins = mins; }
        if ( sec < 10) { strSec = '0'+ sec; } else { strSec = sec; }

        d = get_num_ending(days, ['день', 'дня', 'дней']);
        h = get_num_ending(hours, ['час', 'часа', 'часов']);
        m = get_num_ending(mins, ['минута', 'минуты', 'минут']);
        s = get_num_ending(sec, ['секунда', 'секунды', 'секунд']);
        
         $('.timer').html(days + d + '   ' + hours + h +' : ' + mins+ m + ' : '+sec + s );
        if (time < 0){  $('.timer').html = 'the end' }
    }

    function get_num_ending(number, ending_arr) 
    { 
        number = number % 100; 
        if (number >= 11 && number <= 19) { 
            ending = ending_arr[2]; 
        } else { 
            i = number % 10; 
            switch (i) { 
                case (1): ending = ending_arr[0]; 
                    break; 
                case (2): 
                case (3): 
                case (4): ending = ending_arr[1]; 
                    break; 
                default: ending = ending_arr[2]; 
            } 
        } 
        return ending; 
    }
}