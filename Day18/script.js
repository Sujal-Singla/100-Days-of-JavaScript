const progress = document.querySelector(".progress");
const number = document.querySelector(".number");
const addGlass = document.querySelector(".add");
const reset = document.querySelector(".reset");

let glassDrunk = 0;
const dailyGoal = 8;

function UpdateUI() {
  number.textContent = glassDrunk;
  const progressDone = (glassDrunk / dailyGoal) * 100;

  progress.style.width = `${progressDone}%`;
  if (progress == 100) {
    progress.style.background = "orange";
  } else {
    progress.style.background = "green";
  }
}
addGlass.addEventListener("click", () => {
  if (glassDrunk < dailyGoal) {
    glassDrunk++;
    UpdateUI();
  } else {
    alert("you have already completed your goal");
  }
});
reset.addEventListener("click", () => {
  glassDrunk = 0;
  UpdateUI();
});
UpdateUI();
