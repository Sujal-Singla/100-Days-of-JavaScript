const add = document.querySelector("button").addEventListener("click", () => {
  let textContent = document.querySelector(".list");
  const input = document.querySelector("input");
  if (input.value !== "") {
    const listItem = document.createElement("li");
    let textList = input.value;
    listItem.innerHTML = input.value;
    const deletbtn = document.createElement("button");
    deletbtn.className = "delete";
    deletbtn.innerHTML = "Delete";
    listItem.appendChild(deletbtn);
    textContent.appendChild(listItem);
    input.value = "";

    deletbtn.addEventListener("click", () => {
      textContent.removeChild(listItem);
    });
  } else if ((input.value = "")) {
    alert("Please enter something to add To Do ");
  }
});
