function shelfBook(book, shelf) {
  if (shelf.length === 3) return
  
  shelf.push(book);
}

module.exports = {
  shelfBook: shelfBook,
  // unshelfBook: unshelfBook,
  // listTitles: listTitles,
  // searchShelf: searchShelf
};