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
}

function checkoutBook(library, bookTitle) {
  // let titles = Object.values(shelves).map(value => value[0][title])
  // if (!titles.includes(bookTitle)) return
  
  shelves = library.shelves;

  for (let genre in shelves) {
    if (shelves[genre][0].title === bookTitle ) {
      shelves[genre].pop();
    }
  }
  return `You have now checked out ${bookTitle} from the Denver Public Library`;
}

module.exports = {
  createLibrary: createLibrary,
  addBook: addBook,
  checkoutBook: checkoutBook
};