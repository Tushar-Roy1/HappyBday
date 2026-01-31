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
  document.getElementById("loveMessage").classList.remove("hidden");
  document.getElementById("photoSlider").classList.remove("hidden");
  document.body.classList.add("surprise-active");

  startSlideshow();

  // Fireworks
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

  // Hearts
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
const birthday = new Date("Feb 2, 2026 00:00:00").getTime();
setInterval(() => {
  const now = new Date().getTime();
  const gap = birthday - now;
  document.getElementById("days").innerText = Math.floor(gap / (1000*60*60*24));
  document.getElementById("hours").innerText = Math.floor((gap/(1000*60*60))%24);
  document.getElementById("minutes").innerText = Math.floor((gap/1000/60)%60);
  document.getElementById("seconds").innerText = Math.floor((gap/1000)%60);
}, 1000);

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
