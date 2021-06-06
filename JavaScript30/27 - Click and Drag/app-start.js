// vars
let clicked = false;

// selectors
const items = document.querySelector('.items');

// event listeners
items.addEventListener('mousedown', moveItems);
items.addEventListener('mouseup', stopItems);

// functions
function moveItems(e){    
    items.classList.add("active");

    this.addEventListener('mousemove', scrollPosition); 
    
}

function stopItems(e){    
    items.classList.remove("active");    
    this.removeEventListener('mousemove', scrollPosition); 
}

function scrollPosition(e){      
    items.scrollTo(e.clientX * 2.7,0);
    console.log(e.clientX);
    
}
