let timer;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let running = false;

function startStopwatch() {
    if (!running) {
        running = true;
        timer = setInterval(updateTime, 10);
    }
}

function pauseStopwatch() {
    running = false;
    clearInterval(timer);
}

function resetStopwatch() {
    running = false;
    clearInterval(timer);
    minutes = seconds = milliseconds = 0;
    updateDisplay();
    document.getElementById('laps').innerHTML = '';
}

function updateTime() {
    milliseconds++;
    if (milliseconds === 100) {
        milliseconds = 0;
        seconds++;
    }
    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('minutes').innerText = formatTime(minutes);
    document.getElementById('seconds').innerText = formatTime(seconds);
    document.getElementById('milliseconds').innerText = formatTime(milliseconds);
}

function formatTime(time) {
    return time < 10 ? '0' + time : time;
}