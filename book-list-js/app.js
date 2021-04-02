// Book constructor
class Book {
  constructor(title, author, isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }  
}

//Selectors
const bookForm = document.getElementById('book-form');

//Event Listener
bookForm.addEventListener('submit', addBook);

// Functions
function addBook(e){
  let newBook;
  const title = document.getElementById('title').value,  
        author = document.getElementById('author').value,
        isbn = document.getElementById('isbn').value;

  if( title === "" || author === "" || isbn === ""){
    message('Fill all the fields', "error");
    setTimeout(removeMessage, 2000);    
    
  } else {
    message('Book added', "success");
    setTimeout(removeMessage, 2000);
    newBook = new Book (title, author, isbn) ; 
    console.log(newBook);
    clearFields();
  }
  e.preventDefault();
}

function message(msg, classN) {
  //create div
  const msgDiv = document.createElement('div');
  msgDiv.className = `${classN} u-full-width message`;
  msgDiv.innerText = msg;
  
  
  // insert message into DOM
  const container = document.querySelector('.container');
  container.insertBefore(msgDiv, bookForm);  
}

// Remove Message
function removeMessage (){
  document.querySelector('.message').remove();  
}

// clear fields
function clearFields(){
  document.getElementById('title').value = "";
  document.getElementById('author').value = "";
  document.getElementById('isbn').value = "";
}