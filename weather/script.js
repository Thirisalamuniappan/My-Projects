async function getWeather() {
    const city = document.getElementById("city").value;
    const apiKey = "b6100cf370fdbc08b5010d8e8f56a2f8"; // Replace with your OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("City not found");
      }
      const data = await response.json();
  
      const weatherDiv = document.getElementById("weather");
      weatherDiv.style.display = "block";
      weatherDiv.innerHTML = `
        <h3>Weather in ${data.name}</h3>
        <p><strong>Temperature:</strong> ${data.main.temp}°C</p>
        <p><strong>Weather:</strong> ${data.weather[0].description}</p>
        <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
        <p><strong>Wind Speed:</strong> ${data.wind.speed} m/s</p>
      `;
    } catch (error) {
      const weatherDiv = document.getElementById("weather");
      weatherDiv.style.display = "block";
      weatherDiv.innerHTML = `<p class="text-danger">${error.message}</p>`;
    }
  }
  