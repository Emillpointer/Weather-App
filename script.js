// This gathers all data for the website
var temp 
var weather = {
  apiKey: "ec1ba683a42f5edeb068634d7fb5bc7a",
  fetchWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/forecast?q=" +
        "Minneapolis" +
        "&appid=" +
        this.apiKey
    )
      .then((Response) => Response.json())
      .then((data) => {
      //temp = data.main.temp
      console.log(data)
    //   document.querySelector(".temp").innerText = temp

    for(var i = 0; i < data.list.length; i++){
        console.log(data.list[i].wind.speed)
    }
        }  );
  },

  // This displays all aspects of the Weather
  displayWeather: function (data) {
    var { name } = data;
    var { icon, description } = data.weather[0];
    var { temp, humidity } = data.wind;
    var { speed } = data.wind;
    console.log(name, icon, description, temp, humidity, speed);
    document.querySelector(".city").innerText = "Weather in " + name;
    document.querySelector(".description").innerText = description;
    document.querySelector(".humidity").innerText =
      "Humidity: " + humidity + "%";
    document.querySelector(".wind").innerText = "Wind Speed: " + speed + " MPH";
  },
  search: function () {
    this.fetchWeather(document.querySelector(".search-bar").value);
  },
};

document.querySelector(".search button").addEventListener("click", function () {
  weather.search();
});

document
  .querySelector(".search-bar")
  .addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
      weather.search();
    }
  });
