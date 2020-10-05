function createTitle(title) {
  return `The ${title}`;
}

function buildMainCharacter(name, age, pronouns) {
  return {
    name,
    age,
    pronouns
  };
}

function saveReview(review, reviewArr) {
  if(!reviewArr.includes(review)) {
    reviewArr.push(review);
  }
}

function calculatePageCount(title) {
  return title.length * 20;
}

function writeBook(title, mainCharacter, genre) {
  return {
    title,
    mainCharacter,
    pageCount: calculatePageCount(title),
    genre
  };
}

function editBook(book) {
  book.pageCount *= .75;
}

module.exports = {
  createTitle: createTitle,
  buildMainCharacter: buildMainCharacter,
  saveReview: saveReview,
  calculatePageCount: calculatePageCount,
  writeBook: writeBook,
  editBook: editBook
}