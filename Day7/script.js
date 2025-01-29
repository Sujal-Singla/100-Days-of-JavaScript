const quizData = [
  {
    question: "What does HTML stand for?",
    a: "Hyper Text Markup Language",
    b: "Hot Text Makeup Language",
    c: "Hyperlink Transfer Mark Language",
    d: "Home Tool Markup Language",
    correct: "a",
  },
  {
    question: "What does CSS stand for?",
    a: "Creative Style Sheets",
    b: "Cascading Style Sheets",
    c: "Colorful Style Sheets",
    d: "Computer Style Sheets",
    correct: "b",
  },
  {
    question: "What does JS stand for?",
    a: "Java Structure",
    b: "JavaScript",
    c: "Just Script",
    d: "Jumpy Style",
    correct: "b",
  },
];

const question = document.querySelector("#question");
const choices = document.querySelectorAll(".choice");
const submit = document.querySelector(".next");
const result = document.querySelector("#result");

let score = 0;
let currentQues = 0;
let selectedAnswer = "";

function loadquiz() {
  result.textContent = "";
  selectedAnswer = "";

  const currentquiz = quizData[score];

  question.textContent = currentquiz.question;

  choices.forEach((buttons) => {
    const answerkey = buttons.getAttribute("data-answer");
    buttons.textContent = currentquiz[answerkey];
  });
}

function checkAnswer() {
  if (selectedAnswer == quizData[currentQues].correct) {
    score++;
  }
  currentQues++;

  if (currentQues < quizData.length) {
    loadquiz();
  } else {
    result.textContent = `Quiz Over! Your Scored ${score} out of ${quizData.length}`;
    submit.disabled = true;
  }
}

choices.forEach((buttons) => {
  buttons.addEventListener("click", () => {
    selectedAnswer = buttons.getAttribute("data-answer");
  });
});

submit.addEventListener("click", () => {
  if (selectedAnswer) {
    checkAnswer();
  } else {
    alert("please select an option to load next question");
  }
});
loadquiz();
