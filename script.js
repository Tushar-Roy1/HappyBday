function revealBirthdayContent() {
  const today = new Date();
  const day = today.getDate();
  const month = today.getMonth() + 1;

  if (day === 2 && month === 2) {
    document.getElementById("birthdayContent").classList.remove("hidden");
  }
}

// Run when page loads
window.onload = revealBirthdayContent;

function checkDate() {
  const today = new Date();
  const day = today.getDate();
  const month = today.getMonth() + 1;

  if (day === 2 && month === 2) {
    startSurprise();
  } else {
    document.getElementById("waitMessage").innerText =
      "Shhh… your surprise unlocks on 2nd Feb 🎁💖";
  }
}

function startSurprise() {
  // Show love message
  document.getElementById("loveMessage").classList.remove("hidden");

  // Show photos
  document.getElementById("photoSlider").classList.remove("hidden");

  // Change background
  document.body.classList.add("surprise-active");

  // Start slideshow
  startSlideshow();

  // 🎆 Fireworks
  for (let i = 0; i < 40; i++) {
    let fw = document.createElement("div");
    fw.className = "firework";
    fw.style.left = "50%";
    fw.style.top = "50%";
    fw.style.setProperty('--x', (Math.random() - 0.5) * 500 + "px");
    fw.style.setProperty('--y', (Math.random() - 0.5) * 500 + "px");
    document.body.appendChild(fw);
    setTimeout(() => fw.remove(), 1000);
  }

  // 💖 Floating hearts
  for (let i = 0; i < 20; i++) {
    let heart = document.createElement("div");
    heart.innerHTML = "💖";
    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "100vh";
    heart.style.fontSize = "24px";
    heart.style.animation = "floatUp 4s linear forwards";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 4000);
  }

  // 💌 Show 50 Reasons box
  document.getElementById("reasonsBox").classList.remove("hidden");

  const list = document.getElementById("reasonsList");
  list.innerHTML = "";

  reasons.forEach((reason, index) => {
    setTimeout(() => {
      const li = document.createElement("li");
      li.textContent = reason;
      list.appendChild(li);
    }, index * 200);
  });
}


// Slideshow
function startSlideshow() {
  let slides = document.querySelectorAll(".slide");
  let index = 0;
  setInterval(() => {
    slides[index].classList.remove("active");
    index = (index + 1) % slides.length;
    slides[index].classList.add("active");
  }, 3000);
}

// Countdown
// const birthday = new Date("Feb 2, 2026 00:00:00").getTime();
// setInterval(() => {
//   const now = new Date().getTime();
//   const gap = birthday - now;
//   document.getElementById("days").innerText = Math.floor(gap / (1000*60*60*24));
//   document.getElementById("hours").innerText = Math.floor((gap/(1000*60*60))%24);
//   document.getElementById("minutes").innerText = Math.floor((gap/1000/60)%60);
//   document.getElementById("seconds").innerText = Math.floor((gap/1000)%60);
// }, 1000);

// Balloons
const balloonContainer = document.querySelector(".balloons");
for (let i = 0; i < 15; i++) {
  let b = document.createElement("img");
  b.src = "https://cdn-icons-png.flaticon.com/512/3468/3468377.png";
  b.className = "balloon";
  b.style.left = Math.random() * 100 + "vw";
  b.style.animationDuration = (6 + Math.random()*5) + "s";
  balloonContainer.appendChild(b);
}

// Cakes
const cakeContainer = document.querySelector(".cakes");
for (let i = 0; i < 12; i++) {
  let c = document.createElement("div");
  c.className = "cake";
  c.innerHTML = "🎂";
  c.style.left = Math.random() * 100 + "vw";
  c.style.animationDuration = (8 + Math.random()*5) + "s";
  cakeContainer.appendChild(c);
}
document.getElementById("introScreen").addEventListener("click", function () {
  const music = document.getElementById("bgMusic");
  music.play();

  this.style.opacity = "0";
  setTimeout(() => this.style.display = "none", 800);
});
const reasons = [
"I love your smile — it fixes my worst days.",
"I love how your laugh sounds like happiness.",
"I love how you care about people.",
"I love how you listen to me even when I talk nonsense.",
"I love how you make ordinary days feel special.",
"I love your eyes — they hold a whole universe.",
"I love your kindness even when no one is watching.",
"I love how you support me without hesitation.",
"I love your cute anger.",
"I love how safe I feel when I talk to you.",
"I love how you remember little things about me.",
"I love how you make me want to be a better person.",
"I love your voice -it calms me instantly.",
"I love the way you say my name.",
"I love your sleepy face.",
"I love how excited you get about small joys.",
"I love your honesty.",
"I love how you trust me.",
"I love how strong you are even when things are hard.",
"I love your soft heart.",
"I love how you look when you’re lost in your thoughts.",
"I love how you make me laugh when I don’t want to.",
"I love your hugs — they feel like home.",
"I love how you forgive.",
"I love your random mood swings 😄.",
"I love how you care for your family.",
"I love how beautiful you are without trying.",
"I love how you make my world brighter.",
"I love your confidence.",
"I love the way you walk.",
"I love your late-night talks.",
"I love how you believe in me.",
"I love how you look at me without saying anything.",
"I love how you make me feel chosen.",
"I love how you turn silence into comfort.",
"I love how you make everything feel okay.",
"I love your cute little habits.",
"I love how warm your presence feels.",
"I love how you make me miss you after 5 minutes.",
"I love your style.",
"I love your patience with me.",
"I love how you understand my moods.",
"I love your sweet good morning messages.",
"I love your goodnight texts.",
"I love how you make me feel lucky.",
"I love how you light up a room.",
"I love your dreams and ambitions.",
"I love how real you are.",
"I love how you make love feel easy.",
"I love you… simply because you are YOU ❤️"
];
