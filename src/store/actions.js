import * as actions from './actionTypes';

export const changeInputValue = (inputValue) => ({
  type: actions.INPUT_VALUE,
  payload: {
    inputValue: inputValue
  }
});

export const setFetchingBooks = (books) => ({
  type: actions.FETCHING_BOOKS,
  payload: {
    books: books
  }
});
