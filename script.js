        // Initialize GSAP ScrollTrigger
        gsap.registerPlugin(ScrollTrigger);

        // Typewriter effect
        const text = "Welcome to my Portfolio";
        const typewriter = document.querySelector('.typewriter');
        typewriter.textContent = '';

        function typeText(text, index = 0) {
            if (index < text.length) {
                typewriter.textContent += text[index];
                setTimeout(() => typeText(text, index + 1), 100);
            }
        }

        // Start typing when the page loads
        window.addEventListener('load', () => {
            typeText(text);
        });

        // Particle effect
        function createParticles() {
            const particles = document.getElementById('particles');
            const particleCount = 50;

            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                particle.style.left = Math.random() * 100 + 'vw';
                particle.style.animationDelay = Math.random() * 15 + 's';
                particles.appendChild(particle);
            }
        }

        // GSAP Animations
        function initAnimations() {
            // Skill cards animation
            gsap.from('.skill-card', {
                scrollTrigger: {
                    trigger: '.skills',
                    start: 'top center+=100',
                    toggleActions: 'play none none reverse'
                },
                y: 100,
                opacity: 0,
                duration: 1,
                stagger: 0.2
            });

            // About section animation
            gsap.from('.about-content', {
                scrollTrigger: {
                    trigger: '.about',
                    start:</antArtifact>
    'top center+=100',
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
        }

        // Initialize all scripts
        window.addEventListener('DOMContentLoaded', () => {
            createParticles();
            initAnimations();
        });
