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

export const setChosenBook = (book) => ({
  type: actions.CHOSEN_BOOK,
  payload: {
    book: book
  }
});

export const setAuthorisation = (isAuthorised) => ({
  type: actions.IS_AUTHORISED,
  payload: {
    isAuthorised: isAuthorised
  }
});

export const setRecomendedBooks = (recomendations) => ({
  type: actions.RECOMENDATIONS,
  payload: {
    recomendations: recomendations
  }
});
