// Smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Form submission handler
function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    
    // Simulate form submission
    const name = form.querySelector('input[type="text"]').value;
    const email = form.querySelector('input[type="email"]').value;
    const message = form.querySelector('textarea').value;
    
    // Create a confirmation message
    alert(`Thank you, ${name}! Your message has been received. We'll get back to you at ${email} soon.`);
    
    // Reset form
    form.reset();
}

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all content sections
document.querySelectorAll('.content-section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Add hover effect to social buttons
const socialButtons = document.querySelectorAll('.social-btn');
socialButtons.forEach(btn => {
    btn.addEventListener('mouseenter', function () {
        this.style.transform = 'translateY(-3px) scale(1.1)';
    });
    
    btn.addEventListener('mouseleave', function () {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Typing animation for profile title (optional)
const profileTitle = document.querySelector('.profile-title');
if (profileTitle) {
    const originalText = profileTitle.textContent;
    profileTitle.textContent = '';
    let index = 0;
    
    const typeText = () => {
        if (index < originalText.length) {
            profileTitle.textContent += originalText.charAt(index);
            index++;
            setTimeout(typeText, 50);
        }
    };
    
    // Uncomment the line below to enable typing animation
    // typeText();
}

// Add active state to skill cards on click
document.querySelectorAll('.skill-card').forEach(card => {
    card.addEventListener('click', function () {
        // Remove active class from all cards
        document.querySelectorAll('.skill-card').forEach(c => {
            c.style.background = 'linear-gradient(135deg, #f0f9ff 0%, #f8f4ff 100%)';
        });
        
        // Add active state to clicked card
        this.style.background = 'linear-gradient(135deg, #dbeafe 0%, #ede9fe 100%)';
    });
});

// Responsive menu toggle (if needed in future)
console.log('Profile website loaded successfully!');
