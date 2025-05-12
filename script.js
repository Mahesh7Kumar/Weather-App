// OpenWeatherMap API key and URL
const apikey = "338583045a5f3361eda94a1d249a1e0c"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q="


// DOM elements
const searchBox = document.querySelector("#search input")
const searchbtn = document.querySelector("#search button")
const weatherIcon = document.querySelector('#weather-icon')

// Event listener for Enter key
async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apikey}`)

// Check if the response is ok (status code 200 or 404 undefined)
    if (response.status == 404) {
        document.querySelector("#error").style.display = "block"
        document.querySelector("#weather").style.display = "none"
    } else {

// If the response is ok, parse the JSON data
        var data = await response.json()
        document.querySelector("#city").innerHTML = data.name
        document.querySelector("#temp").innerHTML = `${Math.round(data.main.temp)} °C`
        document.querySelector("#humidity").innerHTML = `${data.main.humidity} %`
        document.querySelector("#wind").innerHTML = `${data.wind.speed} km/h`

// Set the weather icon based on the weather condition

        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "asserts/clouds.png"
        } else if (data.weather[0].main == 'Clear') {
            weatherIcon.src = "asserts/clear.png"
        }
        else if (data.weather[0].main == 'Rain') {
            weatherIcon.src = "asserts/rain.png"
        }
        else if (data.weather[0].main == 'Drizzle') {
            weatherIcon.src = "asserts/drizzle.png"
        }
        else if (data.weather[0].main == 'Mist') {
            weatherIcon.src = "asserts/mist.png"
        }
        document.querySelector('#weather').style.display = "block"
        document.querySelector("#error").style.display = "none"
    }

}

// Event listener for search button
searchbtn.addEventListener('click', () => {
    checkWeather(searchBox.value)
})