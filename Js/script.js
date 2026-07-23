// FAQ ACCORDION
document.addEventListener('DOMContentLoaded', function() {
    const questions = document.querySelectorAll(".questions");

    function toggleAccordion(question) {
        const accordion = question.closest('.faq-item');
        const isOpen = accordion.classList.toggle("active");
        question.setAttribute("aria-expanded", isOpen);
    }

    questions.forEach((question) => {
        question.addEventListener("click", function() {
            toggleAccordion(this);
        });

        question.addEventListener("keydown", function(e) {
            if (e.key === "Enter" || e.key === " " || e.key === "Spacebar") {
                e.preventDefault();
                toggleAccordion(this);
            }
        });
    });
});

// CONTACT FORM 
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            if (name === '' || email === '' || message === '') {
                alert('Please fill in all required fields!');
                return;
            }

            if (!email.includes('@') || !email.includes('.')) {
                alert('Please enter a valid email address.');
                return;
            }

            alert('Your message has been sent successfully!');
            form.reset();
        });
    }
});
//HAMBURGER MENU 
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navList = document.querySelector('.nav-list');
    const body = document.body;

    if (!hamburger || !navList) return;

    // Menüyü aç/kapa
    function toggleMenu() {
        const isOpen = hamburger.classList.toggle('active');
        navList.classList.toggle('open');
        body.classList.toggle('no-scroll');
        hamburger.setAttribute('aria-expanded', isOpen);
    }

    // Menüyü kapat
    function closeMenu() {
        hamburger.classList.remove('active');
        navList.classList.remove('open');
        body.classList.remove('no-scroll');
        hamburger.setAttribute('aria-expanded', 'false');
    }

    // Hamburger tıklama
    hamburger.addEventListener('click', toggleMenu);

    // Link tıklama - menüyü kapat
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // ESC tuşu ile menüyü kapat
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && navList.classList.contains('open')) {
            closeMenu();
            hamburger.focus();
        }
    });
});