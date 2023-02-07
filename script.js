let min = 0;
let sec = 0;
let msec = 0;

let getMin = document.getElementById("min");
let getSec = document.getElementById("sec");
let getmsec = document.getElementById("msec");
let interval;

function timer() {
    msec++
    getmsec.innerHTML = msec;

    if (msec >= 100) {
        sec++;
        if (sec <= 9) {
            getSec.innerHTML = "0" + sec;
        } else {
            getSec.innerHTML = sec;
        }
        msec = 0;

    } else if (sec >= 60) {
        min++;

        if (min <= 9) {
            getMin.innerHTML = "0" + min;
        } else {
            getMin.innerHTML = min;
        }
        sec = 0;
    }
}

function start() {
    interval = setInterval(timer, 10);

    var btn = document.getElementById("start");
    btn.disabled = true;
}

function stop() {
    clearInterval(interval);

    var btn = document.getElementById("start");
    btn.disabled = false;
}

function reset() {
    min = "00";
    sec = "00";
    msec = "00";

    getMin.innerHTML = min;
    getSec.innerHTML = sec;
    getmsec.innerHTML = msec;

    clearInterval(interval);
    let x=document.getElementById('laps');
    x.innerHTML="";

}

function lapTimer() {
    let Laps = document.getElementById('laps');
    Laps.innerHTML += "<div>" + " " + getMin.innerHTML + ":" + getSec.innerHTML + ":" + getmsec.innerHTML + "</div>";
}