// Selectors
const addItems = document.querySelector('.add-items'),     
      itemsList = document.querySelector('.plates');

const items = [];

// even listener
addItems.addEventListener('submit', addFood);

// functions
function addFood(e){
  let id = itemsList.childElementCount;
  // get user inputn
  const item = addItems.querySelector('input[name=item]');  
  // create li element  
  const li = document.createElement('li');
  // increase id if needed
  if(itemsList.childElementCount > 0){
    id += 1;
  } 


  // insert input and label into li element
  li.innerHTML = `
    <input type="checkbox" id="item-${id}">
    <label for="item-${id}">${item.value}</label>`
  // insert li into the DOM
  itemsList.appendChild(li);
  // clear form
  item.value = "";

  e.preventDefault();
}

