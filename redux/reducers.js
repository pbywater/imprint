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
    default:
      return state;
  }
}

export default combineReducers({
  books
});
