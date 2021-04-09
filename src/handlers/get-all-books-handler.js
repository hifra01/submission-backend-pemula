const books = require('../books');

const getAllBooksHandler = (request, h) => {
  let booksList = books;

  const { name, reading, finished } = request.query;

  if (name !== undefined) {
    booksList = booksList.filter((book) => book.name.toLowerCase().includes(name.toLowerCase()));
  }

  if (reading === '1') {
    booksList = booksList.filter((book) => book.reading === true);
  } else if (reading === '0') {
    booksList = booksList.filter((book) => book.reading === false);
  }

  if (finished === '1') {
    booksList = booksList.filter((book) => book.finished === true);
  } else if (finished === '0') {
    booksList = booksList.filter((book) => book.finished === false);
  }

  booksList = booksList.map((book) => {
    // eslint-disable-next-line no-shadow
    const { id, name, publisher } = book;
    return { id, name, publisher };
  });

  const response = h.response({
    status: 'success',
    data: {
      books: booksList,
    },
  });
  response.code(200);
  return response;
};

module.exports = getAllBooksHandler;
