// Mobile Navigation Toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Smooth Scrolling for Navigation Links
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
        // Close mobile menu if open
        if (navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        }
    });
});

// Navbar Background on Scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Intersection Observer for Scroll Animations
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
document.querySelectorAll('.product-showcase, .technology, .story, .colors, .coming-soon, .contact').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Product Size Selection
document.querySelectorAll('.size-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all size buttons
        document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
        // Add active class to clicked button
        btn.classList.add('active');
    });
});

// Product Color Selection
document.querySelectorAll('.color-option').forEach(option => {
    option.addEventListener('click', () => {
        // Remove active class from all color options
        document.querySelectorAll('.color-option').forEach(o => o.classList.remove('active'));
        // Add active class to clicked option
        option.classList.add('active');
        
        // Update polo display color
        updatePoloColor(option.dataset.color);
    });
    
    // Add hover functionality
    option.addEventListener('mouseenter', () => {
        // Update polo display color on hover
        updatePoloColor(option.dataset.color);
    });
    
    option.addEventListener('mouseleave', () => {
        // Restore the active color when not hovering
        const activeColor = document.querySelector('.color-option.active').dataset.color;
        updatePoloColor(activeColor);
    });
});

// Update Polo Color Function
function updatePoloColor(color) {
    const poloDisplay = document.querySelector('.polo-display');
    const heroPolo = document.querySelector('.hero-polo');
    
    const colorMap = {
        'navy': 'linear-gradient(135deg, #1a202c 0%, #2d3748 100%)',
        'olive': 'linear-gradient(135deg, #556b2f 0%, #6b8e23 100%)',
        'brick': 'linear-gradient(135deg, #8b4513 0%, #a0522d 100%)',
        'coral': 'linear-gradient(135deg, #ff7f50 0%, #ff6347 100%)',
        'sage': 'linear-gradient(135deg, #9ca3af 0%, #d1d5db 100%)',
        'heather-gray': 'linear-gradient(135deg, #9ca3af 0%, #6b7280 100%)',
        'burgundy': 'linear-gradient(135deg, #7c2d12 0%, #991b1b 100%)',
        'forest-green': 'linear-gradient(135deg, #166534 0%, #15803d 100%)',
        'charcoal': 'linear-gradient(135deg, #374151 0%, #1f2937 100%)',
        'camel': 'linear-gradient(135deg, #d97706 0%, #b45309 100%)',
        'steel-blue': 'linear-gradient(135deg, #475569 0%, #334155 100%)',
        'warm-cream': 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)',
        'deep-maroon': 'linear-gradient(135deg, #7f1d1d 0%, #991b1b 100%)'
    };
    
    if (colorMap[color]) {
        poloDisplay.style.background = colorMap[color];
        heroPolo.style.background = colorMap[color];
    }
}

// Image Gallery Functionality
document.querySelectorAll('.gallery-item').forEach((item, index) => {
    item.addEventListener('click', () => {
        // Remove active class from all gallery items
        document.querySelectorAll('.gallery-item').forEach(i => i.classList.remove('active'));
        // Add active class to clicked item
        item.classList.add('active');
        
        // Update main display (you can add different images here)
        updateMainDisplay(index);
    });
});

function updateMainDisplay(index) {
    // This function can be expanded to show different product images
    console.log(`Showing image ${index + 1}`);
}

// Add to Cart Functionality
document.querySelector('.add-to-cart').addEventListener('click', () => {
    showAddToCartConfirmation();
});

function showAddToCartConfirmation() {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'add-to-cart-notification';
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-check-circle"></i>
            <span>The Dylan has been added to your cart!</span>
        </div>
    `;
    
    // Style the notification
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: #10b981;
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 10px 25px rgba(16, 185, 129, 0.3);
        z-index: 10000;
        transform: translateX(400px);
        transition: transform 0.3s ease;
        font-weight: 500;
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Product image hover effects
document.querySelector('.polo-display').addEventListener('mouseenter', function() {
    this.style.transform = 'scale(1.01)';
});

document.querySelector('.polo-display').addEventListener('mouseleave', function() {
    this.style.transform = 'scale(1)';
});

// Smooth scroll for "Discover The Dylan" button
document.querySelector('.cta-button.primary').addEventListener('click', (e) => {
    e.preventDefault();
    const productSection = document.querySelector('#product');
    productSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
});

// Form submission handling
document.querySelector('.contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(e.target);
    const name = formData.get('name') || e.target.querySelector('input[type="text"]').value;
    const email = formData.get('email') || e.target.querySelector('input[type="email"]').value;
    const message = formData.get('message') || e.target.querySelector('textarea').value;
    
    // Simple validation
    if (!name || !email || !message) {
        showFormNotification('Please fill in all fields.', 'error');
        return;
    }
    
    // Show success message
    showFormNotification('Thank you for your message! We\'ll get back to you soon.', 'success');
    
    // Reset form
    e.target.reset();
});

function showFormNotification(message, type) {
    const notification = document.createElement('div');
    notification.className = 'form-notification';
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
            <span>${message}</span>
        </div>
    `;
    
    const color = type === 'success' ? '#10b981' : '#ef4444';
    
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${color};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        transform: translateX(400px);
        transition: transform 0.3s ease;
        font-weight: 500;
        max-width: 300px;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 4000);
}

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroPolo = document.querySelector('.hero-polo');
    if (heroPolo) {
        const rate = scrolled * -0.3;
        heroPolo.style.transform = `translateY(${rate}px)`;
    }
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.navbar') && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    }
});

// Coming Soon section interactions
document.querySelectorAll('.coming-soon-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Color dot hover effects
document.querySelectorAll('.color-dot').forEach(dot => {
    dot.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.2)';
    });
    
    dot.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    // Add loading animation
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
    
    // Preload critical images (if any)
    console.log('Wright & Co. website loaded successfully');
    
    // Add smooth reveal animation for coming soon items
    const comingSoonItems = document.querySelectorAll('.coming-soon-item');
    comingSoonItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        
        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, 800 + (index * 200));
    });
});

// Add touch support for mobile
if ('ontouchstart' in window) {
    // Add touch-specific interactions
    document.querySelectorAll('.coming-soon-item').forEach(item => {
        item.addEventListener('touchstart', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        item.addEventListener('touchend', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}

// Performance optimization: Throttle scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Apply throttling to scroll events
window.addEventListener('scroll', throttle(() => {
    // Navbar background effect
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
    
    // Parallax effect
    const scrolled = window.pageYOffset;
    const heroPolo = document.querySelector('.hero-polo');
    if (heroPolo) {
        const rate = scrolled * -0.3;
        heroPolo.style.transform = `translateY(${rate}px)`;
    }
}, 16)); // 60fps
