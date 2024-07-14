const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
}

addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, false);
addBookToLibrary("The Little Prince", "Antoine de Saint-Exupéry", 96, false);
addBookToLibrary("Murder on the Orient Express", "Agatha Christie", 274, false);

if (myLibrary.length > 0) {
  myLibrary.map((book, index) => {
    console.log(book.title, index);
  });
}

myLibrary.splice(1, 1); // 2nd parameter means remove one item only
console.log(myLibrary);
