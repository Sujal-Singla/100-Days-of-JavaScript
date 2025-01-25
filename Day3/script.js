const code = document.querySelector("p");

document.querySelector("button").addEventListener("click", () => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.background = `#${randomColor}`;
  code.innerHTML = `#${randomColor}`;
  addColorHistory(`#${randomColor}`);
});
function addColorHistory(color) {
  const colorDiv = document.querySelector(".history");
  const history = document.createElement("div");
  history.classList.add("historycolor");
  history.style.background = color;
  history.addEventListener("click", () => {
    document.body.style.background = `${color}`;
    code.innerHTML = `${color}`;
  });
  colorDiv.appendChild(history);
  if (colorDiv.children.length > 10) {
    colorDiv.removeChild(colorDiv.firstChild);
  }
}
