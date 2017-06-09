import * as c from './constants';

export function addPhoto(book, photo) {
  return {
    type: c.ADD_PHOTO,
    book,
    photo,
  };
}

export function addBook(book) {
  return {
    type: c.ADD_BOOK,
    book,
  };
}

export function selectBook(book) {
  return {
    type: c.SELECT_BOOK,
    book,
  };
}

export function timeUser(photo, startTime) {
  return {
    type: c.TIME_USER,
    photo,
    startTime,
  };
}

export function addAppointment(appointment) {
  return {
    type: c.ADD_APPOINTMENT,
    appointment,
  };
}

export function editAppointment(text, key, id) {
  return {
    type: c.EDIT_APPOINTMENT,
    text,
    key,
    id,
  };
}

export function toggleEdit(id) {
  return {
    type: c.TOGGLE_EDIT,
    id,
  };
}

export function editMode(id) {
  return {
    type: c.EDIT_MODE,
    id,
  };
}

export function saveAppointment(id) {
  return {
    type: c.SAVE_APPOINTMENT,
    id,
  };
}

export function changeBook(portfolio, id) {
  return {
    type: c.CHANGE_BOOK,
    portfolio,
    id,
  };
}

export function saveTime(time, photo) {
  return {
    type: c.START_TIMER,
    photo,
    time,
  };
}
