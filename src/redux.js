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

export const SET_FILTER = 'SET_FILTER';
export const TOGGLE_STATUS = 'TOGGLE_STATUS';
export const DELETE_ITEM = 'DELETE_ITEM';

/* --------------- ACTION CREATORS --------------- */

export const setFilter = filter => ({ type: SET_FILTER, filter });
export const toggleStatus = itemId => ({ type: TOGGLE_STATUS, itemId });
export const deleteItem = itemId => ({ type: DELETE_ITEM, itemId });

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

    case DELETE_ITEM:
      return state.update('todos', todos => (
        todos.filterNot(item => (
          item.get('id') === action.itemId
        ))
      ));
      // instead of: return state.deleteIn(['todos', itemIndex]);
      // if you delete @ index 0, deleteIn will set index 0 to undefined
      // filterNot does not - it's a little cleaner in that respect

    default:
      return state;
  }
}

/* --------------- DISPATCHERS --------------- */


