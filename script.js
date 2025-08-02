// Age counter animation
const ageCounter = document.getElementById('age-counter');
const targetAge = 19;
let currentAge = 0;

const ageInterval = setInterval(() => {
    currentAge++;
    ageCounter.textContent = currentAge;

    if(currentAge === targetAge) {
        clearInterval(ageInterval);
    }
}, 100);

// Countdown timer
function updateCountdown() {
    const now = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(now.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);

    const diff = tomorrow - now;

    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.querySelectorAll('.countdown-number')[0].textContent = hours.toString().padStart(2, '0');
    document.querySelectorAll('.countdown-number')[1].textContent = minutes.toString().padStart(2, '0');
    document.querySelectorAll('.countdown-number')[2].textContent = seconds.toString().padStart(2, '0');
}

setInterval(updateCountdown, 1000);
updateCountdown();

// Confetti effect
document.getElementById('confetti-btn').addEventListener('click', () => {
    const container = document.getElementById('confetti-container');
    container.innerHTML = '';

    for(let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.top = -10 + 'px';
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        confetti.style.opacity = '1';

        container.appendChild(confetti);

        const duration = Math.random() * 3 + 2;
        const rotation = Math.random() * 360;

        confetti.animate([
            { top: '-10px', transform: `rotate(0deg)`, opacity: '1' },
            { top: '100vh', transform: `rotate(${rotation}deg)`, opacity: '0' }
        ], {
            duration: duration * 1000,
            easing: 'cubic-bezier(0.1, 0.8, 0.3, 1)'
        });

        setTimeout(() => {
            confetti.remove();
        }, duration * 1000);
    }
});
