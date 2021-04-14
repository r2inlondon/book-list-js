class Weather {
  constructor(city){
    this.key = '18c4daf195cc8d32605a1bc589f47135';
    this.city = city;
  }

  async getWeather(){
    // await reposponse to fetch Weather
    const apiWeather = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&appid=${this.key}`);
    
    // procced after it has been fetch
    const cityWeather = await apiWeather.json();

    //only return if the 2nd promise is completed
    return {
      cityWeather
    }
  }

  async changeCity(city){
    this.city = city;
  }
}