
function formattedDate(){
let currentDate = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let day = days[currentDate.getDay()];
let hours = currentDate.getHours().toString().padStart(2, '0'); 
    let minutes = currentDate.getMinutes().toString().padStart(2, '0'); 
    let time = `${hours}:${minutes}`; 

  let dateString = `${day} ${time}`;

  let updateDate = document.getElementById("current-date");
  if (updateDate) {
        updateDate.innerHTML = dateString;
    } else {
        console.error("not found");
    }
};

formattedDate();


function searchCity(event) {
  event.preventDefault();

  
  let cityInput = document.getElementById("city-button");

  if (cityInput) {
    let city = cityInput.value.trim();  

    if (city) {
      let cityNameElement = document.getElementById("city-name");

      if (cityNameElement) {
        
        cityNameElement.innerHTML = city;

        
        
        let apiKey = "d270ff52dt3f3obd13aba943d507af34";
        let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;

        
        axios.get(apiUrl).then(showTemperature);
          
          };
      } else {
        console.error("City name element not found.");
      }
    } 
  


  function showTemperature(response) {
    if (response.data && response.data.temperature) {
    let temperature = Math.round(response.data.temperature.current);
    let temperatureElement = document.querySelector("#temp");
        temperatureElement.innerHTML = `${temperature}°C`;
    let descriptionElement = document.querySelector("#description");
        descriptionElement.innerHTML = response.data.condition.description;
    let humidityElement = document.querySelector("#humidity");
        humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
    let speedElement = document.querySelector("#wind-speed");
        speedElement.innerHTML= `${response.data.wind.speed}km/h`;
    let iconElement = document.querySelector("#icon");
        iconElement.innerHTML = `<Img src =" ${response.data.condition.icon_url}" class = "icon"/>`;
    
       getForecast(response.data.city);    
               
    
    }
  }
}
document.getElementById("city-form");
document.addEventListener("submit", searchCity);

function getForecast (city){
   let apiKey = "d270ff52dt3f3obd13aba943d507af34";
   let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}`;
   axios.get(apiUrl).then(displayForecast);
}



function displayForecast() {
  let days = ["Tue", "Wed", "Thu", "Fri", "Sat"];
  let forecastHtml = "";

  days.forEach(function (day) {
    forecastHtml += `
      <div class="weather-app-forecast">
        <div class="weather-forecast-day"></div>
        <div class="weather-forecast-date">${day}</div>
        <div class="weather-forecast-icon">☀️</div> 
        <div class="weather-forecast-temperatures">
          <div class="weather-forecast-temperature"><strong>15°C</strong></div>
          <div class="weather-forecast-temperature">8°C</div> 
        </div>
      </div>
    `;
  });

  
  let forecastElement = document.querySelector("#forecast");
  forecastElement.innerHTML = forecastHtml;
}
displayForecast();

