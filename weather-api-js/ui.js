class UI {
  constructor(){
    this.location = document.getElementById('w-location');
    this.description = document.getElementById('w-description');
    this.tempture = document.getElementById('w-tempture');

  }
 
  showMain(cityData){
    
    this.location.innerText = `${cityData.cityWeather.name}`
    this.description.innerText = `${cityData.cityWeather.weather[0].description}`

    const wTemp = Math.trunc(`${cityData.cityWeather.main.temp}`)
    this.tempture.innerText = `${wTemp} C`
  }
}