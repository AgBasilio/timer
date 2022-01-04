const timerStatusValues = {
    "Stoped" : 0,
    "Started" : 1
};
const startStopButtonLabel = {
    "Stop" : "Stop",
    "Start" : "Start"
}
const sessionSelectorOptions = {
    "Main" : 0,
    "Break" : 1
}
Object.freeze(timerStatusValues);
Object.freeze(startStopButtonLabel);

let timerStatus = timerStatusValues.Stoped;

let intervalId;
const timerSeconds = document.getElementById("timer-seconds");
const timerMinutes = document.getElementById("timer-minutes");
const startStopButton = document.getElementById("btnStarstop");
const sessionSelector = document.getElementById("session-selector");

document.getElementById("session-minutes").addEventListener("change", () => 
{
    setTimer();
});

document.getElementById("session-selector").addEventListener("change", () => 
{
    setTimer();
});

const setTimer = () => {
    const sessionTimer = JSON.parse(document.getElementById("session-minutes").value);
    const breakTimer = JSON.parse(document.getElementById("break-minutes").value);
    timerMinutes.value = sessionSelector.value === sessionSelectorOptions.Break ? breakTimer : sessionTimer;
    
    timerSeconds.value = "00";
}

const performAction = () => {
    if (timerStatus == timerStatusValues.Stoped){
        startTimer();
    }
    else{
        stopTimer();
    }

}

//every second decrese 1 the second variable and show it in the ouput, when it's 0 restart to 59 and 
//decrese 1 munite. If the minutes variable is alredy 0, then the timer finish.
const startTimer = () => {
    timerStatus = timerStatusValues.Started;
    startStopButton.value = startStopButtonLabel.Stop;
    intervalId = setInterval( () => {
        if (timerSeconds.value > 0) {
            timerSeconds.value -= 1;
         }
         else if (timerMinutes.value > 0)
         {
            timerMinutes.value -= 1;
            timerSeconds.value = "59";
         }
         else
         {
             stopTimer();
         }
    }, 1000);
}

const resetTimers = () =>{
    setTimer();
}


const stopTimer = () => {
    clearInterval(intervalId);
    timerStatus = timerStatusValues.Stoped;
    startStopButton.value = startStopButtonLabel.Start;
}