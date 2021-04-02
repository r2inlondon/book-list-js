//Selectors
const bookForm = document.getElementById('book-form');

//Event Listener
bookForm.addEventListener('submit', addBook);

// Functions
function addBook(e){
  const title = document.getElementById('title').value,  
        author = document.getElementById('author').value,
        isbn = document.getElementById('isbn').value;

  if( title === "" || author === "" || isbn === ""){
    message('Fill all the fields', "error");
    setTimeout(clearMessage, 2000);    
    
  } else {
    message('Book added', "success");
    setTimeout(clearMessage, 2000); 
  }
  e.preventDefault();
}

function message(msg, classN) {
  //create div
  const msgDiv = document.createElement('div');
  msgDiv.className = `${classN} u-full-width message`;
  msgDiv.innerText = msg;
  
  console.log(msgDiv);
  // insert message into DOM
  const container = document.querySelector('.container');
  container.insertBefore(msgDiv, bookForm);  
}

// Clear Message
function clearMessage (){
  document.querySelector('.message').remove();  

}