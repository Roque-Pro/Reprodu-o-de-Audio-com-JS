/**
 * @author Roque Rafael
 * contagem regressiva - teste de função */

var check = false;

 function xequeMate(){
    if (check == false){
        var timer1 = setInterval(function(){start()}, 1000);
        var timer2 = setTimeout(function(){end()}, 13200);
                var count = 10;
        function start(){
            soundBeep();
            document.getElementById('time').innerHTML= count;
            if(count == 0 ){
                clearInterval(timer1);
                soundExplo();
                document.getElementById("fire").src="img/exp.gif";
                document.getElementById("time").innerHTML="GAME OVER";
            }
            count--;
     }
     check = true;
    } 
}


function soundExplo(){
    var beep = new Audio();
     beep.src = "img/explo.mp3";
     beep.play();

}

function soundBeep(){
    var beep = new Audio();
     beep.src = "img/beep-04.mp3";
     beep.play();

}

function end(){
    document.getElementById('fire').src="img/clear.png"
}