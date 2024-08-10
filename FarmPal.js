document.addEventListener('DOMContentLoaded', function() {
    const contentSection = document.querySelector('.content');
    const elementsToAnimate = contentSection.querySelectorAll('.scroll-animation');

    function checkScroll() {
        const windowHeight = window.innerHeight;
        const contentTop = contentSection.getBoundingClientRect().top;
        
        if (contentTop < windowHeight * 0.8) { // Trigger if content is within 80% of the viewport height
            elementsToAnimate.forEach(element => {
                element.classList.add('animate');
            });
            window.removeEventListener('scroll', checkScroll); // Remove listener after animation is triggered
        }
    }

    window.addEventListener('scroll', checkScroll);
    checkScroll(); // Initial check in case content is already in view
});
