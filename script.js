let time = 0;
let timer;
let isRunning = false;

function updateTimer() {
    const hours = Math.floor (time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    document.getElementById('timer').textContent =
    `${hours < 10 ? '0' + hours : hours}:` +
    `${minutes < 10 ? '0' + minutes : minutes}:` +
    `${seconds < 10 ? '0' + seconds : seconds}`;
}

function startTimer() {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(() => {
            time++;
            updateTimer();
        }, 1000);
    }
}

function pauseTimer () {
    isRunning = false;
    clearInterval(timer)
}

function resetTimer () {
    isRunning = false;
    clearInterval(timer);
    time = 0;
    updateTimer ()
}