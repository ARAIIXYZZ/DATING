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
                
                // Add special animation for benefit cards
                if (entry.target.classList.contains('benefit-card')) {
                    entry.target.style.animation = 'cardSlideUp 0.6s ease forwards';
                }
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.hero-content, .cta-section, .benefit-card, .final-cta-content');
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
    
    // Add hover effect to benefit cards
    const benefitCards = document.querySelectorAll('.benefit-card');
    benefitCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const icon = this.querySelector('.benefit-icon');
            icon.style.transform = 'rotate(8deg) scale(1.05)';
            icon.style.transition = 'transform 0.3s ease';
        });
        
        card.addEventListener('mouseleave', function() {
            const icon = this.querySelector('.benefit-icon');
            icon.style.transform = 'rotate(0) scale(1)';
        });
    });
    
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

// Add CSS animation for card slide up
const style = document.createElement('style');
style.textContent = `
    @keyframes cardSlideUp {
        0% {
            opacity: 0;
            transform: translateY(20px);
        }
        100% {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);
