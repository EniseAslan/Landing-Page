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

            alert('Mesajınız başarıyla gönderildi! Teşekkür ederiz.');
            form.reset();
        });
    }
});