// Storage Controller

// Item Controller
const ItemCtrl = (function (){
  // item constructor 
  const Item = function(id, name, calories){
    this.id = id;
    this.name = name;
    this.calories = calories;
  }

  //data Structure
  const data = {
    items: [
      {id: 0, name: "Steak", calories: 450},
      {id: 1, name: "HotDog", calories: 650},
      {id: 2, name: "Burger", calories: 750}
    ],
    currentItem: null,
    totalCalories: 0
  }
  // Public Mehotds
  return {
    logData: function(){
      return data;
    }
  }

})();

// UI controller
const UICtrl = (function (){

  // Public Mehotds

})();

// APP controller
const AppCtrl = (function (ItemCtrl,UICtrl ){
  
  // Public Mehotds
  return {
    init: function() {
      ItemCtrl.logData();
    }
      
    
  }

})(ItemCtrl,UICtrl);

AppCtrl.init();
