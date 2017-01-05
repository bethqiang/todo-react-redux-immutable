import { List, Map } from 'immutable';
import { expect } from 'chai';

import reducer, {
  SET_FILTER,
  TOGGLE_STATUS,
  ADD_ITEM,
  DELETE_ITEM,
  CLEAR_COMPLETED,
  EDIT_ITEM,
  CANCEL_EDITING,
  DONE_EDITING
} from '../src/redux';

describe('reducer', () => {

  it('changes the filter', () => {
    const initialFilterState = Map({
      todos: List.of(
        Map({ id: 1, text: 'React', status: 'active', editing: false })
      ),
      filter: 'all'
    });

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

  // This initial state is used for toggling, adding, and deleting
  const initialState = Map({
    todos: List.of(
      Map({ id: 1, text: 'React', status: 'active', editing: false }),
      Map({ id: 2, text: 'Redux', status: 'active', editing: false }),
      Map({ id: 3, text: 'Immutable', status: 'completed', editing: false })
    )
  });

  describe('toggling functionality', () => {

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

  xit('handles adding an item', () => {
    const action = {
      type: ADD_ITEM,
      text: 'Testing'
    };

    const nextState = reducer(initialState, action);

    expect(nextState).to.equal(Map({
      todos: List.of(
        Map({ id: 1, text: 'React', status: 'active', editing: false }),
        Map({ id: 2, text: 'Redux', status: 'active', editing: false }),
        Map({ id: 3, text: 'Immutable', status: 'completed', editing: false }),
        Map({ id: 4, text: 'Testing', status: 'active', editing: false })
      )
    }));
  });

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

  xit('handles clearing all completed items', () => {
    const initialClearingState = Map({
      todos: List.of(
        Map({ id: 1, text: 'React', status: 'completed', editing: false }),
        Map({ id: 2, text: 'Redux', status: 'active', editing: false }),
        Map({ id: 3, text: 'Immutable', status: 'completed', editing: false })
      )
    });

    const action = {
      type: CLEAR_COMPLETED
    };

    const nextState = reducer(initialClearingState, action);

    expect(nextState).to.equal(Map({
      todos: List.of(
        Map({ id: 2, text: 'Redux', status: 'active', editing: false })
      )
    }));
  });

  xdescribe('editing functionality', () => {

    it('sets editing to true when item is being edited', () => {
      const initialEditingState = Map({
        todos: List.of(
          Map({ id: 1, text: 'React', status: 'active', editing: false })
        )
      });

      const action = {
        type: EDIT_ITEM,
        itemId: 1
      };

      const nextState = reducer(initialEditingState, action);

      expect(nextState).to.equal(Map({
        todos: List.of(
          Map({ id: 1, text: 'React', status: 'active', editing: true })
        )
      }));
    });

    it('sets editing to false when item is no longer being edited', () => {
      const initialEditingState = Map({
        todos: List.of(
          Map({ id: 1, text: 'React', status: 'active', editing: true })
        )
      });

      const action = {
        type: CANCEL_EDITING,
        itemId: 1
      };

      const nextState = reducer(initialEditingState, action);

      expect(nextState).to.equal(Map({
        todos: List.of(
          Map({ id: 1, text: 'React', status: 'active', editing: false })
        )
      }));
    });

    it('updates the text when the item is done being edited', () => {
      const initialEditingState = Map({
        todos: List.of(
          Map({ id: 1, text: 'React', status: 'active', editing: true })
        )
      });

      const action = {
        type: DONE_EDITING,
        itemId: 1,
        newText: 'Angular'
      };

      const nextState = reducer(initialEditingState, action);

      expect(nextState).to.equal(Map({
        todos: List.of(
          Map({ id: 1, text: 'Angular', status: 'active', editing: false })
        )
      }));
    });
  });
});
