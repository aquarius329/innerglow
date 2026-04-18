let coins = 0;
let unlockedThemes = ["default"];

document.body.classList.add("default");

function showScreen(screen) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.getElementById(screen).classList.add("active");

  document.getElementById("coins2").innerText = coins;
}

const bubble = document.getElementById("bubble");
const message = document.getElementById("message");
const coinsText = document.getElementById("coins");
const companion = document.getElementById("companion");

const messages = [
  "Breathe 🌿",
  "Relax 💫",
  "You’re safe 💖",
  "Let go 🌸",
  "Calm ✨"
];

const faces = ["😊","🥰","😌","💖","✨"];

bubble.addEventListener("click", () => {

  coins++;
  coinsText.innerText = coins;

  message.innerText = messages[Math.floor(Math.random()*messages.length)];
  companion.innerText = faces[Math.floor(Math.random()*faces.length)];

  // SOUND
  let sound = new Audio("https://www.fesliyanstudios.com/play-mp3/387");
  sound.play();

});

/* SHOP SYSTEM */
function buyTheme(theme) {

  if(theme === "dark" && coins >= 10) {
    coins -= 10;
    unlockedThemes.push("dark");
    document.body.className = "dark";
  }

  else if(theme === "dream" && coins >= 20) {
    coins -= 20;
    unlockedThemes.push("dream");
    document.body.className = "dream";
  }

  else {
    alert("Not enough coins!");
  }

  document.getElementById("coins").innerText = coins;
  document.getElementById("coins2").innerText = coins;
}