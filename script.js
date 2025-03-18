const targetDate = new Date("2025-04-22T08:10:00+05:30");  // April 22, 2025, 8:10 AM IST

function updateCountdown() {
    try {
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
        document.getElementById("Minutes").innerText = minutes.toString().padStart(2, '0');  // Fixed ID
        document.getElementById("Seconds").innerText = seconds.toString().padStart(2, '0');
    } catch (error) {
        console.error("Countdown Error:", error);
    }
}

// Use requestAnimationFrame for better performance
function countdownLoop() {
    updateCountdown();
    requestAnimationFrame(countdownLoop);
}
countdownLoop();  // Start countdown
