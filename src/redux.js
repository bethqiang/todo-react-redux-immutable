import { List, Map } from 'immutable';

/* --------------- INITIAL STATE --------------- */

const initialState = Map({
  todos: List.of(
    Map({ id: 1, text: 'React', status: 'active', editing: false }),
    Map({ id: 2, text: 'Redux', status: 'active', editing: false }),
    Map({ id: 3, text: 'Immutable', status: 'completed', editing: false })
  ),
  filter: 'all'
});

/* --------------- ACTIONS --------------- */

const SET_FILTER = 'SET_FILTER';
export const TOGGLE_STATUS = 'TOGGLE_STATUS';

/* --------------- ACTION CREATORS --------------- */

export const setFilter = filter => ({ type: SET_FILTER, filter });
export const toggleStatus = itemId => ({ type: TOGGLE_STATUS, itemId });

/* --------------- REDUCER --------------- */

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_FILTER:
      return state.set('filter', action.filter);

    case TOGGLE_STATUS:
      const itemIndex = state.get('todos').findIndex(item => (
        item.get('id') === action.itemId
      ));
      return state.updateIn(
        ['todos', itemIndex, 'status'], status => (
          status === 'active' ? 'completed' : 'active'
      ));

    default:
      return state;
  }
}

/* --------------- DISPATCHERS --------------- */


