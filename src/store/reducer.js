import * as actions from './actionTypes';

export default function reducer(state = [], action) {
  switch (action.type) {
    case actions.INPUT_VALUE:
      return { ...state, inputValue: action.payload.inputValue };

    case actions.SELECT_VALUE:
      return { ...state, selectValue: action.payload.selectValue };

    case actions.FETCHING_BOOKS:
      return { ...state, books: action.payload.books };

    default:
      return state;
  }
}
