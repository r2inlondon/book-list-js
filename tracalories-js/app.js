// Storage Controller
const StorageCtrl = (function(){
  
  return{
    saveToStorage: function(item){            
      
      let items = [];
      // Check if any item in storage
      if(localStorage.getItem('items') === null){
        items.push(item);
        localStorage.setItem('items', JSON.stringify(items));
      } else {                     
        let items = [];
        // get items from storage
        items = JSON.parse(localStorage.getItem('items'));        
        // push new intem to array
        items.push(item);
        // save items to local storage
        localStorage.setItem('items', JSON.stringify(items));
      }    
    },
    getFromStorage: function(){
      let items = [];
      // Check if any item in storage
      if(localStorage.getItem('items') === null){
        let items = [];
       } else {                     
      // let items = [];
      // get items from storage
      items = JSON.parse(localStorage.getItem('items'));                      
      }
      
      return items;
    }
    
  }
})();

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
    // [
    //   // {id: 0, name: "Steak", calories: 450},
    //   // {id: 1, name: "HotDog", calories: 650},
    //   // {id: 2, name: "Burger", calories: 750}
    // ],    
    items: StorageCtrl.getFromStorage(),
    currentItem: null,
    totalCalories: 0
  }
  // Public Mehotds
  return {

    getItems: function(){
      return data.items;
    },
    // Create new Item instance
    createItem: function(input){          
      
      let id;
      if(data.items.length > 0){
        id = (data.items.length - 1) + 1;
        newItem = new Item(id, input.name, input.calories);
      } else {
        id = 0;
        newItem = new Item(id, input.name, input.calories);
      }
      data.items.push(newItem);

      return newItem;
    },
    // Get item to edit from the pencil
    itemToEdit: function(id){
      let idCounter = 0;
      let found;

      data.items.forEach(item => {
        
        if(idCounter === id){
          found = item;
        }
        idCounter += 1
      });
      data.currentItem = found;

      return data.currentItem
    }, 
    // item from update meal button
    sendItemToUpdate: function(input){
      let found;

      data.items.forEach(item => {
        if(item.id === data.currentItem.id){
          item.name = input.name;
          item.calories = input.calories;
          found = item;                    
        }
      });
      return found;
    },
    // item to delete via delete btn
    itemToDelete: function(){                  
      // get IDs from all items
      let AllId = data.items.map(item => {
         return item.id;        
      });
      // find the index of the current id
      const index = AllId.indexOf(data.currentItem.id);
      // remove item
      data.items.splice(index, 1);
      
      return data.currentItem

    },
    getTotalCalories: function(){
      let total = 0;
      data.items.forEach(function(item){
        total += parseInt(item.calories);        
      })
      // set total calories in data structure
      data.totalCalories = total;
      
      return data.totalCalories;
    },
    // method use for testing
    logData: function(){
      return data;
    }
  }
})();

/// UI controller
const UICtrl = (function (){
  
  // select items
  const UISelectors = {
    listItems:'#item-list li',
    itemList: '#item-list',
    addBtn: '.add-btn',
    updateBtn: '.update-btn',
    deleteBtn: '.delete-btn',
    backBtn: '.back-btn',
    itemName: '#item-name',    
    // secondaryContent: '.secondary-content',
    itemCalories: '#item-calories',
    totalCalories: '.total-calories'
  }

  // PUBLIC Mehotds
  return {
    // Populate lists
    populateList: function(items){                   
      let html = '';
      let idCounter = 0;

      items.forEach(item => {
        html += ` 
        <li class="collection-item" id="item-${idCounter}">
        <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
        <a href="#" class="secondary-content">
          <i class="edit-item fa fa-pencil"></i>
        </a>
      </li>`
      idCounter += 1;

      });
      // get total calories
      const totalCalories = ItemCtrl.getTotalCalories();

      // add total calories in UI
      UICtrl.showCaloriesTotal(totalCalories);

      document.querySelector(UISelectors.itemList).innerHTML = html;
    },
     // Selectors
     getSelectors: function(){
      return UISelectors;
    },
    // user form input
    getUserInput: function(){
      return  {
        name: document.querySelector(UISelectors.itemName).value,
        calories: document.querySelector(UISelectors.itemCalories).value,
      }      
    }, // Insert new item to DOM.
    addItem: function(item){
      // create the LI with respective class
      const li = document.createElement('li');
      // add classes to LI
      li.className = "collection-item";
      // add ID to LI
      li.setAttribute('id',`item-${item.id}`);
      // add the inner HTML elements in the LI
      li.innerHTML = `<strong>${item.name}: </strong> <em>${item.calories} Calories</em>
      <a href="#" class="secondary-content">
        <i class="edit-item fa fa-pencil"></i>
      </a>`
      //insert LI into DOM
      document.querySelector(UISelectors.itemList).insertAdjacentElement('beforeend',li);
    },
    // Show the item to Edit
    showItemToEdit: function(item){  
      // hide add meal btn and unhide the other buttons      
      
      UICtrl.setAddEdit();
      document.querySelector(UISelectors.itemName).value = item.name;
      document.querySelector(UISelectors.itemCalories).value = item.calories;      
    },
    //Display the item that has been updated and submited
    showUpdatedItem: function(item){
      let listItems = document.querySelectorAll(UISelectors.listItems);
      
      //turn node into Array
      listItems = Array.from(listItems);

      listItems.forEach(function(li){
        const itemID = li.getAttribute('id');

        if(itemID === `item-${item.id}`){
          
          document.querySelector(`#${itemID}`).innerHTML = `
          <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
          <a href="#" class="secondary-content">
            <i class="edit-item fa fa-pencil"></i>
          </a>`
        }
      });

    },
    // remove item from list
    deleteItem: function(item){
      let listItems = document.querySelectorAll(UISelectors.listItems);

      //turn node into Array
      listItems = Array.from(listItems);

      listItems.forEach(function(meal){
        const itemID = meal.getAttribute('id');

        if(itemID === `item-${item.id}`){
          
          document.querySelector(`#${itemID}`).remove();
        }
      });

    },

    // insert Total Calories into DOM
    showCaloriesTotal: function(totalCalories){      
      document.querySelector(UISelectors.totalCalories).innerText = totalCalories;
    },
    // Clear input fields in form
    clearInput: function(){
      document.querySelector(UISelectors.itemName).value = "",
      document.querySelector(UISelectors.itemCalories).value = ""      
    },    
    clearLineBreak: function(){
      document.querySelector(UISelectors.itemList).style.display = "none";
    },
    addLineBreak: function(){
      document.querySelector(UISelectors.itemList).style.display = "block";
    },
    setAddMode: function(){
      document.querySelector(UISelectors.updateBtn).style.display = "none";
      document.querySelector(UISelectors.deleteBtn).style.display = "none";
      document.querySelector(UISelectors.backBtn).style.display = "none";
      document.querySelector(UISelectors.addBtn).style.display = "inline";
    },
    setAddEdit: function(){
      document.querySelector(UISelectors.updateBtn).style.display = "inline";
      document.querySelector(UISelectors.deleteBtn).style.display = "inline";
      document.querySelector(UISelectors.backBtn).style.display = "inline";
      document.querySelector(UISelectors.addBtn).style.display = "none";
    }
  }

})();

// APP controller
const AppCtrl = (function (ItemCtrl, UICtrl, StorageCtrl){
  
  // load event listeners
  const loadEventListeners = function(){
    // Get uiselectors
    const selectors = UICtrl.getSelectors();
        
    // event to add item
    document.querySelector(selectors.addBtn).addEventListener('click', addItem);

    // even to disable submit by enter
    document.addEventListener('keypress', function(e){
      if(e.keycode === 13 || e.which === 13){        
        e.preventDefault();
        return false;
      }
    });

    // event to select item to edit from pencil
    document.querySelector(selectors.itemList).addEventListener('click', itemEditClick);    

    // event to submit via the update button
    document.querySelector(selectors.updateBtn).addEventListener('click', itemEditSubmit);    

     // event to back button submit
     document.querySelector(selectors.backBtn).addEventListener('click', clearAllFields); 
     
     // event to delete 
    document.querySelector(selectors.deleteBtn).addEventListener('click', itemDeleteSubmit);  
  }


  const addItem = function(e){
    
    // get user's input from form.
    const input = UICtrl.getUserInput();
    
    if(input.name !== "" & input.calories !== ""){
      const newItem = ItemCtrl.createItem(input);
      
      // Add new Item to UI
      UICtrl.addItem(newItem);

      // get total calories
      const totalCalories = ItemCtrl.getTotalCalories();

      // add total calories in UI
      UICtrl.showCaloriesTotal(totalCalories);

      //add the line break back in item-list
      UICtrl.addLineBreak();

      // save item to storage
      StorageCtrl.saveToStorage(input);

      //clear form inputs
      UICtrl.clearInput();
    }    
    e.preventDefault();
  }

  // Selected item to edit from pencil
  const itemEditClick = function(e){
    if(e.target.classList.contains('edit-item')){
            
      // Get list item id (item-0, item-1)
      const itemId = e.target.parentElement.parentElement.id;
      
      const itemIdArry = itemId.split('-');

      const temp = parseInt(itemIdArry[1]);
      
      console.log(temp);

      const item = ItemCtrl.itemToEdit(parseInt(itemIdArry[1]));

      UICtrl.showItemToEdit(item);      
    }
    e.preventDefault();
  }

  // submit update via the update button
  const itemEditSubmit = function(e){
    const input = UICtrl.getUserInput(); 
     
    const updatedItem = ItemCtrl.sendItemToUpdate(input);

    UICtrl.showUpdatedItem(updatedItem);

    // get total calories
    const totalCalories = ItemCtrl.getTotalCalories();

    // add total calories in UI
    UICtrl.showCaloriesTotal(totalCalories);

    // Set form ready to start adding items
    UICtrl.setAddMode();

    // Clear form
    UICtrl.clearInput();
    
    e.preventDefault();
  }

  // Clear button function
  const clearAllFields = function(e){
    UICtrl.clearInput();
    UICtrl.setAddMode();
    e.preventDefault();
  }

  // delete button function
  const itemDeleteSubmit = (e) => { 

    //delete item from data structure
    const deletedtItem = ItemCtrl.itemToDelete();

    // delete item or li element from list
    UICtrl.deleteItem(deletedtItem);
    // Clear form
    UICtrl.clearInput();

    // Set form ready to start adding items
    UICtrl.setAddMode();

   // get total calories
   const totalCalories = ItemCtrl.getTotalCalories();

   // add total calories in UI
   UICtrl.showCaloriesTotal(totalCalories);

    e.preventDefault();
  }
  
  // Public Mehotds
  return {    
    init: function() {            
      // Set form ready to start adding items
      UICtrl.setAddMode();

      // Fetch items from Data Structure
      const items = ItemCtrl.getItems();
      
      if(items.length === 0){
        UICtrl.clearLineBreak();
      }else{
        // populate items with items        
        UICtrl.populateList(items); 
        
      }
      // load event listeners
      loadEventListeners();      
      
    }          
  }

})(ItemCtrl,UICtrl, StorageCtrl);

AppCtrl.init();
