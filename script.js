// Main JavaScript for DesireConnect
document.addEventListener('DOMContentLoaded', function() {
    // Create additional floating particles
    createFloatingParticles();
    
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
    const animatedElements = document.querySelectorAll('.hero-content, .cta-section, .final-cta-content');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // Add pulsing animation to main button
    const mainBtn = document.querySelector('.btn-large');
    if (mainBtn) {
        setInterval(() => {
            mainBtn.style.transform = 'scale(1.03)';
            setTimeout(() => {
                mainBtn.style.transform = 'scale(1)';
            }, 400);
        }, 2500);
    }
    
    // Add glow effect to logo
    const logo = document.querySelector('.logo');
    setInterval(() => {
        logo.style.textShadow = '0 0 20px rgba(233, 30, 99, 0.8)';
        setTimeout(() => {
            logo.style.textShadow = '0 0 15px rgba(233, 30, 99, 0.6)';
        }, 800);
    }, 3500);
    
    // Add click effect to buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
                // Redirect after animation
                window.location.href = this.href;
            }, 150);
        });
    });
    
    // Add subtle text highlight animation
    const highlight = document.querySelector('.highlight');
    if (highlight) {
        setInterval(() => {
            highlight.style.color = '#ff6b9d';
            setTimeout(() => {
                highlight.style.color = '';
            }, 500);
        }, 4000);
    }
});

// Create floating particles in background
function createFloatingParticles() {
    const particlesContainer = document.querySelector('.floating-particles');
    const particleCount = 6;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = Math.random() * 4 + 2 + 'px';
        particle.style.height = particle.style.width;
        particle.style.background = `rgba(${233 + Math.random() * 20}, ${30 + Math.random() * 20}, ${99 + Math.random() * 20}, ${0.4 + Math.random() * 0.3})`;
        particle.style.borderRadius = '50%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animation = `float ${5 + Math.random() * 5}s ease-in-out infinite`;
        particle.style.animationDelay = Math.random() * 4 + 's';
        
        particlesContainer.appendChild(particle);
    }
}
