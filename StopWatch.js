var start, elapsed = 0, timeInterval;

document.querySelector("#start").addEventListener("click", startTimer);
document.querySelector("#pause").addEventListener("click", pauseTimer);
document.querySelector("#reset").addEventListener("click", resetTimer);

function startTimer() {
    if (!timeInterval) {
        start = Date.now() - elapsed; 
        timeInterval = setInterval(function() {
            var current = Date.now(); 
            elapsed = current - start; 
            updateDisplay(elapsed);
        }, 10);
    }
}

function pauseTimer() {
    clearInterval(timeInterval);
    timeInterval = null;
}

function resetTimer() {
    clearInterval(timeInterval);
    timeInterval = null;
    elapsed = 0;
    updateDisplay(elapsed);
}

function updateDisplay(time) {
    var milliseconds = Math.floor((time % 1000) / 10);
    var seconds = Math.floor((time / 1000) % 60);
    var minutes = Math.floor((time / 1000 / 60) % 60);
    var hours = Math.floor((time / 1000 / 60 / 60) % 24);
  
    document.getElementById("hr-box").textContent = hours.toString().padStart(2, '0');
    document.getElementById("min-box").textContent = minutes.toString().padStart(2, '0');
    document.getElementById("sec-box").textContent = seconds.toString().padStart(2, '0');
}
