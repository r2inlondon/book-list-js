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
  //clear fields
  clearFields(){
    document.getElementById('title').value = "";
    document.getElementById('author').value = "";
    document.getElementById('isbn').value = "";
  }
  // delete book
  deleteBook(e){
    if(e.parentElement.classList.contains('delete-item')){
      e.parentElement.parentElement.parentElement.remove();
      // // remove from storage
      // removeInStorage(e.parentElement.parentElement.parentElement);
    }
  }
}

// Local Storage class
class Store {
  static getBooks(){
    let books;
    //if no books in storage
    if(localStorage.getItem('books') === null){
      books = [];    
    } else {
    // get books from Storage
      books = JSON.parse(localStorage.getItem('books'));
    }
    return books;  
  }

  static displayBooks(books){
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
  
  static saveBook(newBook){
    const books = Store.getBooks();
    // push new book to array of books
    books.push(newBook);
    // save all books to storage
    localStorage.setItem('books',JSON.stringify(books));
  }

  static deleteBook(target){
    const books = Store.getBooks();
  
    // delete book loop & conditional
    books.forEach(function (book, index) {
      // compara ISBNs
      if(book.isbn === target){
        // delete book
        books.splice(index, 1);
      }
      // save to localStorage
      localStorage.setItem('books',JSON.stringify(books));
    });
  }
}


// Event Listener to load books from storage
window.addEventListener('DOMContentLoaded', function(){
  // fetch books from storage
  const books = Store.getBooks();
  // render books
  Store.displayBooks(books);
});

// event listener to add book
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
    // add book
    ui.addBookToList(newBook);    
    // save book to storage
    Store.saveBook(newBook);
    // Add success message
    ui.message('Book added', "success");        
      // Clear the fields    
    ui.clearFields();
      // insert book instance into table          
  }
  e.preventDefault();
});

// delete book event listener
theTable.addEventListener('click', function(e){
  // instance of UI class
  const ui = new UI();
  // deleted method passing the target  
  ui.deleteBook(e.target);
  // delete book from storage
  Store.deleteBook(e.target.parentElement.parentElement.previousElementSibling.innerText);  
  //send message
  ui.message('Book has been removed', 'success');
});

