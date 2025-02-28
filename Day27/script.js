const sentences = [
  "The quick brown fox jumps over the lazy dog.",
  "JavaScript is a versatile and powerful programming language.",
  "Typing speed tests can improve your accuracy and speed.",
  "Dark mode reduces eye strain in low light environments.",
  "Frontend development focuses on user experience and design.",
];

const input = document.querySelector("textarea");
const timer = document.querySelector(".timeTaken");
const wpm = document.querySelector(".speed");
const start = document.querySelector("button");
const heading = document.querySelector(".heading");
let timeInterval;
let currentSentence = "";
let elapsedTime = 0;

function startTyping() {
  clearInterval(timeInterval);
  elapsedTime = 0;
  const index = Math.floor(Math.random() * sentences.length);
  currentSentence = sentences[index];
  heading.textContent = currentSentence;
  input.disabled = false;
  timeInterval = setInterval(() => {
    elapsedTime++, (timer.textContent = `Time = ${elapsedTime} Seconds`);

    input.addEventListener("input", checkInput);
  }, 1000);
}
function checkInput() {
  input.disabled = false;

  const typedText = input.value;
  if (currentSentence.startsWith(typedText)) {
    input.style.border = "1px solid purple";
  } else {
    input.style.border = "1px solid red";
  }

  if (typedText === currentSentence) {
    clearInterval(timeInterval);
    input.disabled = true;
    checkSpeed(typedText);
  }
}
function checkSpeed(typedText) {
  const wordCount = typedText.split(" ").length;
  console.log(wordCount);
  const wpms = Math.round(wordCount / (elapsedTime / 60));
  wpm.innerHTML = `WPM = ${wpms}`;
}
function resetApp() {
  clearInterval(timeInterval);
  input.removeEventListener("input", checkInput);
  input.disabled = true;
  heading.textContent = 'Press "Start Typing" to begin!';
  input.value = "";

  input.disabled = true;
  timer.innerHTML = " ";
  wpm.innerHTML = " ";
}

start.addEventListener("click", () => {
  resetApp();
  startTyping();
});
