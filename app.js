const api_kye = `99c5b189ea214ddee3102ceed110fb11`;
const loadTemperature = (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_kye}&units=metric`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayTemperature(data));
};
const displayTemperature = (data) => {
  // const temperature = document.getElementById("temperature");
  // temperature.innerText = data.main.temp;
  setInnertTextById("temperature", data.main.temp);
  setInnertTextById("condition", data.weather[0].main);
  console.log(data.weather[0].main);
};

const setInnertTextById = (id, text) => {
  const temperature = document.getElementById(id);
  temperature.innerText = text;
};
document.getElementById("btn_search").addEventListener("click", function () {
  const searchField = document.getElementById("search_field");
  const city = searchField.value;
  // City Name
  document.getElementById("city_name").innerText = city;

  loadTemperature(city);
});

loadTemperature("dhaka");
