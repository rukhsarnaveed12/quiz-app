const questions = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        answers: ["script", "scripting", "javascript", "js"],
        correct: 0 // Correct answer index for "script"
    },
    {
        question: "How do you write HELLO WORLD in an alert box?",
        answers: ["msgbox(HELLOWORLD)", "alert(HELLOWORLD)", "msg(HELLOWORLD)", "alertbox(HELLOWORLD)"],
        correct: 1 // Correct answer index for "alert(HELLOWORLD)"
    },
    {
        question: "How do you call a function named myFunction?",
        answers: ["myFunction()", "call myFunction", "call function myFunction"],
        correct: 0 // Correct answer index for "myFunction()"
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById('question');
const answersElement = document.getElementById('answers');
const nextButton = document.getElementById('next');
const resultElement = document.getElementById('result');
const restartButton = document.getElementById('restart');

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.style.display = 'block';
    resultElement.style.display = 'none';
    restartButton.style.display = 'none';
    showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    answersElement.innerHTML = '';
    question.answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.innerText = answer;
        button.classList.add('answer');
        button.addEventListener('click', () => selectAnswer(index));
        answersElement.appendChild(button);
    });
}

function selectAnswer(index) {
    if (index === questions[currentQuestionIndex].correct) {
        score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion(questions[currentQuestionIndex]);
    } else {
        showResults();
    }
}

function showResults() {
    questionElement.style.display = 'none';
    answersElement.style.display = 'none';
    resultElement.innerText = `You scored ${score} out of ${questions.length}!`;
    resultElement.style.display = 'block';
    nextButton.style.display = 'none';
    restartButton.style.display = 'block';
}

restartButton.addEventListener('click', startQuiz);

// Initialize the quiz on page load
startQuiz();

