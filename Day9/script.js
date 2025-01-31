const search = document.querySelector("i");
const input = document.querySelector("input");
const dark = document.querySelector(".container");
const image = document.querySelector(".container .weather img");
search.addEventListener("click", (e) => {
  input.style.display = "block";
  e.stopPropagation();

  console.log("clicked");
  dark.style.setProperty("--after-display", "block");
});
let apiKey = "6062d12abc846cba013eedb879596f84";
let apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

function formateTime(time) {
  const currentTime = new Date(time * 1000);
  const hours = currentTime.getHours();
  const minute = currentTime.getMinutes();
  const ampm = hours > 12 ? "PM" : "AM";
  const minutes = minute > 10 ? minute : "0" + minute;
  const finalTime = `${hours}:${minutes} ${ampm}`;
  return finalTime;
}
async function checkWeather(city) {
  let response = await fetch(apiUrl + city + `&APPID=${apiKey}`);
  let data = await response.json();
  console.log(data);
  const date = new Date();
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const formattedDate = date.toLocaleDateString("en-IN", options);
  document.querySelector(".container .weather .date").innerHTML = formattedDate;

  document.querySelector(".city").innerHTML = data.name;

  document.querySelector(".container .weather .temp").innerHTML =
    data.main.temp + "°c";

  document.querySelector(".container .weather .condition").innerHTML =
    data.weather[0].main;

  document.querySelector(".container .details .sun .sunrise .time").innerHTML =
    formateTime(data.sys.sunrise);
  document.querySelector(".container .details .sun .sunset .time").innerHTML =
    formateTime(data.sys.sunset);
  document.querySelector(
    ".container .details .atmosphere .pressure .value"
  ).innerHTML = data.main.pressure;
  document.querySelector(
    ".container .details .atmosphere .humidity .value"
  ).innerHTML = data.main.humidity;
  document.querySelector(".container .details .air .speed .value").innerHTML =
    data.wind.speed;
  document.querySelector(".container .details .air .degree .value").innerHTML =
    data.wind.deg;

  if (data.weather[0].main == "Haze") {
    image.src = "clouds.png";
  } else if (data.weather[0].main == "Clear") {
    image.src = "clear.png";
  } else if (data.weather[0].main == "Rain") {
    image.src = "rain.png";
  } else if (data.weather[0].main == "Drizzle") {
    image.src = "drizzle.png";
  } else if (data.weather[0].main == "Mist") {
    image.src = "Mist.png";
  }
}

window.addEventListener("click", (e) => {
  input.style.display = "none";
  dark.style.setProperty("--after-display", "none");
});
input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    input.style.display = "none";
    dark.style.setProperty("--after-display", "none");
    checkWeather(input.value);
  }
});
