import { createStore } from 'redux';
import reducer from './reducer';
import * as actions from './actionTypes';

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.dispatch({
  type: actions.INPUT_VALUE,
  payload: { inputValue: 'react' }
});

store.dispatch({
  type: actions.SELECT_VALUE,
  payload: { selectValue: 'all' }
});

store.dispatch({
  type: actions.FETCHING_BOOKS,
  payload: { books: [] }
});

store.dispatch({
  type: actions.CHOSEN_BOOK,
  payload: { book: [] }
});

store.dispatch({
  type: actions.IS_AUTHORISED,
  payload: { isAuthorised: false }
});

store.dispatch({
  type: actions.RECOMENDATIONS,
  payload: { recomandations: [] }
});

export default store;
