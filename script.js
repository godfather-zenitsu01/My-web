// script.js

// ... (existing typewriter effect code) ...

// Add smooth scrolling for sections with GSAP
gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray('section[id]').forEach(section => {
  gsap.fromTo(section, { opacity: 0 }, { 
    opacity: 1, 
    scrollTrigger: { 
      trigger: section, 
      start: 'top 80%', 
      end: 'top 20%', 
      scrub: 2 
    } 
  });
});

// Optional: Add a parallax effect for the hero section
gsap.to('.hero-image', { 
  y: -10, 
  scrollTrigger: { 
    trigger: '.hero', 
    start: 'top center', 
    end: 'top -20%', 
    scrub: 2 
  } 
});
