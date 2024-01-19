import * as actions from './actionTypes';

export default function reducer(state = [], action) {
  switch (action.type) {
    case actions.INPUT_VALUE:
      return { ...state, inputValue: action.payload.inputValue };

    case actions.SELECT_VALUE:
      return { ...state, selectValue: action.payload.selectValue };

    case actions.FETCHING_BOOKS:
      return { ...state, books: action.payload.books };

    case actions.CHOSEN_BOOK:
      return { ...state, book: action.payload.book };

    case actions.IS_AUTHORISED:
      return { ...state, isAuthorised: action.payload.isAuthorised };

    case actions.RECOMENDATIONS:
      return { ...state, recomendations: action.payload.recomendations };

    default:
      return state;
  }
}
