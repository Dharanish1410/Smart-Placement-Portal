document.addEventListener('DOMContentLoaded', function () {
    const questionArea = document.getElementById('questionArea');
    const nextButton = document.getElementById('nextQuestion');
    let questions = [];
    let currentIndex = 0;

    function renderQuestion() {
        if (!questions.length) {
            questionArea.innerHTML = '<p>No questions loaded.</p>';
            return;
        }

        const question = questions[currentIndex];
        questionArea.innerHTML = `
            <div class="question-block">
                <h3>${question.question}</h3>
                <ul class="options-list">
                    ${question.options
                        .map(
                            (option, index) =>
                                `<li><button class="option-button" data-index="${index}">${option}</button></li>`
                        )
                        .join('')}
                </ul>
            </div>
        `;

        document.querySelectorAll('.option-button').forEach((button) => {
            button.addEventListener('click', function () {
                const selectedIndex = Number(this.dataset.index);
                const feedback = document.createElement('p');
                feedback.className = 'feedback';
                if (selectedIndex === question.answer) {
                    feedback.textContent = 'Correct!';
                    feedback.classList.add('correct');
                } else {
                    feedback.textContent = `Incorrect. Correct answer: ${question.options[question.answer]}`;
                    feedback.classList.add('incorrect');
                }
                const existingFeedback = questionArea.querySelector('.feedback');
                if (existingFeedback) existingFeedback.remove();
                questionArea.appendChild(feedback);
            });
        });
    }

    function loadQuestions() {
        fetch('data/questions.json')
            .then((response) => response.json())
            .then((data) => {
                questions = data.questions || [];
                renderQuestion();
            })
            .catch(() => {
                questionArea.innerHTML = '<p>Failed to load questions.</p>';
            });
    }

    if (nextButton) {
        nextButton.addEventListener('click', function () {
            currentIndex = (currentIndex + 1) % questions.length;
            renderQuestion();
        });
    }

    loadQuestions();
});
