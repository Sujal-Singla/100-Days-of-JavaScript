const tasks = document.querySelectorAll(".item");
const columns = document.querySelectorAll("#column");

let draggedTask = null;

tasks.forEach((task) => {
  task.addEventListener("dragstart", () => {
    draggedTask = task;
    task.style.opacity = "0.5";
  });
  task.addEventListener("dragend", () => {
    draggedTask = null;
    task.style.opacity = "1";
  });
});

columns.forEach((column) => {
  column.addEventListener("dragover", (e) => {
    e.preventDefault();
    const afterElemt = getDragAfterElement(column, e.clientY);
    if (afterElemt) {
      column.insertBefore(draggedTask, afterElemt);
    } else {
      column.appendChild(draggedTask);
    }
  });
});
function getDragAfterElement(column, y) {
  const taskInColumn = [...column.querySelectorAll(".item:not(.dragging)")];
  return taskInColumn.reduce(
    (closest, child) => {
      const box = child.getBoundingClientRect();
      const offset = y - box.top - box.height / 2;
      if (offset < 0 && offset > closest.offset) {
        return { offset: offset, element: child };
      } else {
        return closest;
      }
    },
    { offset: Number.NEGATIVE_INFINITY }
  ).element;
}
