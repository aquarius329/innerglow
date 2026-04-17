let coins = 0;

const bubble = document.getElementById("bubble");
const message = document.getElementById("message");
const coinsText = document.getElementById("coins");

const messages = [
  "Breathe in… 🌿",
  "Let it go… 💫",
  "You are safe 💖",
  "Relax your shoulders 🌸",
  "Peace is here ✨"
];

bubble.addEventListener("click", () => {

  coins++;
  coinsText.innerText = coins;

  message.innerText =
    messages[Math.floor(Math.random() * messages.length)];

  // soft sound
  const sound = new Audio("https://www.fesliyanstudios.com/play-mp3/387");
  sound.play();

  // gentle animation
  bubble.style.transform = "scale(0.9)";
  setTimeout(() => {
    bubble.style.transform = "scale(1)";
  }, 100);

});