        // Initialize GSAP ScrollTrigger
        gsap.registerPlugin(ScrollTrigger);

        // Typewriter effect
        const text = "Welcome to my Portfolio";
        const typewriter = document.querySelector('.typewriter');
        let currentTimeout = null;

        function typeText(text, index = 0) {
            if (index < text.length) {
                typewriter.textContent += text[index];
                currentTimeout = setTimeout(() => typeText(text, index + 1), 100);
            }
        }

        // Reset and start typing animation
        function resetTypewriter() {
            if (currentTimeout) {
                clearTimeout(currentTimeout);
            }
            typewriter.textContent = '';
            typeText(text);
        }

// ... (previous code remains the same until createParticles function)

// Particle effect
function createParticles() {
    const particles = document.getElementById('particles');
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + 'vw';
        particle.style.animationDelay = Math.random() * 15 + 's';
        particle.style.opacity = Math.random() * 0.5 + 0.2;
        particles.appendChild(particle);
    }
}

// Initialize GSAP animations
function initAnimations() {
    // Fade in hero content
    gsap.from('.hero-content', {
        opacity: 0,
        y: 50,
        duration: 1.5,
        ease: 'power3.out'
    });

    // About section animation
    gsap.from('.about-content', {
        scrollTrigger: {
            trigger: '.about',
            start: 'top center+=100',
            toggleActions: 'play none none reverse'
        },
        x: -100,
        opacity: 0,
        duration: 1
    });

    gsap.from('.about-image', {
        scrollTrigger: {
            trigger: '.about',
            start: 'top center+=100',
            toggleActions: 'play none none reverse'
        },
        x: 100,
        opacity: 0,
        duration: 1
    });

    // Contact form animation
    gsap.from('.contact-form', {
        scrollTrigger: {
            trigger: '.contact',
            start: 'top center+=100',
            toggleActions: 'play none none reverse'
        },
        scale: 0.8,
        opacity: 0,
        duration: 1
    });
    
    gsap.from('.footer-content', {
    scrollTrigger: {
        trigger: '.footer',
        start: 'top bottom',
        toggleActions: 'play none none reverse'
    },
    y: 20,
    opacity: 0,
    duration: 1
});

}

// Mobile menu functionality
function initMobileMenu() {
    const menuBtn = document.querySelector('.menu-btn');
    const nav = document.querySelector('nav');
    let isOpen = false;

    menuBtn.addEventListener('click', () => {
        if (!isOpen) {
            nav.style.display = 'flex';
            nav.style.position = 'absolute';
            nav.style.top = '70px';
            nav.style.right = '20px';
            nav.style.flexDirection = 'column';
            nav.style.backgroundColor = 'var(--darker)';
            nav.style.padding = '20px';
            nav.style.borderRadius = '10px';
            nav.style.boxShadow = '0 0 20px rgba(255, 215, 0, 0.2)';
        } else {
            nav.style.display = 'none';
        }
        isOpen = !isOpen;
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (isOpen && !nav.contains(e.target) && !menuBtn.contains(e.target)) {
            nav.style.display = 'none';
            isOpen = false;
        }
    });

    // Close menu when clicking on a link
    nav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                nav.style.display = 'none';
                isOpen = false;
            }
        });
    });
}

// Form submission handler
function initFormHandler() {
    const form = document.querySelector('.contact-form');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Add your form submission logic here
        // For example, you could show a success message:
        const button = form.querySelector('button');
        const originalText = button.textContent;
        
        button.textContent = 'Message Sent!';
        button.style.backgroundColor = '#4CAF50';
        
        setTimeout(() => {
            button.textContent = originalText;
            button.style.backgroundColor = '';
            form.reset();
        }, 3000);
    });
}

// Initialize everything when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    createParticles();
    initAnimations();
    initMobileMenu();
    initFormHandler();
    resetTypewriter();
});

// Reinitialize typewriter when scrolling back to hero section
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            resetTypewriter();
        }
    });
}, { threshold: 0.5 });

observer.observe(document.querySelector('.hero'));