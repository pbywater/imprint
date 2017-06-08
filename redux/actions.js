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

export function startTime(startTime, photo) {
  return {
    type: c.START_TIMER,
    photo,
    startTime
  };
}
export function endTime(endTime, photo) {
  return {
    type: c.END_TIMER,
    photo,
    time: endTime
  };
}
