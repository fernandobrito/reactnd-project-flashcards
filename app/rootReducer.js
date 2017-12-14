import { combineReducers } from 'redux';

import { default as deckReducer } from '../deck'

const reducer = combineReducers({
  deck: deckReducer
});

export default reducer;