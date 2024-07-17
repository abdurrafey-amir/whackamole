
const mole = document.getElementById("mole");
const time = document.getElementById("time")
const score = document.getElementById("score")
const pop = new Audio("pop.mp3");



let timercount= 0;
let scorecount = 0;
let moleloc = 0;



function timer() {
    timercount += 0.01;
    time1 = parseInt(timercount);
    time.innerHTML = time1;
}


setInterval(timer, 1)



function relocate() {
    mole.style.left = Math.floor(Math.random() * 90) + "%";
    mole.style.top = Math.floor(Math.random() * 90) + "%";
    scorecount += 1;
    score.innerHTML = `Score: ${scorecount}`;
    pop.play();
}



mole.addEventListener("click", relocate)