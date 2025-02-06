const color1 = document.querySelector("#color1");
const color2 = document.querySelector("#color2");
const angle = document.querySelector(".slider");
const angleValue = document.querySelector("p");
const preview = document.querySelector(".preview");
const code = document.querySelector(".code");
const button = document.querySelector("button");

function updateColor() {
  const angleValuetext = angle.value;
  const color1Value = color1.value;
  const color2Value = color2.value;
  const gradient = `linear-gradient(${angleValuetext}deg , ${color1Value}, ${color2Value}`;
  preview.style.background = gradient;
  code.textContent = `background: ${gradient}`;
  angleValue.textContent = `Angle: ${angleValuetext}°`;
}

function copy() {
  navigator.clipboard.writeText(code.textContent).then(() => {
    alert("CSS Code has been copied to clipboard");
  });
}

color1.addEventListener("input", updateColor);
color2.addEventListener("input", updateColor);
angle.addEventListener("input", updateColor);
button.addEventListener("click", copy);
