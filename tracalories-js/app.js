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

    getItems: function(){
      return data.items;
    },

    logData: function(){
      return data;
    }
  }
})();

// UI controller
const UICtrl = (function (){
  const UISelectors = {
    itemList: '#item-list'
  }

  // PUBLIC Mehotds
  return {
    populateList: function(items){
      let html = '';

      items.forEach(item => {
        html += ` 
        <li class="collection-item" id="item${item.id}">
        <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
        <a href="#" class="secondary-content">
          <i class="edit-item fa fa-pencil"></i>
        </a>
      </li>`
      });
      document.querySelector(UISelectors.itemList).innerHTML = html;
    }
  }

})();

// APP controller
const AppCtrl = (function (ItemCtrl,UICtrl ){
  
  // Public Mehotds
  return {
    init: function() {
      ItemCtrl.logData();
      
      const items = ItemCtrl.getItems();
      UICtrl.populateList(items);
    }          
  }

})(ItemCtrl,UICtrl);

AppCtrl.init();
