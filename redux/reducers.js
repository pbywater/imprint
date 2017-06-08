import { combineReducers } from 'redux';
import * as c from './constants';

const updatedBooks = (state, action) =>
  state.map(book => {
    if (book.title === action.book) {
      book.photos = [...book.photos, action.photo];
      return book;
    }
    return book;
  });

function books(state = [], action) {
  switch (action.type) {
    case c.ADD_BOOK:
      return [...state, action.book];
    case c.ADD_PHOTO:
      return updatedBooks(state, action);
    case c.SELECT_BOOK:
      return updatedBooks(state, action);
    default:
      return state;
  }
}
function selectedBook(state = '', action) {
  switch (action.type) {
    case c.SELECT_BOOK:
      return action.book;
    default:
      return state;
  }
}

function selectedPhoto(state = [], action) {
  switch (action.type) {
    case c.START_TIMER:
      return [
        ...state,
        { photo: action.photo, startTime: action.startTime, endTime: '' }
      ];
    case c.END_TIMER:
      return findPhoto(action.photo, action.time, state);
    default:
      return state;
  }
}

const findPhoto = (selectedPhoto, endTime, state) =>
  state.map(photoObj => {
    if (selectedPhoto === photoObj.photo) {
      photoObj.endTime = endTime;
      photoObj.dwellTime = (photoObj.endTime - photoObj.startTime) / 1000;
      return photoObj;
    }
    return photoObj;
  });

export default combineReducers({
  books,
  selectedBook,
  selectedPhoto
});
