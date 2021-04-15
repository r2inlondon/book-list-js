class Store {
    constructor(){
      this.city;
      this.defaultCity = 'london';
    }

  getCityStorage(){
    if(localStorage.getItem('city') === null){
      this.city = this.defaultCity;      
    } else {
      this.city = localStorage.getItem('city');
    };
    
    return {
      city: this.city
    } 
  }  
  
  setCity(city){
     localStorage.setItem('city',city);  
  }    
}
