// vars
let clicked = false;

// selectors
const items = document.querySelector('.items');

// event listeners
items.addEventListener('mousedown', moveItems);
items.addEventListener('mouseup', stopItems);

// functions
function moveItems(e){
    console.log('clicked');
    clicked = true;
    items.classList.add("active");    
}

function stopItems(e){
    clicked = false;
    items.classList.remove("active");    
}
