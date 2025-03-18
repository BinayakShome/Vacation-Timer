// Target date: April 22, 2025, 8:00 AM IST
const targetDate = new Date("2025-04-22T02:30:00Z");

function updateCountdown() {
    const now = new Date();
    const timeLeft = targetDate - now;

    if (timeLeft <= 0) {
        document.querySelector(".countdown").innerHTML = "<h2>🎉 Time's up! 🎊</h2>";
        return;
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("Days").innerText = days.toString().padStart(2, '0');
    document.getElementById("Hours").innerText = hours.toString().padStart(2, '0');
    document.getElementById("Minutes").innerText = minutes.toString().padStart(2, '0');
    document.getElementById("Seconds").innerText = seconds.toString().padStart(2, '0');
}

// Update the countdown every second
setInterval(updateCountdown, 1000);
updateCountdown();  // Initial call to display countdown immediately
