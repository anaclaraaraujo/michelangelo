document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll('.image-content img, .image-content-sistine-chapel img, .image-content-pietra img');
    const texts = document.querySelectorAll('.text-content p, .title h1, .title span, footer p, footer .links ul, footer .copyright p');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    images.forEach(image => {
        observer.observe(image);
    });

    texts.forEach(text => {
        observer.observe(text);
    });
});