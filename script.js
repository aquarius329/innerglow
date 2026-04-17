let points = 0;

const bubble = document.getElementById("bubble");
const message = document.getElementById("message");
const pointsText = document.getElementById("points");

const messages = [
  "Breathe in... 🌿",
  "Let it go 💫",
  "You’re doing great 💖",
  "Relax your mind 🌸",
  "Peace is within you ✨"
];

bubble.addEventListener("click", () => {
  points++;

  // Change message
  const randomMessage = messages[Math.floor(Math.random() * messages.length)];
  message.innerText = randomMessage;

  // Update points
  pointsText.innerText = "Points: " + points;

  // Play sound
  const sound = new Audio("https://www.fesliyanstudios.com/play-mp3/387");
  sound.play();

  // Animate bubble
  bubble.style.transform = "scale(0.7)";
  setTimeout(() => {
    bubble.style.transform = "scale(1)";
  }, 100);
});