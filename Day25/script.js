const datePicker = document.querySelector("#datePicker");
const start = document.querySelector(".start");
const day = document.querySelector(".day .value");
const hour = document.querySelector(".hour .value");
const min = document.querySelector(".min .value");
const sec = document.querySelector(".sec .value");

let countDownTimer;
start.addEventListener("click", () => {
  const targetDate = new Date(datePicker.value);
  if (isNaN(targetDate.getTime())) {
    alert("Please enter a valid date");
  }
  clearInterval(countDownTimer);

  countDownTimer = setInterval(() => {
    const currentDate = new Date();
    const timeDifference = targetDate - currentDate;

    if (timeDifference <= 0) {
      alert("times Up");
      clearInterval(countDownTimer);
      resetTimer();
      return;
    }
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
    day.innerHTML = formateTime(days);
    hour.innerHTML = formateTime(hours);
    min.innerHTML = formateTime(minutes);
    sec.innerHTML = formateTime(seconds);
    function resetTimer() {
      day.innerHTML = "00";
      hour.innerHTML = "00";
      min.innerHTML = "00";
      sec.innerHTML = "00";
    }
  }, 1000);
});
function formateTime(time) {
  return time < 10 ? `0${time}` : time;
}
