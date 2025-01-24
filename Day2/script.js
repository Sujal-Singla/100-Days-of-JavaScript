document.addEventListener("DOMContentLoaded", () => {
  const input = document.querySelector("#amount");
  const range = document.querySelector(".percentage");
  const totalPeople = document.querySelector("#numberofPeople");
  const totalTip = document.querySelector(".totalTip");
  const totalBill = document.querySelector(".totalBill");
  const individualbill = document.querySelector(".individualbill");
  const rangeValue = document.querySelector("#percentage");

  function calculateTip() {
    let bill = parseFloat(input.value);
    let percentage = parseFloat(range.value);
    let people = parseInt(totalPeople.value);

    if (isNaN(bill) || people == 0) {
      alert("please enter some bill amount or add atleast single person");
    }
    if (isNaN(people) || bill == 0) {
      alert("please enter some bill amount or add atleast single person");
    }
    let tip = bill * (percentage / 100);
    let totalAmount = tip + bill;
    let indibill = totalAmount / people;

    totalTip.innerHTML = `Total Tip: ${tip}`;
    totalBill.innerHTML = `Total amount to be paid: ${totalAmount}`;
    individualbill.innerHTML = `Bill paid by individual person: ${indibill}`;
  }
  range.addEventListener("input", () => {
    rangeValue.innerHTML = range.value;
    calculateTip();
  });

  input.addEventListener("input", calculateTip);
  totalPeople.addEventListener("input", calculateTip);
});
