// Optional: JavaScript for animations
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');
    sections.forEach((section, index) => {
        section.style.animationDelay = `${index * 0.2}s`;
    });

    // Hide loader and show content after loading
    const loader = document.querySelector('.loader');
    const content = document.querySelector('.content');
    setTimeout(() => {
        loader.style.display = 'none';
        content.style.opacity = '1';
    }, 2000);
});