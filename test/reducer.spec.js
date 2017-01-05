import { List, Map } from 'immutable';
import { expect } from 'chai';

import reducer, { SET_FILTER, TOGGLE_STATUS, DELETE_ITEM } from '../src/redux';

describe('reducer', () => {

   // change filter

  const initialFilterState = Map({
    todos: List.of(
      Map({ id: 1, text: 'React', status: 'active', editing: false })
    ),
    filter: 'all'
  });

  it('changes the filter', () => {
    const action = {
      type: SET_FILTER,
      filter: 'active'
    };

    const nextState = reducer(initialFilterState, action);

    expect(nextState).to.equal(Map({
      todos: List.of(
        Map({ id: 1, text: 'React', status: 'active', editing: false })
      ),
      filter: 'active'
    }));
  });

  // toggle status of item

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

  // delete item

  it('handles deleting an item', () => {
    const action = {
      type: DELETE_ITEM,
      itemId: 1
    };

    const nextState = reducer(initialState, action);

    expect(nextState).to.equal(Map({
      todos: List.of(
        Map({ id: 2, text: 'Redux', status: 'active', editing: false }),
        Map({ id: 3, text: 'Immutable', status: 'completed', editing: false })
      )
    }));
  });
});
