const questions = document.querySelectorAll(".questions");

questions.forEach((question) => {

    question.addEventListener("click", () => {

        const accordion = question.parentElement;

        accordion.classList.toggle("active");

    });

});