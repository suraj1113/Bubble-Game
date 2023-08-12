var score = 0;
var rn = 0;
var timer = 60;

function makeBubble(){
    var clutter = "";
    for(var i=1; i<=80; i++){
        var rn = Math.floor(Math.random()*10);
        clutter += `<div class="bubble">${rn}</div>`
    }
    document.querySelector("#pbtm").innerHTML = clutter;
}



function runTimer(){
     var timeint = setInterval(function(){
        if(timer > 0){
            timer--;
            document.querySelector("#timerval").textContent = timer;

        }else{
            clearInterval(timeint);
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over...</h1><br><br><h1>Total Score : ${score}</h1>`
        }
     },1000);
}

function incresaeScore(){

    score += 10;
    document.querySelector("#scoreval").textContent = score;

}

function getNumber(){

    rn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = rn;

}

document.querySelector("#pbtm").addEventListener("click", function(dets){
    var clickedNum = Number(dets.target.textContent);

    //console.log(clickedNum);
    if(clickedNum === rn){
        incresaeScore();
        makeBubble();
        getNumber();
    }
})
runTimer();
makeBubble();
getNumber();
//incresaeScore();