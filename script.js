// Main JavaScript for DesireConnect
document.addEventListener('DOMContentLoaded', function() {
    // Create additional floating particles
    createFloatingParticles();
    
    // Add particle effect to button on hover
    const btns = document.querySelectorAll('.btn');
    btns.forEach(btn => {
        btn.addEventListener('mouseenter', function() {
            createButtonParticles(this);
        });
    });
    
    // Add scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.hero-content, .cta-section, .stats-section, .final-cta');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(el);
    });
    
    // Add pulsing animation to stats
    const stats = document.querySelectorAll('.stat-number');
    stats.forEach(stat => {
        setInterval(() => {
            stat.style.transform = 'scale(1.1)';
            setTimeout(() => {
                stat.style.transform = 'scale(1)';
            }, 300);
        }, 3000);
    });
    
    // Add glow effect to logo
    const logo = document.querySelector('.logo');
    setInterval(() => {
        logo.style.textShadow = '0 0 30px rgba(233, 30, 99, 0.8)';
        setTimeout(() => {
            logo.style.textShadow = '0 0 20px rgba(233, 30, 99, 0.6)';
        }, 1000);
    }, 4000);
});

// Create floating particles in background
function createFloatingParticles() {
    const particlesContainer = document.querySelector('.floating-particles');
    const particleCount = 8;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = Math.random() * 6 + 2 + 'px';
        particle.style.height = particle.style.width;
        particle.style.background = `rgba(${233 + Math.random() * 20}, ${30 + Math.random() * 20}, ${99 + Math.random() * 20}, ${0.5 + Math.random() * 0.3})`;
        particle.style.borderRadius = '50%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animation = `float ${6 + Math.random() * 6}s ease-in-out infinite`;
        particle.style.animationDelay = Math.random() * 5 + 's';
        
        particlesContainer.appendChild(particle);
    }
}

// Create particle effect for buttons
function createButtonParticles(button) {
    const particles = button.querySelector('.btn-particles');
    if (particles) {
        for (let i = 0; i < 6; i++) {
            setTimeout(() => {
                const particle = document.createElement('div');
                particle.style.position = 'absolute';
                particle.style.width = '8px';
                particle.style.height = '8px';
                particle.style.background = 'rgba(255, 255, 255, 0.9)';
                particle.style.borderRadius = '50%';
                particle.style.top = `${Math.random() * 70 + 15}%`;
                particle.style.left = `${Math.random() * 70 + 15}%`;
                
                const tx = (Math.random() - 0.5) * 60;
                const ty = (Math.random() - 0.5) * 60;
                
                particle.style.setProperty('--tx', `${tx}px`);
                particle.style.setProperty('--ty', `${ty}px`);
                particle.style.animation = 'particle 0.8s ease-out forwards';
                
                particles.appendChild(particle);
                
                setTimeout(() => {
                    if (particle.parentNode === particles) {
                        particles.removeChild(particle);
                    }
                }, 800);
            }, i * 100);
        }
    }
}

// Add typing effect to hero text
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}
