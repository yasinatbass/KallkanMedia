// Intersection Observer for Scroll Reveal Animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            // Optional: Stop observing once revealed
            // observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Initialize observer when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const revealElements = document.querySelectorAll('.scroll-reveal');
    revealElements.forEach(el => observer.observe(el));
    
    // Initialize Feather Icons
    if (typeof feather !== 'undefined') {
        feather.replace();
    }
    
    // Smooth scroll for anchor links (polyfill for older browsers)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Form Submission Handler
function handleSubmit(event) {
    event.preventDefault();
    
    const form = event.target;
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    
    // Simulate loading state
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<span class="animate-spin inline-block mr-2">⟳</span> Sending...';
    
    // Simulate API call
    setTimeout(() => {
        submitBtn.innerHTML = '<i data-feather="check" class="w-4 h-4 inline mr-2"></i> Message Sent!';
        submitBtn.classList.remove('bg-accent');
        submitBtn.classList.add('bg-green-600');
        
        if (typeof feather !== 'undefined') {
            feather.replace();
        }
        
        // Reset form after delay
        setTimeout(() => {
            form.reset();
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalText;
            submitBtn.classList.remove('bg-green-600');
            submitBtn.classList.add('bg-accent');
            
            if (typeof feather !== 'undefined') {
                feather.replace();
            }
        }, 3000);
    }, 1500);
}

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.querySelector('custom-navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        document.body.classList.remove('scroll-up');
        return;
    }
    
    if (currentScroll > lastScroll && !document.body.classList.contains('scroll-down')) {
        document.body.classList.remove('scroll-up');
        document.body.classList.add('scroll-down');
    } else if (currentScroll < lastScroll && document.body.classList.contains('scroll-down')) {
        document.body.classList.remove('scroll-down');
        document.body.classList.add('scroll-up');
    }
    
    lastScroll = currentScroll;
});

// Add touch device detection for hover effects
if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
    document.body.classList.add('touch-device');
}