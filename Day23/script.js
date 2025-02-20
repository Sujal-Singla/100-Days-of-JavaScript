const affirmations = [
  "You are capable of amazing things.",
  "Believe in yourself and all that you are.",
  "Every day is a new beginning.",
  "You are stronger than you think.",
  "Your potential is limitless.",
  "You have the power to create change.",
  "Your hard work will pay off.",
  "You are enough just as you are.",
  "The best is yet to come.",
  "Keep going, you're doing great!",
];

const saveBtn = document.querySelector(".save");
const genBtn = document.querySelector(".gen");
const savedList = document.querySelector(".saved-list");
const affirmationText = document.querySelector("p");

genBtn.addEventListener("click", () => {
  const idx = Math.floor(Math.random() * affirmations.length);
  affirmationText.textContent = affirmations[idx];
});

function saveAffirmations(text) {
  const li = document.createElement("li");
  li.textContent = text;
  savedList.appendChild(li);
  const delBtn = document.createElement("button");
  delBtn.textContent = "Delete";
  li.appendChild(delBtn);
  delBtn.addEventListener("click", () => {
    savedList.removeChild(li);
    display();
  });
  display();
}

saveBtn.addEventListener("click", () => {
  const text = affirmationText.textContent;
  if (!text || isAlready(text)) return;
  saveAffirmations(text);
  display();
});

function isAlready(text) {
  return Array.from(savedList.children).some(
    (li) => li.firstChild.textContent === text
  );
}

function display() {
  const affir = Array.from(savedList.children).map((li) => {
    return li.firstChild.textContent;
  });
  localStorage.setItem("affirmations", JSON.stringify(affir));
}
function fetch() {
  const saved = JSON.parse(localStorage.getItem("affirmations"));
  saved.forEach((element) => {
    saveAffirmations(element);
  });
}
fetch();
