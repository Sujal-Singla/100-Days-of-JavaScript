document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();

  let formValid = true;
  clearError();
  const name = document.querySelector("#name");
  const email = document.querySelector("#email");
  const pass = document.querySelector("#pass");

  if (name.value.trim() === "") {
    showerror(name, "Please enter your name");
    formValid = false;
  }
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (email.value.trim() === "") {
    showerror(email, "Please enter your email");
    formValid = false;
  } else if (!emailPattern.test(email.value.trim())) {
    showerror(email, "Please enter a valid email");
    formValid = false;
  }

  if (pass.value.trim() === "") {
    showerror(pass, "Please enter your password");
    formValid = false;
  } else if (pass.value.trim().length < 6) {
    showerror(pass, "Password must be 6 characters long");
    formValid = false;
  }
  function showerror(input, message) {
    const inputVar = input.closest(".input-group");
    inputVar.classList.add("error");
    inputVar.querySelector("small").textContent = message;
  }
  function clearError() {
    const inputGroups = document.querySelectorAll(".input-group");
    inputGroups.forEach((group) => {
      group.classList.remove("error");
      group.querySelector("small").textContent = "";
    });
  }
});
