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


module.exports = {
  createLibrary: createLibrary,
  // addBook: addBook,
  // checkoutBook: checkoutBook
};