var statusSpan = document.querySelector("#status");
var statusToggle = document.querySelector("#status-toggle");
var playButton = document.querySelector("#play");
var pauseButton = document.querySelector("#pause");
var stopButton = document.querySelector("#stop");
var minutesDisplay = document.querySelector("#minutes");
var secondsDisplay = document.querySelector("#seconds");
var workMinutesInput = document.querySelector("#work-minutes");
var restMinutesInput = document.querySelector("#rest-minutes");

var totalSeconds = 0;
var secondsElapsed = 0;
var interval;


//initialize the timer based on user's prefrence
function timePref() {
    if ()
        workMinutesInput = totalSeconds;

}
//code for formatting the minutes and seconds based on html
function formatMinutes() {
    var secondsLeft = totalSeconds - secondsElapsed;

    var minutesLeft = Math.floor(secondsLeft / 60);

    var formattedMinutes;

    if (minutesaleft < 10) {
        formatMinutes = "0" + minutesLeft;
    } else {
        formattedMinutes = minutesaLeft
    }
    return formattedMinutes;
}

function formatSeconds() {

}
function startTimer() {
    // Write code to start the timer here
}

playButton.addEventListener("click", startTimer);
