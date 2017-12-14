// Actions
const CREATE = 'deck/CREATE';

// Reducer
export default function reducer(state = {}, action = {}) {
  switch (action.type) {
    default: return state;
  }
}

// Action Creators
export function createDeck(deck) {
  return { type: CREATE, deck };
}
