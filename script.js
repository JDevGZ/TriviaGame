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
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if(shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = ('Restart!')
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
    element.classList.remove ('correct')
    element.classList.remove ('wrong')
}

const questions = [
    {
        question: 'What team has won the most superbowls?',
        answers: [
            { text: 'Steelers', correct: false},
            { text: 'Broncos', correct: false},
            { text: 'Patriots', correct: true},
            { text: 'Dolphins', correct: false},
        ]
    },
    {
        question: 'How many superbowl rings does Tom Brady have?',
        answers: [
            { text: '3', correct: false},
            { text: '5', correct: false},
            { text: '7', correct: true},
            { text: '9', correct: false},
        ]
    },
    {
        question: 'Who beat the Patriots in Superbowl LII',
        answers: [
            { text: 'Buccaneers', correct: false},
            { text: 'Packers', correct: false},
            { text: 'Giants', correct: false},
            { text: 'Eagles', correct: true},
        ]
    },
    {
        question: 'Who was called Beast Mode',
        answers: [
            { text: 'Marshawn Lynch', correct: true},
            { text: 'Devante Smith', correct: false},
            { text: 'Tom Brady', correct: false},
            { text: 'Derrick Henry', correct: false},
        ]
    },
    {
        question: 'Who won the last SuperBowl',
        answers: [
            { text: 'Broncos', correct: false},
            { text: 'Rams', correct: true},
            { text: 'Bengals', correct: false},
            { text: 'Buccaneers', correct: false},
        ]
    }
]