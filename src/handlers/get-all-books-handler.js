const books = require('../books');

const filterName = (bookList, queryName) => bookList.filter(
  (book) => book.name.toLowerCase().includes(queryName.toLowerCase()),
);

const filterReading = (bookList, queryReading) => {
  if (queryReading === '1') {
    return bookList.filter((book) => book.reading === true);
  } if (queryReading === '0') {
    return bookList.filter((book) => book.reading === false);
  }
  return bookList;
};

const filterFinished = (bookList, queryFinished) => {
  if (queryFinished === '1') {
    return bookList.filter((book) => book.finished === true);
  } if (queryFinished === '0') {
    return bookList.filter((book) => book.finished === false);
  }
  return bookList;
};

const getAllBooksHandler = (request, h) => {
  let bookList = books;

  const { name: queryName, reading: queryReading, finished: queryFinished } = request.query;

  if (queryName !== undefined) {
    bookList = filterName(bookList, queryName);
  }

  if (queryReading !== undefined) {
    bookList = filterReading(bookList, queryReading);
  }

  if (queryFinished !== undefined) {
    bookList = filterFinished(bookList, queryFinished);
  }

  bookList = bookList.map((book) => {
    const { id, name, publisher } = book;
    return { id, name, publisher };
  });

  const response = h.response({
    status: 'success',
    data: {
      books: bookList,
    },
  });
  response.code(200);
  return response;
};

module.exports = getAllBooksHandler;
