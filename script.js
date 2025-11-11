// Testimonial rotation
document.addEventListener('DOMContentLoaded', function() {
    const testimonials = document.querySelectorAll('.testimonial');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentTestimonial = 0;
    let testimonialInterval;
    
    function showTestimonial(index) {
        testimonials[currentTestimonial].classList.remove('active');
        currentTestimonial = index;
        testimonials[currentTestimonial].classList.add('active');
    }
    
    function showNextTestimonial() {
        let nextIndex = (currentTestimonial + 1) % testimonials.length;
        showTestimonial(nextIndex);
    }
    
    function showPrevTestimonial() {
        let prevIndex = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
        showTestimonial(prevIndex);
    }
    
    // Change testimonial every 5 seconds
    function startTestimonialRotation() {
        testimonialInterval = setInterval(showNextTestimonial, 5000);
    }
    
    // Pause rotation when user interacts with controls
    function pauseTestimonialRotation() {
        clearInterval(testimonialInterval);
    }
    
    // Event listeners for manual controls
    nextBtn.addEventListener('click', function() {
        pauseTestimonialRotation();
        showNextTestimonial();
        setTimeout(startTestimonialRotation, 10000); // Restart after 10 seconds
    });
    
    prevBtn.addEventListener('click', function() {
        pauseTestimonialRotation();
        showPrevTestimonial();
        setTimeout(startTestimonialRotation, 10000); // Restart after 10 seconds
    });
    
    // Add particle effect to button on hover
    const btn = document.querySelector('.btn');
    btn.addEventListener('mouseenter', function() {
        const particles = this.querySelector('.btn-particles');
        if (particles) {
            // Create multiple particles
            for (let i = 0; i < 4; i++) {
                setTimeout(() => {
                    const particle = document.createElement('div');
                    particle.style.position = 'absolute';
                    particle.style.width = '6px';
                    particle.style.height = '6px';
                    particle.style.background = 'rgba(255, 255, 255, 0.8)';
                    particle.style.borderRadius = '50%';
                    particle.style.top = `${Math.random() * 80 + 10}%`;
                    particle.style.left = `${Math.random() * 80 + 10}%`;
                    
                    // Random direction
                    const tx = (Math.random() - 0.5) * 40;
                    const ty = (Math.random() - 0.5) * 40;
                    
                    particle.style.setProperty('--tx', `${tx}px`);
                    particle.style.setProperty('--ty', `${ty}px`);
                    particle.style.animation = 'particle 0.6s ease-out forwards';
                    
                    particles.appendChild(particle);
                    
                    // Remove particle after animation
                    setTimeout(() => {
                        if (particle.parentNode === particles) {
                            particles.removeChild(particle);
                        }
                    }, 600);
                }, i * 100);
            }
        }
    });
    
    // Start the testimonial rotation
    startTestimonialRotation();
    
    // Add subtle animation to features on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
            }
        });
    }, observerOptions);
    
    // Observe features for animation
    document.querySelectorAll('.feature').forEach(feature => {
        observer.observe(feature);
    });
});
