// JavaScript code for the weather app //
const API_KEY =  `https://api.weather.gov/openapi.json`;

Document.getElementById("seach-btn").addEvenListener("click" , () => {
    const city = document.getElenmentById("city-input").value;
    if (city) {
        fetchWeather(city);
    } else {
        displayError("please enter a city name.");
    }
});

function fetchWeather(city) {
    const apiURL =  "https://api.weather.gov";

    fetch(apiURL)
    .then(response  => {
        if (!response.ok) {
            throw new Error("city not found");
        }
        return response.json();
    })
    .then(data => displayWeather(data))
    .catch(error => displayError(error.message));
}

function displayWeather(data) {
    document.getElenmentById("error-message").textContent =" ";
    document.getElenmentById("city-name").textContent = `Weather in ${data.name}`;
    document.getElenmentById("temperature").textContent = `Temperature: ${data.main.temp} °C`;
    document.getElenmentById("description").textContent = `Condition: ${data.weather[0].description}`;
    document.getElenmentById("humidity").textContent = `Humidity: ${data.main.humidity}%`;
}

function displayWeather(data) {
    document.getElementById("error-message").textContent = message;
    document.getElementById("city-name").textContent = " ";
    document.getElementById("temperature").textContent = " ";
    document.getElementById("description").textContent = " ";
    document.getElementById("humidity").textContent = " ";
}