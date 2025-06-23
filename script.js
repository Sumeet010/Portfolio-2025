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

window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});