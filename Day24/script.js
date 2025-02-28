const Api_url =
  "https://opentdb.com/api.php?amount=10&category=9&type=multiple";

let currentQuestion = 0;
let score = 0;
let questions = [];
const container = document.querySelector(".questions");
const question = document.querySelector(".question");
const options = document.querySelector(".options");
const next = document.querySelector(".next");
const marks = document.querySelector(".score");
const restart = document.querySelector(".restart");
const result = document.querySelector("#result");

async function fetchQuestions() {
  try {
    const response = await fetch(Api_url);
    const data = await response.json();
    console.log(data);
    questions = data.results.map((q) => ({
      question: q.question,
      options: shuffle([...q.incorrect_answers, q.correct_answer]),
      correct: q.correct_answer,
    }));
    loadQuestions();
  } catch (error) {
    console.log(error);
  }
}
function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}
function loadQuestions() {
  question.innerHTML = questions[currentQuestion].question;
  options.innerHTML = "";
  questions[currentQuestion].options.forEach((opt) => {
    const button = document.createElement("button");
    button.textContent = opt;
    button.classList.add("options");
    options.appendChild(button);
    button.addEventListener("click", () => {
      selectAnswer(button);
    });
  });
  next.disabled = true;
}
function selectAnswer(button) {
  const options = document.querySelectorAll(".options");
  options.forEach((opt) => {
    opt.disabled = true;
  });
  if (button.textContent === questions[currentQuestion].correct) {
    button.setAttribute("id", "right");
    console.log("given", button.classList);
    score++;
  } else {
    button.disabled = true;
    button.setAttribute("id", "wrong");
  }
  next.disabled = false;
}
next.addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestions();
  } else {
    showResult();
  }
});
function showResult() {
  result.classList.remove("hidden");
  container.classList.add("hidden");
  marks.innerHTML = `You scored ${score} / ${questions.length}`;
}
restart.addEventListener("click", () => {
  result.classList.add("hidden");
  container.classList.remove("hidden");
  score = 0;
  currentQuestion = 0;
  fetchQuestions();
});
fetchQuestions();
