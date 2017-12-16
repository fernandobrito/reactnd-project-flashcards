import { combineReducers } from 'redux';

import deckReducer from '../deck/reducer';

const reducer = combineReducers({
  deck: deckReducer
});

export default reducer;
