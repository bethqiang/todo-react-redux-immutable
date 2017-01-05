import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { TodoList } from '../../src/components/TodoList';
import { expect } from 'chai';
import { List, Map } from 'immutable';

const { renderIntoDocument, scryRenderedDOMComponentsWithTag } = TestUtils;

describe('TodoList', () => {

  const todos = List.of(
    Map({ id: 1, text: 'React', status: 'active' }),
    Map({ id: 2, text: 'Redux', status: 'active' }),
    Map({ id: 3, text: 'Immutable', status: 'completed' })
  );

  it('renders a list of all items when the filter is set to all', () => {
    const filter = 'all';
    const component = renderIntoDocument(
      <TodoList todos={todos} filter={filter} />
    );
    const items = scryRenderedDOMComponentsWithTag(component, 'li');

    expect(items.length).to.equal(3);
    expect(items[0].textContent).to.contain('React');
    expect(items[1].textContent).to.contain('Redux');
    expect(items[2].textContent).to.contain('Immutable');
  });

  it('renders a list of active items when the filter is set to active', () => {
    const filter = 'active';
    const component = renderIntoDocument(
      <TodoList todos={todos} filter={filter} />
    );
    const items = scryRenderedDOMComponentsWithTag(component, 'li');

    expect(items.length).to.equal(2);
    expect(items[0].textContent).to.contain('React');
    expect(items[1].textContent).to.contain('Redux');
  });

  it('renders a list of completed items when the filter is set to completed', () => {
    const filter = 'completed';
    const component = renderIntoDocument(
      <TodoList todos={todos} filter={filter} />
    );
    const items = scryRenderedDOMComponentsWithTag(component, 'li');

    expect(items.length).to.equal(1);
    expect(items[0].textContent).to.contain('Immutable');
  });
});
