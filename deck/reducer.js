import merge from 'lodash/merge';
import uuid from 'uuid/v4';

/*
 * Action creators
 */
const ADD = 'deck/ADD';
const ADD_CARD = 'deck/ADD_CARD';

export function addDeck(deck) {
  deck.id = uuid();
  deck.cards = [];

  return { type: ADD, deck };
}

export function addCardToDeck(deckId, card) {
  return { type: ADD_CARD, deckId, card };
}

/*
 * Selectors
 */

export function getMostRecentDeck(state) {
  return state.deck.byId[state.deck.mostRecent];
}

export function getDeck(state, deckId) {
  return state.deck.byId[deckId];
}

export function getDecks(state) {
  return Object.values(state.deck.byId);
}


/*
 * Reducer
 */
const INITIAL_STATE = {
  byId: {
    1: {
      id: 1,
      title: 'Ruby Questions',
      cards: [{ question: 'Ruby is a strongly typed language?', answer: 'No!' }]
    },
    2: {
      id: 2,
      title: 'JavaScript Questions',
      cards: [{ question: 'Inside which HTML element do we put the JavaScript?', answer: '<script>' },
        { question: 'How do you round the number 7.25, to the nearest integer?', answer: 'Math.round(7.25)' }]
    }
  },
  mostRecent: 1
};


export default function reducer(state = INITIAL_STATE, action = {}) {
  let deck;

  switch (action.type) {
    case ADD:
      deck = { [action.deck.id]: action.deck };
      return merge({}, state, { byId: deck, mostRecent: action.deck.id });
    case ADD_CARD:
      deck = state.byId[action.deckId];
      deck = Object.assign({}, deck);
      deck.cards.push(action.card);
      deck = { [deck.id]: deck };
      return merge({}, state, { byId: deck, mostRecent: deck.id });
    default: return state;
  }
}
