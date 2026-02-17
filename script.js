let city = document.querySelector("#city");
let day = document.querySelector("#day");
let weather = document.querySelector("#weather");
let max_temp = document.querySelector("#max_temp");
let min_temp = document.querySelector("#min_temp");
let temp = document.querySelector("#temperature");
let input = document.querySelector("#searchInput");
let search = document.querySelector("#searchBtn");
let loader = document.querySelector("#loader");
let currentBtn = document.querySelector("#currentBtn");


currentBtn.addEventListener("click", () => {
  getLocation();
});

function getLocation() {
  if (!navigator.geolocation) {
    alert("Geolocation not supported");
    return;
  }

  navigator.geolocation.getCurrentPosition(async function (position) {
    loader.style.display = "flex";

    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=565e0403bc91b0c7df852dbeff40946f&units=metric`,
    );

    let data = await response.json();
    console.log(data);
    loader.style.display = "none";

    city.innerText = data.name;
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let date = new Date();
    let dayIndex = date.getDay();

    day.innerText = days[dayIndex];

    weather.innerText = `Weather: ${data.weather[0].description}`;
    max_temp.innerText = `Max-Temp: ${data.main.temp_max}°C`;
    min_temp.innerText = `Min-Temp: ${data.main.temp_min}°C`;
    temp.innerText = data.main.temp;
  });
}

let cityname = "";

input.addEventListener("input", (e) => {
  cityname = e.target.value;
});

search.addEventListener("click", async (e) => {
  loader.style.display = "flex";

  let response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=565e0403bc91b0c7df852dbeff40946f&units=metric`,
  );

  let data = await response.json();
  console.log(data);

  if (data.cod === "404") {
    alert("City not found");
    loader.style.display = "none";
    return;
  }

  city.innerText = data.name;

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let date = new Date();
  day.innerText = days[date.getDay()];

  weather.innerText = `Weather: ${data.weather[0].description}`;
  max_temp.innerText = `Max-Temp: ${data.main.temp_max}°C`;
  min_temp.innerText = `Min-Temp: ${data.main.temp_min}°C`;
  temp.innerText = data.main.temp;

  loader.style.display = "none";
});

getLocation();
