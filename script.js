const navItems = document.querySelectorAll('.nav-item');

navItems.forEach(item => {
    item.addEventListener('click', e => {
        e.preventDefault();

        navItems.forEach(nav => nav.classList.remove('active'));

        item.classList.add('active');

        const section = item.dataset.section;

        switch(section) {
            case 'home':
                window.scrollTo({ top: 0, behavior: 'smooth' });
                break;
            case 'github':
                window.open('https://github.com/Sumeet010', '_blank');
                break;
            case 'linkedin':
                window.open('https://www.linkedin.com/in/sumeet-gupta-67399127a/', '_blank');
                break;
            case 'twitter':
                window.open('https://x.com/Sumeet78036182', '_blank');
                break;
            case 'email':
                window.location.href = 'mailto:your.email@example.com';
                break;
            case 'resume':
                window.open('/path-to-your-resume.pdf', '_blank');
                break;
        }
    });
});

// window.addEventListener('load', () => {
//     document.body.classList.add('loaded');
// });

// Theme toggle functionality
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Check for saved theme preference or default to 'dark'
const currentTheme = localStorage.getItem('theme') || 'dark';

// Set initial theme
if (currentTheme === 'light') {
    body.setAttribute('data-theme', 'light');
}

// Theme toggle event listener
themeToggle.addEventListener('click', function() {
    const currentTheme = body.getAttribute('data-theme');
    
    if (currentTheme === 'light') {
        body.removeAttribute('data-theme');
        localStorage.setItem('theme', 'dark');
    } else {
        body.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
});

// Load animation
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

// Navigation functionality
// const navItems = document.querySelectorAll('.nav-item');

// navItems.forEach(item => {
//     item.addEventListener('click', function(e) {
//         // Remove active class from all items
//         navItems.forEach(nav => nav.classList.remove('active'));
        
//         // Add active class to clicked item (only for non-external links)
//         if (!this.href.includes('http')) {
//             this.classList.add('active');
//         }
//     });
// });