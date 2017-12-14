// Actions
const CREATE = 'deck/CREATE';

// Initial state
const initialState = {
  list: [{ id: 1, title: 'Flash cards', cards: [1, 2] }, { id: 2, title: 'Other stuff', cards: [1, 2, 3] }],
  selected: 1
}

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    default: return state;
  }
}

// Action Creators
export function createDeck(deck) {
  return { type: CREATE, deck };
}

// Selectors
export function getDeckById(state, id) {
  return state.deck.list.filter((deck) => {
    return item.id === id;
  });
}

export function getDecks(state) {
  return state.deck.list;
}