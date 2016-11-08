var key = 'a87c2d191085d4c4f3e005f1c8c50b69';

$.getJSON(
  'http://api.openweathermap.org/data/2.5/weather?q=Honolulu&appid=' + key,
  function load(data) {
    console.log(data);

    var forecast = document.getElementById('forecast');
    var weather = data.weather[0];
    for (data in weather) {
      var forecastData = document.createElement('p');
      forecastData.innerHTML = data;
      forecast.appendChild(forecastData);
    };
  }
)