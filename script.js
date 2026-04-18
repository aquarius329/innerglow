/* TRANSFORMATION HIGHLIGHTS:
   - Pre-loaded Audio: No more lag on click.
   - Haptic Feedback: Using the Vibration API for mobile users.
   - Refined Logic: Cleaner message rotation.
   - CSS-Driven Animation: Faster and smoother performance.
*/

// 1. DOM Elements
const bubble = document.getElementById("bubble");
const message = document.getElementById("message");
const coinsText = document.getElementById("coins");

// 2. Data State
let coins = 0;
const messages = [
  "Breathe in… 🌿",
  "Let it go… 💫",
  "You are safe 💖",
  "Relax your shoulders 🌸",
  "Peace is here ✨",
  "You're doing amazing 🦋" // Added a new gentle one
];

// 3. Efficiency: Pre-load the sound once
// This prevents the "new Audio" lag on every tap
const tapSound = new Audio("https://www.fesliyanstudios.com/play-mp3/387");
tapSound.volume = 0.4; // Softer, more "spa-like" volume

// 4. The Interaction Logic
bubble.addEventListener("click", () => {
  // Update state
  coins++;
  coinsText.textContent = coins; // .textContent is slightly faster than .innerText

  // Change message with a more modern "random" selection
  const randomMessage = messages[Math.floor(Math.random() * messages.length)];
  message.textContent = randomMessage;

  // Play pre-loaded sound
  tapSound.currentTime = 0; // Reset sound to start if clicked rapidly
  tapSound.play().catch(e => console.log("Audio needs user interaction first."));

  // Haptic Feedback (Vibrates slightly on Android phones)
  if (navigator.vibrate) {
    navigator.vibrate(10); 
  }

  // Purely Visual: Let's handle the "pop" via a CSS class 
  // rather than inline styles for better performance
  triggerPulse();
});
function startGame() {
  document.getElementById("home").classList.remove("active");
  document.getElementById("game").classList.add("active");
}

function goHome() {
  document.getElementById("game").classList.remove("active");
  document.getElementById("home").classList.add("active");
}
function triggerPulse() {
  bubble.classList.remove("tap-animate");
  void bubble.offsetWidth; // This "magic line" triggers a reflow to restart animation
  bubble.classList.add("tap-animate");
}
