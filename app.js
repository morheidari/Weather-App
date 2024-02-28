async function fetchWeatherData(city) {
  const data = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=af25153a05e14fdcb85172011232612&q=${city}`
  );
  const readedData = await data.json();
  return readedData;
}

const conditionText = document.querySelector(".condition-text");
const conditionIcon = document.querySelector("img");
const cityName = document.querySelector(".city");
const feelsLike = document.querySelector(".feels-like");
const temp = document.querySelector(".temp");
const humidity = document.querySelector(".humidity");
const city = document.querySelector("input");
city.addEventListener("keypress", async function (e) {
  console.log(e.target.value);
  if (e.key === "Enter") {
    e.preventDefault();
    const c = e.target.value;
    console.log(c);
    const { current, location } = await fetchWeatherData(c);
    conditionText.textContent = current.condition.text;
    conditionIcon.src = current.condition.icon.replace(/[\/\/]/, "https://");
    cityName.textContent = location.name;
    feelsLike.textContent = current.feelslike_c;
    temp.textContent = current.temp_c;
    humidity.textContent = current.humidity;
  }
});
