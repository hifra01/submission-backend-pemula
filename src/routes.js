const addBooksHandler = require('./handlers/add-books-handler');
const getAllBooksHandler = require('./handlers/get-all-books-handler');
const getBookByIdHandler = require('./handlers/get-book-by-id-handler');
const putBookByIdHandler = require('./handlers/put-book-by-id-handler');
const deleteBookByIdHandler = require('./handlers/delete-book-by-id-handler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addBooksHandler,
  },
  {
    method: 'GET',
    path: '/books',
    handler: getAllBooksHandler,
  },
  {
    method: 'GET',
    path: '/books/{bookId}',
    handler: getBookByIdHandler,
  },
  {
    method: 'PUT',
    path: '/books/{bookId}',
    handler: putBookByIdHandler,
  },
  {
    method: 'DELETE',
    path: '/books/{bookId}',
    handler: deleteBookByIdHandler,
  },
];

module.exports = routes;
