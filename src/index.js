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
  
            
        }
    