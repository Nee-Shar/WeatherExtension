document.getElementById("weatherButton").addEventListener("click", getW);

function getW() {
  var cityName = document.getElementById("cname").value;
  if (cityName === "") {
    cityName = document.getElementById("cname").placeholder;
  }
  console.log(cityName);
  const apiKey = "45b401ad704e904a8addd22939c2a7e2";

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      document.getElementById("desc").innerHTML =
        "Description: " + data.weather[0].description.toUpperCase();
      document.getElementById("temp").innerHTML =
        "Temp: " + data.main.temp + " degree cel";
      document.getElementById("feelsLike").innerHTML =
        "Feels like: " + data.main.feels_like + " degree cel";
      document.getElementById("humid").innerHTML =
        " Humidity: " + data.main.humidity;
      document.getElementById("humid").innerHTML =
        " Wind: " + data.wind.speed + " m/s";

      const date = new Date(data.sys.sunrise * 1000);
      const formattedTime = date.toLocaleString();
      console.log(formattedTime);
      document.getElementById("last").innerHTML =
        "Last updated " + formattedTime;

      // Process and use the data as per your requirements
    })
    .catch((error) => {
      console.log(error);
    });
}
