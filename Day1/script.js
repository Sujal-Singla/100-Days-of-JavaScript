const input = document.querySelector("input");
const buttons = document.querySelectorAll(".btn");
const memoryStore = document.getElementById("memory-store");
const memoryRecall = document.getElementById("memory-recall");
const memoryClear = document.getElementById("memory-clear");
const equal = document.querySelector("#equals");
const clear = document.querySelector("#clear");
const backspace = document.querySelector(".backspace");

let currentInput = "";
let memory = "";

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    const value = this.getAttribute("data-value");
    console.log("clicked");
    if (value) {
      currentInput += value;
      input.value = currentInput;
    }
  });
});

equal.addEventListener("click", () => {
  currentInput = currentInput.replace(/\b0(\d+)/g, (match, p1) => {
    return parseInt(p1);
  });
  input.value = eval(currentInput);
  currentInput = input.value;
});
clear.addEventListener("click", () => {
  currentInput = "";
  input.value = "";
});

memoryStore.addEventListener("click", () => {
  memory = input.value;
});
memoryRecall.addEventListener("click", () => {
  console.log("clicked");
  currentInput = memory;
  input.value = currentInput;
});
memoryClear.addEventListener("click", () => {
  memory = "";
});
backspace.addEventListener("click", () => {
  currentInput = currentInput.slice(0, -1);
  input.value = currentInput;
});
