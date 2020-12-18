var statusSpan = document.querySelector("#status");
var statusToggle = document.querySelector("#status-toggle");
var playButton = document.querySelector("#play");
var pauseButton = document.querySelector("#pause");
var stopButton = document.querySelector("#stop");
var minutesDisplay = document.querySelector("#minutes");
var secondsDisplay = document.querySelector("#seconds");
var workMinutesInput = document.querySelector("#work-minutes");
var restMinutesInput = document.querySelector("#rest-minutes");
var inputs = document.querySelector(".inputs")

var totalSeconds = 0;
var secondsElapsed = 0;
var status = "woking";
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
function formattedMinutes() {
    var secondsLeft = totalSeconds - secondsElapsed;

    var minutesLeft = Math.floor(secondsLeft / 60);

    var formattedMinutes;

    if (minutesLeft < 10) {
        formattedMinutes = "0" + minutesLeft;
    } else {
        formattedMinutes = minutesLeft
    }
    return formattedMinutes;
}

function formattedSeconds() {
    var secondsLeft = (totalSeconds - secondsElapsed) % 60;

    var formattedSeconds;
    if (secondsLeft < 10) {
        formattedSeconds = "0" + secondsLeft;
    } else {
        formattedSeconds = secondsLeft
    }
    return formattedSeconds;
}
//function and conditionals created to notify the user if time for break || back to work
function renderTime() {
    //when function called, sets the text content for the timer
    minutesDisplay.textContent = formattedMinutes();
    secondsDisplay.textContent = formattedSeconds();

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
    setTime();
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
    setTime();
    if (totalSeconds > 0) {
        interval = setInterval(function () {
            secondsElapsed++;
            renderTime();
        }, 1000);
    } else {
        alert("Invalid input, minutes must be greater than zero.")
    }
}
// created a function for local storage.
function setTimePreferences() {
    localStorage.setItem(
        "preferences",
        JSON.stringify({
            workMinutes: workMinutesInput.value.trim(),
            restMinutes: restMinutesInput.value.trim(),
        })
    );
}
//checked to see if any prefrences have been setin local storage
function getTimePreferences() {
    var prefrence = JSON.parse(localStorage.getItem("prefrences"));
    if (prefrences) {
        if (prefrences.workMinutes) {
            workMinutesInput.vaue = prefrences.workMinutes;
        }
    }
    setTime();
    renderTime();
}

playButton.addEventListener("click", startTimer);
pauseButton.addEventListener("click", pauseTime);
stopButton.addEventListener("click", stopTime);
statusToggle.addEventListener("change", toggleStatus);
inputs.addEventListener("change", setTimePreferences);
inputs.addEventListener("keyup", setTimePreferences);