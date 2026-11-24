const words = ["clean websites.", "responsive layouts.", "interactive apps."];
const typedEl = document.getElementById("typed");

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
  const word = words[wordIndex];
  typedEl.textContent = word.slice(0, charIndex);


  if (!isDeleting && charIndex === word.length) {
    isDeleting = true;
    setTimeout(type, 1400);
    return;
  }

  if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
  }

  charIndex += isDeleting ? -1 : 1;
  setTimeout(type, isDeleting ? 40 : 90);
}

type();


const themeToggle = document.getElementById("theme-toggle");
const root = document.documentElement;

let savedTheme = null;
try {
  savedTheme = localStorage.getItem("theme");
} catch (error) {}

if (savedTheme === "dark") {
  root.dataset.theme = "dark";
  themeToggle.textContent = "☀️";
}

themeToggle.addEventListener("click", () => {
  const goDark = root.dataset.theme !== "dark";

  root.dataset.theme = goDark ? "dark" : "light";
  themeToggle.textContent = goDark ? "☀️" : "🌙";

  try {
    localStorage.setItem("theme", root.dataset.theme);
  } catch (error) {}
});

const form = document.getElementById("contact-form");
const statusEl = document.getElementById("form-status");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();
  const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (!name || !emailIsValid || message.length < 10) {
    statusEl.className = "error";
    statusEl.textContent =
      "Enter your name, a valid email, and a message of at least 10 characters.";
    return;
  }

  statusEl.className = "ok";
  statusEl.textContent = `Thanks, ${name}! Your message is ready to send.`;
  form.reset();
});


document.getElementById("year").textContent = new Date().getFullYear();