var weather = {
    "apiKey": "ec1ba683a42f5edeb068634d7fb5bc7a",
    fetchWeather: function() {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=Minneapolis&appid=ec1ba683a42f5edeb068634d7fb5bc7a")
        .then((Response) => Response.json()).then((data) => console.log(data))
    },
};