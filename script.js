// script.js

// Typewriter effect
const typewriter = document.querySelector('.typewriter');
const textArray = ['Hello, I\'m Zenitsu!', 'A passionate web developer.'];
let currentIndex = 0;
let charIndex = 0;

function type() {
  const currentText = textArray[currentIndex];
  if (charIndex < currentText.length) {
    typewriter.textContent += currentText.charAt(charIndex);
    charIndex++;
    setTimeout(type, 50); // Adjust typing speed here
  } else {
    setTimeout(() => {
      typewriter.textContent = '';
      currentIndex = (currentIndex + 1) % textArray.length;
      charIndex = 0;
      type();
    }, 2000); // Adjust delay between text changes here
  }
}

type();

// Smooth scrolling
const sections = document.querySelectorAll('section[id]');

function scrollToSection(event) {
  event.preventDefault();
  const targetID = this.getAttribute('href').substring(1); // Remove '#'
  const section = document.getElementById(targetID);
  section.scrollIntoView({ behavior: 'smooth' });
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', scrollToSection);
});

// Optional: Add more interactive elements here using JavaScript
// (e.g., hover effects, animations, form validation, etc.)
