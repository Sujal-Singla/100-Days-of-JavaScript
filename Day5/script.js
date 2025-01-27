const addBtn = document.querySelector(".add");
const container = document.querySelector(".notes-container");

window.addEventListener("load", loadNotes);

addBtn.addEventListener("click", addNewNote);

function addNewNote(text = "") {
  const note = document.createElement("div");
  note.classList.add("notes");
  note.innerHTML = `
   <textarea>${text}</textarea>
   <button class="dlt">Delete</button>
  `;
  container.appendChild(note);

  note.querySelector(".dlt").addEventListener("click", () => {
    note.remove();
    saveNotes();
  });
  note.querySelector("textarea").addEventListener("input", saveNotes);
  saveNotes();
}

function saveNotes() {
  const notes = document.querySelectorAll(".notes textarea");
  const data = [];
  notes.forEach((note) => data.push(note.value));
  localStorage.setItem("stickyNotes", JSON.stringify(data));
}

function loadNotes() {
  const savedNotes = JSON.parse(localStorage.getItem("stickyNotes"));
  if (saveNotes) {
    savedNotes.forEach((notes) => addNewNote(notes));
  }
}
