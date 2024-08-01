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
      
        const data = await response.json();
        displayWeatherData(data);
    } catch (error) {
        alert(error.message);
    }
}

function displayWeatherData(data) {
    const weatherResult = document.getElementById('weatherResult');
    const text= document.getElementById('textt')
    text.innerHTML=
    `<h2> ${data.name}</h2>
    <p class="description">${data.weather[0].description}</p>`
  
    const circle = document.getElementById('circle');
    circle.innerHTML = `
  <div class="sun">
<p> ${data.main.temp}°C</p>
</div>
    `
    weatherResult.innerHTML = `
        <div class="weather-info">
        <div id="first">
            <p class="thick" >Weather: </p><p>${data.weather[0].description}</p>
            </br>
            <p class="thick">Humidity: </p><p>${data.main.humidity}%</p>
        </div>
        <div id="second">
            <p class="thick">Wind Speed: </p><p>${data.wind.speed} m/s</p>
             </br>
            <p class="thick"> Air Pressure: </p><p>${data.main.pressure} mph </p>
        </div>
        </div>
    `}
    

  

