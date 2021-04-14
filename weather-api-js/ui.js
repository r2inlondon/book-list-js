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
    // removing decimal from tempeture
    const wTemp = Math.trunc(`${cityData.cityWeather.main.temp}`),
          feelsLike = Math.trunc(`${cityData.cityWeather.main.feels_like}`);
          
    // Insert weather to DOM
    this.location.innerText = cityData.cityWeather.name;
    this.description.innerText = cityData.cityWeather.weather[0].main;
    this.tempture.innerText = `${wTemp} C`    
    this.humidity.innerText = `Humidity: ${cityData.cityWeather.main.humidity}`
    this.dewpoint.innerText = `Pressure: ${cityData.cityWeather.main.pressure}`
    this.feelsLike.innerText = `Feels Like: ${feelsLike} C` 
    this.wind.innerText = `Wind Speed: ${cityData.cityWeather.wind.speed} KM`
  }

  showIcon(icon){
    //select img elemet
    const image = document.getElementById('w-icon');
    // create attribute
    const att = document.createAttribute('src');
    // assign value to attribute
    att.value = `http://openweathermap.org/img/wn/${icon}@2x.png`;                  
    // insert value to element
    image.setAttributeNode(att);
  }
}