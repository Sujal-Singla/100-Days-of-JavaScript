const fileInput = document.querySelector("#file");
const container = document.querySelector(".uploadContainer");

container.addEventListener("dragover", (e) => {
  e.preventDefault();
  container.classList.add("dragOver");
});
container.addEventListener("dragleave", (e) => {
  e.preventDefault();
  container.classList.remove("dragOver");
});
container.addEventListener("drop", (e) => {
  e.preventDefault();
  container.classList.remove("dragOver");
  let file = e.dataTransfer.files;
  handleFile(file);
});
container.addEventListener("click", (e) => {
  fileInput.click();
});
fileInput.addEventListener("change", (e) => {
  handleFile(e.target.files);
});

function handleFile(files) {
  console.log("files Changed or dropped");
  for (let i = 0; i < files.length; i++) {
    console.log(files[i]);
  }
  if (files.length > 0) {
    alert("File selected", files[0].name);
  }
}
