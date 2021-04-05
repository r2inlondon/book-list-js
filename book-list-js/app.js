// //Selectors
const bookForm = document.getElementById('book-form'),
theTable = document.getElementById('book-list');  

// Book constructor
class Book {
  constructor(title, author, isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }  
}
//UI Constructor
class UI {
  addBookToList (book){  
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
  // success and error message
  message(msg, classN) {
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
  clearFields(){
    document.getElementById('title').value = "";
    document.getElementById('author').value = "";
    document.getElementById('isbn').value = "";
  }

  // delete book
  deleteBook(e){
    if(e.parentElement.classList.contains('delete-item')){
      e.parentElement.parentElement.parentElement.remove();

      // remove from storage
      removeInStorage(e.parentElement.parentElement.parentElement);
    }
  }
}

//Event Listeners
// load from storage
window.addEventListener('DOMContentLoaded', loadStorage);
// event to add book
bookForm.addEventListener('submit', function(e){
  const title = document.getElementById('title').value,  
        author = document.getElementById('author').value,
        isbn = document.getElementById('isbn').value;
  // instance of UI class
  const ui = new UI();
  // validation
  if( title === "" || author === "" || isbn === ""){
    ui.message('Fill all the fields', "error");      
  } else {
    //create instance
    const newBook = new Book (title, author, isbn) ;
    ui.addBookToList(newBook);    
    // Add success message
    ui.message('Book added', "success");        
      // Clear the fields    
    ui.clearFields();
      // insert book instance into table
      // save to storage
    saveToStorage(newBook);
  }
  e.preventDefault();
});

// delete book event
theTable.addEventListener('click', function(e){
  // instance of UI class
  const ui = new UI();
  // deleted method passing the target
  ui.deleteBook(e.target);
  //send message
  ui.message('Book has been removed', 'success');
});

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