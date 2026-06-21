let time = 1500;
let interval;

function startPomodoro() {

clearInterval(interval);

interval = setInterval(() => {

if(time > 0){

time--;

let mins = Math.floor(time/60);
let secs = time%60;

document.getElementById("timer").innerHTML =
`${mins}:${secs<10?"0":""}${secs}`;

}

},1000);

}