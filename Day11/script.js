function checkPalindrome() {
  const input = document.querySelector("input").value;
  const btn = document.querySelector("button");
  const cleanInput = input.toLowerCase().replace(/[^a-z0-9]/g, "");
  const reverseInput = cleanInput.split("").reverse().join("");
  if (cleanInput === reverseInput && cleanInput !== "") {
    document.querySelector(".result").innerHTML = `${input} is Palindrome`;
    document.querySelector(
      ".output"
    ).innerHTML = `Palindrome Output :- ${reverseInput}`;
    document.querySelector(".result").style.color = "green";
  } else {
    document.querySelector(".result").innerHTML = `${input} is not Palindrome`;
    document.querySelector(".result").style.color = "red";
  }
}
