document.addEventListener('DOMContentLoaded', function () {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    themeToggle.addEventListener('click', function () {
        body.classList.toggle('dark-mode');
        themeToggle.classList.toggle('dark-mode'); // Toggle the class for the button as well

        // Store the theme preference in localStorage
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });

    // Load the theme preference from localStorage
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-mode');
        themeToggle.classList.add('dark-mode'); // Set the class for the button as well
    }
});

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
