const input = document.querySelector("textarea");
const word = document.querySelector(".wordcount");
const char = document.querySelector(".charcount");

input.addEventListener("input", () => {
  const text = input.value.trim();
  const wordc = text ? text.split(/\s+/).filter((word) => word.length > 0) : [];
  word.innerHTML = `Word: ${wordc.length}`;
  char.innerHTML = `Characters: ${text.length}`;
});
