let randomNumer = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function guess() {
  console.log("clicked");
  const userGuess = parseInt(document.querySelector("input").value);
  const result = document.querySelector(".result");
  attempts++;
  if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
    result.innerHTML = `⚠️ Please enter a number between 1 and 100!`;
    result.style.color = "red";
  }
  if (userGuess === randomNumer) {
    result.innerHTML = `🎉 Congratulations! You guessed it in ${attempts} attempts.`;
  } else if (userGuess > randomNumer) {
    result.innerHTML = "📈 Too high! Try again.";
  } else {
    result.innerHTML = "📉 Too Low! Try again.";
  }
}
function reset() {
  // console.log("reseted");
  randomNumer = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  document.querySelector("input").value = "";
  document.querySelector(".result").innerHTML = "";
}
