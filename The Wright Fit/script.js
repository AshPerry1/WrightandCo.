// Enhanced Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth Reveal Animations for All Sections
const revealElements = document.querySelectorAll('.product-showcase, .technology, .story, .colors, .coming-soon, .contact');
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            entry.target.classList.add('revealed');
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

revealElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    revealObserver.observe(el);
});

// Enhanced Product Image Interactions
document.querySelectorAll('.polo-display-img, .hero-polo-img').forEach(img => {
    img.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
        this.style.boxShadow = 'var(--shadow-2xl)';
    });
    
    img.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
        this.style.boxShadow = 'var(--shadow-lg)';
    });
});

// Enhanced Gallery Interactions
document.querySelectorAll('.gallery-item').forEach((item, index) => {
    item.addEventListener('click', () => {
        // Remove active class from all gallery items
        document.querySelectorAll('.gallery-item').forEach(i => i.classList.remove('active'));
        // Add active class to clicked item
        item.classList.add('active');
        
        // Update main display with smooth transition
        const mainImage = document.querySelector('.polo-display-img');
        if (mainImage) {
            mainImage.style.opacity = '0';
            mainImage.style.transform = 'scale(0.95)';
            
            setTimeout(() => {
                mainImage.src = item.src;
                mainImage.style.opacity = '1';
                mainImage.style.transform = 'scale(1)';
            }, 150);
        }
    });
});

// Enhanced Color Selection with Smooth Transitions
document.querySelectorAll('.color-option').forEach(option => {
    option.addEventListener('click', () => {
        // Remove active class from all color options
        document.querySelectorAll('.color-option').forEach(o => o.classList.remove('active'));
        // Add active class to clicked option
        option.classList.add('active');
        
        // Add loading state
        option.classList.add('loading');
        
        // Simulate color change delay for premium feel
        setTimeout(() => {
            option.classList.remove('loading');
        }, 300);
    });
});

// Enhanced Form Interactions
document.querySelectorAll('.form-group input, .form-group textarea').forEach(input => {
    input.addEventListener('focus', function() {
        this.parentElement.classList.add('focused');
    });
    
    input.addEventListener('blur', function() {
        if (!this.value) {
            this.parentElement.classList.remove('focused');
        }
    });
});

// Premium Loading States
function showPremiumLoading(element) {
    element.classList.add('loading');
    element.style.pointerEvents = 'none';
}

function hidePremiumLoading(element) {
    element.classList.remove('loading');
    element.style.pointerEvents = 'auto';
}

// Enhanced Add to Cart with Premium Animation
document.querySelector('.add-to-cart').addEventListener('click', function() {
    showPremiumLoading(this);
    
    // Simulate processing time for premium feel
    setTimeout(() => {
        hidePremiumLoading(this);
        showAddToCartConfirmation();
    }, 800);
});

// Enhanced Mobile Menu
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
    
    // Add smooth animation
    if (navMenu.classList.contains('active')) {
        navMenu.style.transform = 'translateY(0)';
        navMenu.style.opacity = '1';
    } else {
        navMenu.style.transform = 'translateY(-10px)';
        navMenu.style.opacity = '0';
    }
});

// Initialize enhanced features
document.addEventListener('DOMContentLoaded', () => {
    // Add premium loading animation
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.8s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
    
    // Enhanced coming soon items animation
    const comingSoonItems = document.querySelectorAll('.coming-soon-item');
    comingSoonItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(40px)';
        item.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        
        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, 1000 + (index * 200));
    });
    
    console.log('Wright & Co. premium website loaded successfully');
});
