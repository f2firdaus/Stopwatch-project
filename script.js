var breakTime = 300;
var sessionTime = 1500;

var clocktype = "session";

var clockTime = sessionTime;
var clockRunning = false;

let breakIndicator = document.querySelector("#break-indicator");
let sessionIndicator = document.querySelector("#session-indicator");
let clockCounter = document.querySelector("#clock-counter");

var inMinSec = function(time) {
    var m = Math.floor(time/60);
    var s = time % 60;
    if (s < 10) {
        s = '0' + s.toString();
    }
    return m + ':' + s;
}

var updateClockCounter = function() {
    clockCounter.innerText = inMinSec(clockTime);
}
var resetApp = () => {
    breakTime = parseInt(breakIndicator.value) * 60;
    sessionTime = parseInt(sessionIndicator.value)*60;
    clockTime = sessionTime;
    clocktype = 'session';
    label.innerText = "Session";
    clockButton.innerText = "Start";
    updateClockCounter()
}


updateClockCounter();

let label = document.querySelector("#clock-label");
let clockButton = document.querySelector("#clock-button");
let resetButton = document.querySelector("#reset-button");

var countdown = function () {

    if (clockTime > 0 && clockRunning) {
        clockTime -= 1;
        updateClockCounter();
        
    } else if (clockTime == 0 && clockRunning) {
        if (clocktype === "session") {
            label.innerText = "Break";
            clocktype = "Break";
            clockTime = breakTime;
            alert("Take break")
        } else {
            label.innerText = "Session";
            clocktype = "session";
            clockTime = sessionTime;
            alert("Start Work")
        }
    }
    
}
var countdownID;

clockButton.addEventListener('click', function () {
    if (!clockRunning) {
        clockRunning = true;
        window.setInterval(countdown, 1000);
        clockButton.innerText="Pause"
    } else {
        clockRunning = false;
        clockButton.innerText = "Start";
        window.clearInterval(countdownID);
    }
})

resetButton.addEventListener('click', function () {
    clockRunning = false;
    resetApp();
})
