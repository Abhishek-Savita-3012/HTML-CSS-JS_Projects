const apiKey = "07fd6681cf90588b3ceff475d9b8171d";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    //console.log(response)


    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else {
        var data = await response.json();
        console.log(data)

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
        document.querySelector(".visibility").innerHTML = data.visibility / 1000 + " km";
        document.querySelector(".weather_description").innerHTML = data.weather[0].main;
        document.querySelector(".feels_like").innerHTML = data.main.feels_like + "°c";
        document.querySelector(".temp_min").innerHTML = data.main.temp_min + "°c";
        document.querySelector(".temp_max").innerHTML = data.main.temp_max + "°c";
        document.querySelector(".pressure").innerHTML = data.main.pressure + " Hg";
        document.querySelector(".wind_deg").innerHTML = data.wind.deg + " degree";
        document.querySelector(".country").innerHTML = data.sys.country;

        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "clouds.png";
        }
        else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "clear.png";
        }
        else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "rain.png";
        }
        else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "drizzle.png";
        }
        else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "mist.png";
        }
        else if (data.weather[0].main == "Haze") {
            weatherIcon.src = "haze.png";
        }
        else if (data.weather[0].main == "Snow") {
            weatherIcon.src = "snow.png";
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});    