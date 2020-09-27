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
}

module.exports = Librarian;