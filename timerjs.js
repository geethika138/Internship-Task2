let countdown;
let timeLeft = { hours: 0, minutes: 0, seconds: 0 };

const timerDisplay = {
    days: document.getElementById('days'),
    hours: document.getElementById('hours'),
    minutes: document.getElementById('minutes'),
    seconds: document.getElementById('seconds')
};

function updateDisplay() {
    const { hours, minutes, seconds } = timeLeft;
    timerDisplay.hours.textContent = String(hours).padStart(2, '0');
    timerDisplay.minutes.textContent = String(minutes).padStart(2, '0');
    timerDisplay.seconds.textContent = String(seconds).padStart(2, '0');
}

function startTimer() {
    const hours = parseInt(document.getElementById('hoursInput').value, 10) || 0;
    const minutes = parseInt(document.getElementById('minutesInput').value, 10) || 0;
    const seconds = parseInt(document.getElementById('secondsInput').value, 10) || 0;

    timeLeft = { hours, minutes, seconds };
    updateDisplay();

    countdown = setInterval(() => {
        if (timeLeft.seconds > 0) {
            timeLeft.seconds--;
        } else if (timeLeft.minutes > 0) {
            timeLeft.seconds = 59;
            timeLeft.minutes--;
        } else if (timeLeft.hours > 0) {
            timeLeft.minutes = 59;
            timeLeft.seconds = 59;
            timeLeft.hours--;
        } else {
            clearInterval(countdown);
            alert("Time's up!");
        }

        updateDisplay();
    }, 1000);
}

function stopTimer() {
    clearInterval(countdown);
}

function resetTimer() {
    clearInterval(countdown);
    timeLeft = { hours: 0, minutes: 0, seconds: 0 };
    updateDisplay();
}

function restartTimer() {
    stopTimer();
    startTimer();
}

document.getElementById('startButton').addEventListener('click', startTimer);
document.getElementById('stopButton').addEventListener('click', stopTimer);
document.getElementById('resetButton').addEventListener('click', resetTimer);
document.getElementById('restartButton').addEventListener('click', restartTimer);
