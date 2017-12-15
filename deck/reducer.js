import merge from 'lodash/merge';
import uuid from 'uuid/v4';

/*
 * Action creators
 */
const ADD = 'deck/ADD';

export function addDeck(deck) {
  deck.id = uuid();
  deck.cards = [];

  return { type: ADD, deck };
}


/*
 * Selectors
 */

export function getMostRecentDeck(state) {
  return state.deck.byId[state.deck.mostRecent];
}

export function getDecks(state) {
  return Object.values(state.deck.byId);
}


/*
 * Reducer
 */
const INITIAL_STATE = {
  byId: { 1: { id: 1, title: 'Flash cards', cards: [1, 2] },
          2: { id: 2, title: 'Other stuff', cards: [1, 2, 3] } },
  mostRecent: 1
};

export default function reducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case ADD:
      let deck = { [action.deck.id]: action.deck };
      return merge({}, state, { byId: deck, mostRecent: deck.id });
    default: return state;
  }
}