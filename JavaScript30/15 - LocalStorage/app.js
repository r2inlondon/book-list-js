// Selectors
const addItems = document.querySelector('.add-items'),     
      itemsList = document.querySelector('.plates');

const items = [];

// even listener
addItems.addEventListener('submit', addFood);

// functions
function addFood(e){
  // get user inputn
  const item = addItems.querySelector('input[name=item]');  
  // create li element  
  const li = document.createElement('li');
  // // create checkbox
  const input = document.createElement('input');
  input.type = "checkbox";
  input.setAttribute('id','item');
  // create label to display new item
  const label = document.createElement('label');
  label.setAttribute('for', 'item');
  label.innerText = `${item.value}`;
  // insert input and label into the li
  li.appendChild(input);
  li.appendChild(label);
  // insert li into the DOM
  itemsList.appendChild(li);
  // clear form
  item.value = "";

  e.preventDefault();
}

