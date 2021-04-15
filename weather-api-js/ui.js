class UI {
  constructor(){
    // Selectors
    this.location = document.getElementById('w-location');
    this.description = document.getElementById('w-description');
    this.tempture = document.getElementById('w-tempture');    
    this.humidity = document.getElementById('w-humidity');
    this.dewpoint = document.getElementById('w-dewpoint');
    this.feelsLike = document.getElementById('w-feels-like');
    this.wind = document.getElementById('w-wind');
    this.icon = document.getElementById('w-icon');
  }
 
  showMain(cityData){    
    // removing decimals from tempeture
    const wTemp = Math.trunc(`${cityData.main.temp}`),
          feelsLike = Math.trunc(`${cityData.main.feels_like}`);
          
    // Insert weather to DOM
    this.location.innerText = cityData.name;
    this.description.innerText = cityData.weather[0].main;
    this.tempture.innerText = `${wTemp} C`    
    this.humidity.innerText = `Humidity: ${cityData.main.humidity}`
    this.dewpoint.innerText = `Pressure: ${cityData.main.pressure}`
    this.feelsLike.innerText = `Feels Like: ${feelsLike} C` 
    this.wind.innerText = `Wind Speed: ${cityData.wind.speed} KM`
    this.icon.setAttribute('src',`http://openweathermap.org/img/wn/${cityData.weather[0].icon}@2x.png`);
    
  }
}