import { combineReducers } from 'redux';

import { default as deckReducer } from '../deck/reducer'

const reducer = combineReducers({
  deck: deckReducer
});

export default reducer;