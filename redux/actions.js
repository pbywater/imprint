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

export function selectBook(book) {
  return {
    type: c.SELECT_BOOK,
    book
  };
}

export function timeUser(photo, startTime) {
  return {
    type: c.TIME_USER,
    photo,
    startTime
  };
}
