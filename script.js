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
    
    // Change testimonial every 6 seconds
    function startTestimonialRotation() {
        testimonialInterval = setInterval(showNextTestimonial, 6000);
    }
    
    // Pause rotation when user interacts with controls
    function pauseTestimonialRotation() {
        clearInterval(testimonialInterval);
    }
    
    // Event listeners for manual controls
    nextBtn.addEventListener('click', function() {
        pauseTestimonialRotation();
        showNextTestimonial();
        setTimeout(startTestimonialRotation, 12000);
    });
    
    prevBtn.addEventListener('click', function() {
        pauseTestimonialRotation();
        showPrevTestimonial();
        setTimeout(startTestimonialRotation, 12000);
    });
    
    // Add particle effect to button on hover
    const btns = document.querySelectorAll('.btn');
    btns.forEach(btn => {
        btn.addEventListener('mouseenter', function() {
            const particles = this.querySelector('.btn-particles');
            if (particles) {
                for (let i = 0; i < 4; i++) {
                    setTimeout(() => {
                        const particle = document.createElement('div');
                        particle.style.position = 'absolute';
                        particle.style.width = '6px';
                        particle.style.height = '6px';
                        particle.style.background = 'rgba(255, 255, 255, 0.9)';
                        particle.style.borderRadius = '50%';
                        particle.style.top = `${Math.random() * 80 + 10}%`;
                        particle.style.left = `${Math.random() * 80 + 10}%`;
                        
                        const tx = (Math.random() - 0.5) * 40;
                        const ty = (Math.random() - 0.5) * 40;
                        
                        particle.style.setProperty('--tx', `${tx}px`);
                        particle.style.setProperty('--ty', `${ty}px`);
                        particle.style.animation = 'particle 0.6s ease-out forwards';
                        
                        particles.appendChild(particle);
                        
                        setTimeout(() => {
                            if (particle.parentNode === particles) {
                                particles.removeChild(particle);
                            }
                        }, 600);
                    }, i * 120);
                }
            }
        });
    });
    
    // Start the testimonial rotation
    startTestimonialRotation();
    
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
    const animatedElements = document.querySelectorAll('.hero-content, .cta-section, .testimonial-section, .final-cta');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});
