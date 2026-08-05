const words = [
  "Web Developer",
  "Programmer",
  "Freelancer",
  "Portfolio Designer"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typingEffect() {
  const typing = document.getElementById("typing");
  const currentWord = words[wordIndex];

  if (!deleting) {
    typing.textContent = currentWord.substring(0, charIndex++);
    if (charIndex > currentWord.length) {
      deleting = true;
      setTimeout(typingEffect, 1200);
      return;
    }
  } else {
    typing.textContent = currentWord.substring(0, charIndex--);
    if (charIndex < 0) {
      deleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      charIndex = 0;
    }
  }

  setTimeout(typingEffect, deleting ? 60 : 120);
}

typingEffect();

function showMessage() {
  document.getElementById("message").innerHTML =
    "📩 Thanks for visiting my portfolio website!";
}