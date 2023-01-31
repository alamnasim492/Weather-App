const getWeather = (city) => {
  document.getElementById("cityname").innerHTML = city;
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=0b09f0880335d1e3377d90adc39477f7`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      document.getElementById("temp").innerHTML = data.main.temp + "°C";
      document.getElementById("icon").src="https://openweathermap.org/img/wn/"+data.weather[0].icon+".png";
      document.getElementById("description").innerHTML = data.weather[0].description;
      document.getElementById("humidity").innerHTML ="Humidity: " + data.main.humidity + "%";
      document.getElementById("feels_like").innerHTML ="Feels-Like: " + data.main.feels_like + "°C";
      document.getElementById("min_temp").innerHTML="Min-Temp: "+data.main.temp_min+"°C"
      document.getElementById("max_temp").innerHTML="Max-Temp: "+data.main.temp_max+"°C"
      document.getElementById("wind").innerHTML = "Wind-Speed: " + data.wind.speed + "Km/h";
      document.getElementById("wind_degrees").innerHTML ="wind-degrees: " + data.wind.deg + "°";
      document.body.style.backgroundImage =
        "url('https://source.unsplash.com/1600x900/?" + city + "')";
        
    })
    .catch((err) => console.error(err));
};
submit.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather(city.value);
});
getWeather("delhi");
