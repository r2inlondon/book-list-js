// Selectors
const addItems = document.querySelector('.add-items'),     
      itemsList = document.querySelector('.plates');

let items = [];

// even listener
window.onload = displayFromStorage;                         
addItems.addEventListener('submit', addFood);

// functions
function addFood(e){
  let id = itemsList.childElementCount;
  // get user inputn
  const item = addItems.querySelector('input[name=item]');  
  // create li element  
  const li = document.createElement('li');
  // increase id if needed
  if(items.length >= 0){
    id += 1;
  } 
  // insert input and label into li element
  li.innerHTML = `
    <input type="checkbox" id="item-${id -1}">
    <label for="item-${id -1}">${item.value}</label>`
  // insert new item to an array
  items.push(item.value);
  // save to storage
  localStorage.setItem('items',JSON.stringify(items));
  // insert li into the DOM
  itemsList.appendChild(li);
  // clear form
  item.value = "";

  e.preventDefault();
}

function displayFromStorage(){
  console.log('loaded !!');
  
  // if no items in storage
  if(localStorage.getItem('items') === null){
    return;
  } else {
    items = JSON.parse(localStorage.getItem('items'));
  }

  let id = 0;
    
  items.forEach(function(item){

    const li = document.createElement('li');
    // increase id if needed
    if(items.length > 0){
      id += 1;
    } else {
      id = 0;
    }
    // insert input and label into li element
    li.innerHTML = `
      <input type="checkbox" id="item-${id -1}">
      <label for="item-${id -1}">${item}</label>`  
      
      itemsList.appendChild(li);
  });
    
  
}

