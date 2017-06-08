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

function books(
  state = [
    // { title: 'Editorial', id: 13544, photos: [] },
    // { title: 'Commercial', id: 67368, photos: [] }
  ],
  action
) {
  switch (action.type) {
    case c.ADD_BOOK:
      return [...state, action.book];
    case c.ADD_PHOTO:
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

function appointments(
  state = [
    {
      name: 'Burberry',
      time: '14:30-17:30',
      address: 'SW1P 2AW',
      notes: 'bring heels',
      portfolio: '',
      // portfolio: 'Editorial',
      isEdit: false,
      isNew: false,
    },
    {
      name: 'Topshop',
      time: '14:30-17:30',
      address: 'SW1P 2AW',
      notes: 'more dummy data',
      portfolio: '',
      // portfolio: 'Commercial',
      isEdit: false,
      isNew: false,
    },
  ],
  action
) {
  switch (action.type) {
    case c.ADD_APPOINTMENT:
      return [...state, action.appointment];
    case c.EDIT_APPOINTMENT:
      const editedAppointments = state.map((appointment, index) => {
        if (index === action.id) {
          return { ...appointment, [action.key]: action.text };
        }
        return appointment;
      });
      return editedAppointments;
    case c.TOGGLE_EDIT:
      const toggledStyle = state.map((appointment, index) => {
        if (index === action.id) {
          return { ...appointment, isEdit: !appointment.isEdit };
        }
        return appointment;
      });
      return toggledStyle;
    case c.EDIT_MODE:
      const editMode = state.map((appointment, index) => {
        if (index === action.id) {
          return { ...appointment, isEdit: true };
        }
        return appointment;
      });
      return editMode;
    case c.SAVE_APPOINTMENT:
      const savedAppointments = state.map((appointment, index) => {
        if (index === action.id) {
          return { ...appointment, isEdit: false, isNew: false };
        }
        return appointment;
      });
      return savedAppointments;
    case c.CHANGE_BOOK:
      const changedBook = state.map((appointment, index) => {
        if (index === action.id) {
          return { ...appointment, portfolio: action.portfolio };
        }
        return appointment;
      });
      return changedBook;
    default:
      return state;
  }
}

export default combineReducers({
  books,
  selectedBook,
  appointments,
});
