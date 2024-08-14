// Smooth scroll to sections
function scrollToSection(sectionId) {
    document.querySelector(sectionId).scrollIntoView({ behavior: 'smooth' });
}

// Add 'in-view' class when section is in view
const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
        }
    });
}, { threshold: 0.1 });

sections.forEach(section => {
    observer.observe(section);
});

// Handle contact form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for your message! We will get back to you shortly.');
});
