const questions = document.querySelectorAll(".questions");

questions.forEach((question) => {

    question.addEventListener("click", () => {

        const accordion = question.parentElement;

        accordion.classList.toggle("active");

    });

});

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            if (name === '' || email === '' || message === '') {
                alert('Lütfen tüm zorunlu alanları doldurun!');
                return;
            }

            if (!email.includes('@') || !email.includes('.')) {
                alert('Lütfen geçerli bir e-posta adresi girin.');
                return;
            }

            alert('Mesajınız başarıyla gönderildi!');
            form.reset();
        });
    }
});

const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.nav-list');
const body = document.body;

if (hamburger && navList) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');  
        navList.classList.toggle('open');      
       
    });
}

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navList.classList.remove('open');
        body.classList.remove('no-scroll');
    });
});