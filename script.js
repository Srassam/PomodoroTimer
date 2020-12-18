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
function setTime() {
    var minutes;
    if (status === "working") {
        minutes = workMinutesInput.value.trim();
    } else {
        minutes = restMinutesInput.value.trim();
    }
    clearInterval(interval);
    totalSeconds = minutes * 60;
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
    var secondsLeft = (totalSeconds - secondsElapsed) % 60;

    var formatSeconds;
    if (secondsLeft < 10) {
        formatSeconds = "0" + secondsLeft;
    } else {
        formatSeconds = secondsLeft
    }
    return formatSeconds;
}
//function and conditionals created to notify the user if time for break || back to work
function renderTime() {
    //when fucntion called, sets the text content for the timer
    minutesDisplay.textContent = formatMinutes();
    secondsDisplay.textContent = formatSeconds();

    //then checks on timer status
    if (secondsElapsed >= totalSeconds) {
        if (status === "Working") {
            alert("Time for a break!");
        } else {
            alert("Get off social media, and back to work!");
        }
        stopTime();
    }
}
/*created a function to stop setInterval() in startTime,
but does not reset the timer*/
function pauseTime() {
    clearInterval(interval);
    renderTime();

}

/*created a function to stop the timer, and will reset the secondsElapsed
and calls "setTime()" that will reset the timer*/
function stopTime() {
    secondsElapsed = 0;
    setTimeout();
    renderTime();

}
/* created a function for the toggle switch. the user 
can switch modes depending on working or rest*/
function toggleStatus(event) {
    var checked = event.target.checked;

    if (checked) {
        status = "working";
    } else {
        status = "break";
    }
    statusSpan.textContent = status;

    secondsElapsed = 0;
    setTime();
    renderTime();
}

function startTimer() {
    // Write code to start the timer here
}

playButton.addEventListener("click", startTimer);
