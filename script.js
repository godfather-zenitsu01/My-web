document.addEventListener("DOMContentLoaded", () => {
  // Typewriter Effect
  const phrases = ["Web Developer", "Designer", "Creative Coder"];
  let i = 0;
  let j = 0;
  let currentPhrase = [];
  const typingSpeed = 150;
  const erasingSpeed = 100;
  const target = document.getElementById("typing");

  function loop() {
    if (i < phrases.length) {
      if (j < phrases[i].length) {
        currentPhrase.push(phrases[i][j]);
        j++;
        target.innerHTML = currentPhrase.join("");
        setTimeout(loop, typingSpeed);
      } else {
        setTimeout(() => {
          currentPhrase.pop();
          target.innerHTML = currentPhrase.join("");
          j--;
          if (j === 0) {
            i++;
            loop();
          } else {
            setTimeout(loop, erasingSpeed);
          }
        }, 1500);
      }
    } else {
      i = 0;
      loop();
    }
  }
  loop();

  // GSAP Animations
  gsap.from(".title", { duration: 2, opacity: 0, y: -50 });
  gsap.from(".subtitle", { duration: 2, opacity: 0, y: 50, delay: 0.5 });
  gsap.from(".profile-img", { duration: 2, opacity: 0, scale: 0.5, delay: 1 });
  gsap.from(".card", {
    duration: 1.5,
    opacity: 0,
    scale: 0.8,
    stagger: 0.2,
    delay: 1.5,
  });
});