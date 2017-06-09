import { combineReducers } from 'redux';
import * as c from './constants';

const addPhotoToBook = (state, action) =>
  state.books.map(book => {
    if (book.title === action.book) {
      const photo = {
        dwellTimes: [],
        uri: action.photo,
      };
      book.photos = [...book.photos, photo];
      return book;
    }
    return book;
  });

function bookData(
  state = {
    books: [
      { title: 'Editorial', id: 13544, photos: [] },
      { title: 'Commercial', id: 67368, photos: [] },
    ],
    analytics: {
      prevPhoto: {
        uri: '',
        startTime: '',
      },
      currentPhoto: {
        uri: '',
        startTime: '',
      },
    },
  },
  action
) {
  switch (action.type) {
    case c.ADD_BOOK:
      return {
        ...state,
        books: [...state.books, action.book],
      };
    case c.ADD_PHOTO:
      const books = addPhotoToBook(state, action);
      return {
        ...state,
        books,
      };
    case c.SAVE_TIME:
      const { uri, currentTime, title } = action;
      // console.log('SAVE TIME in case', uri, currentTime, title);
      const { prevPhoto } = state.analytics;

      // if prevPhoto has start time then calculate dwell time
      if (typeof prevPhoto.startTime === 'number') {
        const dwellTime = currentTime - prevPhoto.startTime;

        const indexOfBookToUpdate = state.books.findIndex(
          book => book.title === title
        );
        const updatedPhotos = state.books[
          indexOfBookToUpdate
        ].photos.map(photo => {
          if (photo.uri === uri) {
            return {
              ...photo,
              dwellTimes: [...photo.dwellTimes, dwellTime],
            };
          }
          return photo;
        });

        // console.log('===== dwellTime', dwellTime);
        // console.log('===== updatedPhotos', updatedPhotos);
        const newState = {
          ...state,
          analytics: {
            ...state.analytics,
            prevPhoto: {
              uri: uri,
              startTime: currentTime,
            },
          },
          books: [
            ...state.books.slice(0, indexOfBookToUpdate),
            { ...state.books[indexOfBookToUpdate], photos: updatedPhotos },
            ...state.books.slice(indexOfBookToUpdate + 1),
          ],
        };

        // console.log('===== newState', newState);
        return newState;
      }

      return {
        ...state,
        analytics: {
          ...state.analytics,
          prevPhoto: {
            uri: uri,
            startTime: currentTime,
          },
        },
      };

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
  bookData,
  selectedBook,
  appointments,
});
