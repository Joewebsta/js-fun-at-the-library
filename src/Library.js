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
  shelves = library.shelves
  switch (book.genre) {
    case 'fantasy':
      shelves.fantasy.push(book);
      break;
    case 'fiction':
      shelves.fiction.push(book);
      break;
    case 'nonFiction':
      shelves.nonFiction.push(book);
      break;
    default:
      "Genre shelf not found";
      break;
  }
  
  return library.shelves.fantasy.push(book);
}

module.exports = {
  createLibrary: createLibrary,
  addBook: addBook,
  // checkoutBook: checkoutBook
};