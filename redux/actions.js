import * as c from './constants';

export function addPhoto(book, photo) {
  return {
    type: c.ADD_PHOTO,
    book,
    photo
  };
}

export function addBook(book) {
  return {
    type: c.ADD_BOOK,
    book
  };
}
