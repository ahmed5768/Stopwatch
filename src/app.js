var sec = 0;
var min = 0;
var hour = 0;
var displyTime = document.getElementById("disply")
var timer ;

function stopWatch(){
    sec++;
    if(sec == 60){
        sec = 0;
        min++;
        if(min == 60){
            min = 0;
            hour++;
        }
    }

    
    var hours = hour < 10 ? "0" + hour : hour; 
    var minutes = min < 10 ? "0" + min : min; 
    var second = sec < 10 ? "0" + sec : sec; 

    displyTime.innerHTML = hours + ":" + minutes + ":" + second;
}
function watchStart(){
    if(timer!== null){
        clearInterval(timer)
    }
    timer = setInterval(stopWatch,1000)
}

function stop(){
    clearInterval(timer)
}
function resets(){
    clearInterval(timer)
    var sec = 0;
    var min = 0;
    var hour = 0;
    displyTime.innerHTML = "00:00:00"
}