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

/* --------------- ACTION CREATORS --------------- */

export const setFilter = filter => ({ type: SET_FILTER, filter });

/* --------------- REDUCER --------------- */

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_FILTER:
      return state.set('filter', action.filter);

    default:
      return state;
  }
}

/* --------------- DISPATCHERS --------------- */


