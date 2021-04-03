// Book constructor
class Book {
  constructor(title, author, isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }  
}

// variables 
let newBook;

//Selectors
const bookForm = document.getElementById('book-form'),
      theTable = document.querySelector('tbody');  

//Event Listener
window.addEventListener('DOMContentLoaded', loadStorage);
bookForm.addEventListener('submit', addBook);
theTable.addEventListener('click', deleteBook);

// Functions ****

// Add book function
function addBook(e){

  const title = document.getElementById('title').value,  
        author = document.getElementById('author').value,
        isbn = document.getElementById('isbn').value;

  // validate empty fields
  if( title === "" || author === "" || isbn === ""){
    message('Fill all the fields', "error");
    setTimeout(removeMessage, 2000);        
  } else {
    // Add success message
    message('Book added', "success");
    // remove success message
    setTimeout(removeMessage, 2000);
    //create instance
    newBook = new Book (title, author, isbn) ; 
    // Clear the fields    
    clearFields();
    // insert book instance into table
    insertBook(newBook);
    // save to storage
    saveToStorage(newBook);

  }
  e.preventDefault();
}

// Load books from storage
function loadStorage(){
  let books;
  //if no books in storage
  if(localStorage.getItem('books') === null){
    books = [];    
  } else {
  // get books from Storage
    books = JSON.parse(localStorage.getItem('books'));
  }
  books.forEach(book => {
    const link = document.createElement('a');
    link.className = "delete-item";
    link.innerHTML = '<i class="far fa-trash-alt"></i>';
    
    // create row and cells
    const row = theTable.insertRow(0),
          cell0 = row.insertCell(0),
          cell1 = row.insertCell(1),
          cell2 = row.insertCell(2),
          cell3 = row.insertCell(3);        
    // insert book instace into the cells
          cell0.innerHTML = book.title;
          cell1.innerHTML = book.author;
          cell2.innerHTML = book.isbn;
          cell3.appendChild(link);

  })
}

// success and error message
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

//crete row, elements and insert book
function insertBook(newBook){
  // create link to delete
  const link = document.createElement('a');
  link.className = "delete-item";
  link.innerHTML = '<i class="far fa-trash-alt"></i>';
  
  // create row and cells
  const row = theTable.insertRow(0),
        cell0 = row.insertCell(0),
        cell1 = row.insertCell(1),
        cell2 = row.insertCell(2),
        cell3 = row.insertCell(3);        
  // insert book instace into the cells
        cell0.innerHTML = newBook.title;
        cell1.innerHTML = newBook.author;
        cell2.innerHTML = newBook.isbn;
        cell3.appendChild(link);
}

// save book to storage
function saveToStorage(newBook){
  let books;
  //if no books in storage
  if(localStorage.getItem('books') === null){
    books = [];    
  } else {
  // get books from Storage
    books = JSON.parse(localStorage.getItem('books'));
  }
  // push new book to array of books
  books.push(newBook);
  // save all books to storage
  localStorage.setItem('books',JSON.stringify(books));
}

// delete book
function deleteBook (e){
  if(e.target.parentElement.classList.contains('delete-item')){
    e.target.parentElement.parentElement.parentElement.remove();

    // remove from storage
    // RermoveInStorage(e.target.parentElement.parentElement.parentElement);
  }
}