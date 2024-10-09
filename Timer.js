let day = document.getElementById("day-box");
let hr = document.getElementById("hr-box");
let min = document.getElementById("min-box");
let sec = document.getElementById("sec-box");

// Set a specific end date for the countdown (e.g., January 1, 2025)
let endDay = new Date(2024, 11, 28, 0, 0); // January is 0 in JavaScript
let endTime = endDay.getTime();

function countdown() {
    let today = new Date();
    let tTime = today.getTime();
    let remaining = endTime - tTime;
    let minute = 60 * 1000;
    let hour = 60 * minute;
    let dayMs = 24 * hour;     

    let zero = (num) => (num < 10 ? `0${num}` : num);

    // Check if the countdown has expired
    if (remaining <= 0) {
        clearInterval(i);
        document.querySelector(".countdown").innerHTML = "<h1>Countdown Has Expired</h1>";
    } else {
        let daysLeft = Math.floor(remaining / dayMs);
        let hoursLeft = Math.floor((remaining % dayMs) / hour);
        let minutesLeft = Math.floor((remaining % hour) / minute);
        let secondsLeft = Math.floor((remaining % minute) / 1000);
        
        // Update the displayed values
        day.textContent = zero(daysLeft);
        hr.textContent = zero(hoursLeft);
        min.textContent = zero(minutesLeft);
        sec.textContent = zero(secondsLeft);
    }
}

// Set the countdown to run every second
let i = setInterval(countdown, 1000);
countdown();
