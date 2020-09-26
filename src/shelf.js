const book = require("./book");

function shelfBook(book, shelf) {
  if (shelf.length === 3) return
  
  shelf.push(book);
}

function unshelfBook(title, shelf) {
  bookIdx = shelf.findIndex(book => book.title === title);
  shelf.splice(bookIdx, 1);      
}

function listTitles(books) {
  return books.map(book => book.title).join(', ');
}

module.exports = {
  shelfBook: shelfBook,
  unshelfBook: unshelfBook,
  listTitles: listTitles,
  // searchShelf: searchShelf
};