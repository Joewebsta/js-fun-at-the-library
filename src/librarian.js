const book = require('./book.js');

var checkoutBook = require('../src/library.js').checkoutBook;
var searchShelf = require('../src/shelf.js').searchShelf;

class Librarian {
  constructor(name, library) {
    this.name = name;
    this.library = library;
  }
  
  greetPatron(name, morning=false) {
    return morning ? `Good morning, ${name}!` : `Hello, ${name}!`; 
  }

  findBook(bookTitle) {
    let shelves = this.library.shelves;
    for (let category in shelves) {
      if(searchShelf(shelves[category], bookTitle)) {
        checkoutBook(this.library, bookTitle);        
        return `Yes, we have ${bookTitle}`;
      }
    }

    return `Sorry, we do not have ${bookTitle}`;
  }

  
}

module.exports = Librarian;