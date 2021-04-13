class Weather {
  constructor(){
    this.key = '18c4daf195cc8d32605a1bc589f47135';
  }

  async getWeather(city){
    // await reposponse to fetch Weather
    const apiWeather = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${this.key}`);
    
    // procced after it has been fetch
    const cityWeather = await apiWeather.json();

    //only return if the 2nd promise is completed
    return {
      cityWeather
    }
  }
}