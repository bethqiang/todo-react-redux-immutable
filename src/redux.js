import { List, Map } from 'immutable';

const initialState = Map({
  todos: List.of(
    Map({ id: 1, text: 'React', status: 'active', editing: false }),
    Map({ id: 2, text: 'Redux', status: 'active', editing: false }),
    Map({ id: 3, text: 'Immutable', status: 'completed', editing: false })
  )
});

export default function reducer(state = initialState, action) {
  return state;
}
