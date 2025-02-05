document.querySelector("button").addEventListener("click", () => {
  const input = document.querySelector("input").value;
  const priority = document.querySelector("select").value;
  console.log(input, priority);

  if (!input) {
    alert("Please enter some tasks ");
    return;
  }

  const tasks = document.querySelector("#tasks");

  const li = document.createElement("li");
  li.textContent = input;
  li.className = priority.toLowerCase();
  tasks.appendChild(li);
  console.log(li);

  sortTask();
  document.querySelector("input").value = "";
});
function sortTask() {
  const tasks = document.querySelector("#tasks");
  const task = Array.from(tasks.children);
  task.sort((a, b) => {
    const priorityOrder = { high: 1, medium: 2, low: 3 };
    return priorityOrder[a.className] - priorityOrder[b.className];
  });
  //   taskList.innerHTML = "";
  task.forEach((task) => tasks.appendChild(task));
}
