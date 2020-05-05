const bookName = document.getElementById("bookname");
const author = document.getElementById("author");
const addBook = document.getElementById("add");
const typeFiction = document.getElementById("Fiction");
const typeHistory = document.getElementById("History");
const table = document.getElementsByClassName("table")[0];
let userBooks = document.getElementById("userbooks");
const alert1 = document.getElementById("alert");
let type;

//  Book constructor
function Book(name, author, type) {
  this.name = name;
  this.author = author;
  this.type = type;
}

// Display constructor
function Display() {}

// Prototype declaration.
Display.prototype.show = function (book) {
  userBooks.innerHTML += `          <tr>
                                                          <td>${book.name}</td>
                                                          <td>${book.author}</td>
                                                          <td>${book.type}</td>
                                                        </tr>`;
};

addBook.addEventListener("click", addedBook);

function addedBook() {
  alert1.style.display = "block";
  if (bookName.value.length > 2 && author.value.length > 2) {
    if (typeFiction.checked) {
      type = "Fiction";
    } else {
      type = "History";
    }
    let book = new Book(bookName.value, author.value, type);
    let display = new Display();
    display.show(book);
    alert1.setAttribute("class", "alert alert-success");
    alert1.textContent = `Your book was succesfully added`;
    //  Storing books in the local storage.
    store(book);
  } else {
    alert1.setAttribute("class", "alert alert-danger");
    alert1.textContent = `Your book is not added!!!`;
  }
  setTimeout(() => {
    alert1.style.display = "none";
  }, 2000);
}

function store(book) {
  let storage = localStorage.getItem("books");
  if (storage == null) {
    // JSON.stringify(book);
    localStorage.setItem("books", book);
  }
}
