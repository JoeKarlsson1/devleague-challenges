const kelvinToFahrenheit = (valNum) => {
   const valNum = parseFloat(valNum);
  return ((valNum-273.15)*1.8)+32;
};

const addWeatherToDOM = (data) => {
  console.log(data)
  let weather = data.weather[0];
  for (let key in weather) {
    const forecastData = document.createElement('p');
    forecastData.innerHTML = weather[key];
    forecast.appendChild(forecastData);
  };
};

const forecast = document.querySelector('#forecast');

fetch(`http://api.openweathermap.org/data/2.5/weather?q=Honolulu&appid=${API_KEY}`)
.then((resp) => resp.json())
.then((json) => {
  addWeatherToDOM(json);
})
.catch(err => console.log(err));

// var xhr = new XMLHttpRequest();
// xhr.open('GET', `http://api.openweathermap.org/data/2.5/weather?q=Honolulu&appid=${API_KEY}`);

// xhr.onload = function () {
//   // Request finished. Do processing here.
//   console.log(this.responseText)
// };

// xhr.send();