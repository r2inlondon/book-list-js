class Weather {
  constructor(city){
    this.key = '18c4daf195cc8d32605a1bc589f47135';
    this.city = city;
  }

  // Fetch Weather from API
  async getWeather(){
    // await reposponse to fetch Weather
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&appid=${this.key}`);
    
    // procced after it has been fetch
    const reponseData = await response.json();

    //only return if the 2nd promise is completed
    return {
      reponseData
    }
  }

  // Change Weather location
  async changeCity(city){
    this.city = city;
  }
}