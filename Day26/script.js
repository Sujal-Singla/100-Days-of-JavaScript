const input = document.querySelector("input");
const add = document.querySelector(".add");
const progress = document.querySelector("progress");
const list = document.querySelector(".habit-list");

let habits = JSON.parse(localStorage.getItem("habits") || "[]");
if (!Array.isArray(habits)) {
  localStorage.setItem("habits", JSON.stringify([]));
  habits = [];
}

add.addEventListener("click", addHabit);

function addHabit() {
  const habitText = input.value.trim();
  if (habitText) {
    const newHabit = {
      text: habitText,
      completed: false,
    };
    habits.push(newHabit);
    input.value = ""; 
    renderHabit();
    updateLocalStorage();
  } else {
    alert("Please enter something");
  }
}

function toggleHabitCompletion(index) {
  habits[index].completed = !habits[index].completed;
  renderHabit();
  updateLocalStorage();
}

function deleteHabit(index) {
  habits.splice(index, 1);
  renderHabit();
  updateLocalStorage();
}

function updateLocalStorage() {
  localStorage.setItem("habits", JSON.stringify(habits));
}

function renderHabit() {
  list.innerHTML = ""; 
  let completedCount = 0;
  habits.forEach((habit, index) => {
    const habitElement = document.createElement("div");
    if (habit.completed) {
      habitElement.classList.add("completed");
      completedCount++;
    }
    habitElement.innerHTML = `
      <li>${habit.text}
        <div>
          <button onclick="toggleHabitCompletion(${index})">${
      habit.completed ? "Undo" : "Complete"
    }</button>
          <button onclick="deleteHabit(${index})">Delete</button>
        </div>
      </li>
    `;
    list.appendChild(habitElement);
  });

  // Update progress bar
  const progressPer = habits.length
    ? Math.round((completedCount / habits.length) * 100)
    : 0;
  progress.value = progressPer;
}

// Initial rendering of habits
renderHabit();
