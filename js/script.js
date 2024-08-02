document.addEventListener('DOMContentLoaded', function () {
    var burgerMenu = document.getElementById('burger-menu');
    var nav = document.querySelector('header nav');
    var themeToggle = document.getElementById('theme-toggle');
    var backToTopButton = document.getElementById('back-to-top');
    var body = document.body;

    burgerMenu.addEventListener('click', function () {
        nav.classList.toggle('show');
    });

    themeToggle.addEventListener('click', function () {
        body.classList.toggle('dark-mode');
    });

    window.addEventListener('scroll', function () {
        if (window.scrollY > 300) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    backToTopButton.addEventListener('click', function (e) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
