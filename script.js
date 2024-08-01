document.getElementById('searchButton').addEventListener('click', function() {
    const country = document.getElementById('country').value;
    if (country) {
        fetchWeatherData(country);
    } else {
        alert('Please enter a country name.');
    }
});

async function fetchWeatherData(country) {
    const apiKey = 'e8b6c704ffd3a10c88565a980b947374';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${apiKey}&units=metric`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Country not found');
        }
        const data = await response.json();
        displayWeatherData(data);
    } catch (error) {
        alert(error.message);
    }
}

function displayWeatherData(data) {
    const weatherResult = document.getElementById('weatherResult');
    weatherResult.innerHTML = `
        <div class="weather-info">
            <h2>Weather in ${data.name}, ${data.sys.country}</h2>
            <p>Temperature: ${data.main.temp}°C</p>
            <p>Weather: ${data.weather[0].description}</p>
            <p>Humidity: ${data.main.humidity}%</p>
            <p>Wind Speed: ${data.wind.speed} m/s</p>
        </div>
    `};