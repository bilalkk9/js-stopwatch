var ms = 0,
  s = 0,
  m = 0;
var timer;
var stopWatchEl = document.querySelector(".stopwatch");
var lapsContainer = document.querySelector(".laps");
function start() {
  if(!timer){
    timer = setInterval(run, 10);
  }
}
function run() {
  stopWatchEl.textContent = getTimer();
  ms++;
  if (ms == 100) {
    ms = 0;
    s++;
  }
  if (s == 60) {
    s = 0;
    m++;
  }
}

function pause(){
    stopTimer();
}

function stop(){
    stopTimer();
    m=0;
    s=0;
    ms=0;
    stopWatchEl.textContent = getTimer();
}

function stopTimer(){
    clearInterval(timer);
    timer=false;
}

function restart(){
    stop();
    start();
}

function getTimer(){
    return (m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s : s) + ":" + 
    (ms < 10 ? "0" + ms : ms);
}

function lap(){
    if(timer){
        var li=document.createElement('li');
        li.innerHTML=getTimer();
        lapsContainer.appendChild(li);
    }
}

function resetLaps(){
    lapsContainer.innerHTML="";
}