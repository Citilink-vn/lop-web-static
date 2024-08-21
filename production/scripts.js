// Smooth scroll to sections
function scrollToSection(sectionId, menuItem) {
    // Remove 'active' class from all menu items
    document.querySelectorAll('.nav-links a').forEach(item => {
        item.classList.remove('active');
    });

    // Add 'active' class to the clicked menu item
    menuItem.classList.add('active');

    // Scroll to the target section
    document.querySelector(sectionId).scrollIntoView({ behavior: 'smooth' });
}

// Add event listeners to menu items
document.querySelectorAll('.nav-links a').forEach(item => {
    item.addEventListener('click', function(e) {
        e.preventDefault();
        const targetSection = this.getAttribute('href');
        scrollToSection(targetSection, this);
    });
});

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
