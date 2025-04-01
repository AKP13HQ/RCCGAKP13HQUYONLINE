// Add smooth scroll effect for internal links
document.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        // Check if the href is not a link to another page (external links)
        if (this.getAttribute('href').startsWith('#')) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
        // For external links, allow normal behavior (redirection)
    });
});