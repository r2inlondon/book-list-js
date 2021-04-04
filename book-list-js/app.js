// Book constructor
class Book {
  constructor(title, author, isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }  
}

class UI {}

// variables 
let newBook;

//Selectors
const bookForm = document.getElementById('book-form'),
      theTable = document.getElementById('book-list');  

//Event Listener
window.addEventListener('DOMContentLoaded', loadStorage);
bookForm.addEventListener('submit', addBook);
theTable.addEventListener('click', deleteBook);

// Functions ****

// Add book
function addBook(e){

  const title = document.getElementById('title').value,  
        author = document.getElementById('author').value,
        isbn = document.getElementById('isbn').value;

  // validate empty fields
  if( title === "" || author === "" || isbn === ""){
    message('Fill all the fields', "error");      
  } else {
    // Add success message
    message('Book added', "success");   
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

   // create table row    
   const tr = document.createElement('tr');
   // cells
   tr.innerHTML = `<td>${book.title}</td>
                   <td>${book.author}</td>
                   <td>${book.isbn}</td>
                   <td> <a href="#" class="delete-item"><i class="far fa-trash-alt"></i></a></td>`;
   // insert row into the table body
   theTable.appendChild(tr);

  });
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
  
  setTimeout(function(){
    document.querySelector('.message').remove();  
  },3000);
}


// clear fields
function clearFields(){
  document.getElementById('title').value = "";
  document.getElementById('author').value = "";
  document.getElementById('isbn').value = "";
}

//crete row, elements and insert book
function insertBook(book){
    // create table row    
    const tr = document.createElement('tr');
    // cells
    tr.innerHTML = `<td>${book.title}</td>
                    <td>${book.author}</td>
                    <td>${book.isbn}</td>
                    <td> <a href="#" class="delete-item"><i class="far fa-trash-alt"></i></a></td>`;
    // insert row into the table body
    theTable.appendChild(tr);

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
    removeInStorage(e.target.parentElement.parentElement.parentElement);
  }
}

// remove book from storage
function removeInStorage(bookItem){
  let books;
  //if no books in storage
  if(localStorage.getItem('books') === null){
    books = [];    
  } else {
  // get books from Storage
    books = JSON.parse(localStorage.getItem('books'));
  }
  
  // delete book conditional
  books.forEach(function (book, index) {
    if(book.title === bookItem.children[0].innerText){
      // delete book
      books.splice(index, 1);
    }
    // save to localStorage
    localStorage.setItem('books',JSON.stringify(books));
  });

}