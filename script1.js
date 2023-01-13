const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})
let btnBack = document.querySelector('button');

btnBack.addEventListener('click', () => {
    window.history.back();
});

function startGame() {
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [{
        question: 'S+V2?',
        answers: [
            { text: 'Past simple', correct: true },
            { text: 'Present continuous', correct: false }
        ]
    },
    {
        question: 'S+was/were+V.ing?',
        answers: [
            { text: 'Present continuous', correct: true },
            { text: 'Future continuous', correct: false },
        ]
    },
    {
        question: 'S + had + V.3',
        answers: [
            { text: 'Future continuous', correct: false },
            { text: 'Past perfect', correct: true },

        ]
    },
    {
        question: 'S + had been + V.ing?',
        answers: [
            { text: 'Present simple', correct: false },
            { text: 'Past perfect continuous', correct: true }
        ]
    },
    {
        question: 'S + is/am/are + V.ing?',
        answers: [
            { text: 'Present simple', correct: true },
            { text: 'Present continuous', correct: false }
        ]
    },
    {
        question: 'S + V?',
        answers: [
            { text: 'Present simple', correct: false },
            { text: 'Past continuous', correct: true }
        ]
    },
    {
        question: 'S + have/has + V.3?',
        answers: [
            { text: 'Present simple', correct: false },
            { text: 'Present perfect', correct: true }
        ]
    },
    {
        question: 'S + have/has + been + V.ing?',
        answers: [
            { text: 'Present perfect continuous', correct: true },
            { text: 'future perfect', correct: false }
        ]
    },
    {
        question: 'S + will + V.1?',
        answers: [
            { text: 'Present perfect continuous', correct: false },
            { text: 'Future simple', correct: true }
        ]
    },
    {
        question: 'S + will + be + V.ing',
        answers: [
            { text: 'Past perfect continuous', correct: false },
            { text: 'Future continuous', correct: true }
        ]
    },
    {
        question: ' S + will + have + V.3?',
        answers: [
            { text: 'Future perfect ', correct: true },
            { text: 'Future continuous', correct: false }
        ]
    },
    {
        question: ' S + will have been + V.ing?',
        answers: [
            { text: 'Present perfect ', correct: false },
            { text: 'Future perfect continuous', correct: true }
        ]
    }
]