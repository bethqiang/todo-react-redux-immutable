import { List, Map } from 'immutable';
import { expect } from 'chai';

import reducer, { TOGGLE_STATUS } from '../src/redux';

describe('reducer', () => {

  const initialState = Map({
    todos: List.of(
      Map({ id: 1, text: 'React', status: 'active', editing: false }),
      Map({ id: 2, text: 'Redux', status: 'active', editing: false }),
      Map({ id: 3, text: 'Immutable', status: 'completed', editing: false })
    )
  });

  it('handles toggling status by changing the status from active to complete', () => {
    const action = {
      type: TOGGLE_STATUS,
      itemId: 1
    };

    const nextState = reducer(initialState, action);

    expect(nextState).to.equal(Map({
      todos: List.of(
        Map({ id: 1, text: 'React', status: 'completed', editing: false }),
        Map({ id: 2, text: 'Redux', status: 'active', editing: false }),
        Map({ id: 3, text: 'Immutable', status: 'completed', editing: false })
      )
    }));
  });

  it('handles toggling status by changing the status from complete to active', () => {
    const action = {
      type: TOGGLE_STATUS,
      itemId: 3
    };

    const nextState = reducer(initialState, action);

    expect(nextState).to.equal(Map({
      todos: List.of(
        Map({ id: 1, text: 'React', status: 'active', editing: false }),
        Map({ id: 2, text: 'Redux', status: 'active', editing: false }),
        Map({ id: 3, text: 'Immutable', status: 'active', editing: false })
      )
    }));
  });
});
