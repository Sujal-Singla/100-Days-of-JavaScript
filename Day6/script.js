const flashcards = [
  {
    question: "What is the capital of France?",
    answer: "Paris",
  },
  {
    question: "What is 2 + 2?",
    answer: "4",
  },
  {
    question: "What is the color of the sky?",
    answer: "Blue",
  },
];
let flashIndex = 0;
let isQuestionShown = true;

const question = document.querySelector(".flashcard-text");
const flashcard = document.querySelector(".flashcard");
const button = document.querySelector("button");

function loadCard() {
  let cardIndex = flashcards[flashIndex];
  flashcard.textContent = isQuestionShown
    ? cardIndex.question
    : cardIndex.answer;
}
flashcard.addEventListener("click", () => {
  isQuestionShown = !isQuestionShown;
  loadCard();
});
button.addEventListener("click", () => {
  flashIndex = (flashIndex + 1) % flashcards.length;
  isQuestionShown = true;
  loadCard();
});
loadCard();
