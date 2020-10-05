const book = require("./book");

function createLibrary(name) {
  return {
    name,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: []
    }
  }
}

function addBook(library, book) {
  library.shelves[book.genre].push(book);
}

function checkoutBook(library, bookTitle) {
  if (!onShelf(library, bookTitle)) {
    return `Sorry, there are currently no copies of ${bookTitle} available at the Denver Public Library`;
  }
  
  let shelves = library.shelves;
  
  for (category in shelves) {
    let bookTitles = shelves[category].map( book => book.title );
    
    if (bookTitles.includes(bookTitle)) {
      let bookIdx = bookTitles.indexOf(bookTitle);
      shelves[category].splice(bookIdx, 1);
      return `You have now checked out ${bookTitle} from the Denver Public Library`;
    }
  }
}

function onShelf(library, bookTitle) {
  let allShelves = Object.values(library.shelves);
  let onShelf = false;

  for (shelve of allShelves) {
    if (shelve.length === 0) continue;
    
    if (shelve.map(book => book.title).includes(bookTitle)) {
      onShelf = true;
    }
  }

  return onShelf;
}

module.exports = {
  createLibrary: createLibrary,
  addBook: addBook,
  checkoutBook: checkoutBook
};