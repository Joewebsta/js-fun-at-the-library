function createTitle(title) {
  return `The ${title}`;
}

function buildMainCharacter(name, age, pronouns) {
  return {
    name: name,
    age: age,
    pronouns: pronouns
  }
}

function saveReview(review, reviewArr) {
  if(!reviewArr.includes(review)) {
    reviewArr.push(review);
  }
}

module.exports = {
  createTitle: createTitle,
  buildMainCharacter: buildMainCharacter,
  saveReview: saveReview,
  // calculatePageCount: calculatePageCount,
  // writeBook: writeBook,
  // editBook: editBook
}