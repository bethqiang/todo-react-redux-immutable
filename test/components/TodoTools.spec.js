import React from 'react';
import TestUtils from 'react-addons-test-utils';
import TodoTools from '../../src/components/TodoTools';
import { expect } from 'chai';

const { renderIntoDocument, scryRenderedDOMComponentsWithTag, Simulate } = TestUtils;

xdescribe('TodoTools', () => {
  it('displays the number of items left', () => {
    const activeItems = 3;
    const component = renderIntoDocument(
      <TodoTools activeItems={activeItems} />
    );
    const tools = scryRenderedDOMComponentsWithTag(component, 'footer');

    expect(tools[0].textContent).to.contain('3');
  });

  it('highlights the active filter', () => {
    const filter = 'active';
    const component = renderIntoDocument(
      <TodoTools filter={filter} />
    );
    const filters = scryRenderedDOMComponentsWithTag(component, 'a');

    expect(filters[0].classList.contains('selected')).to.equal(false);
    expect(filters[1].classList.contains('selected')).to.equal(true);
    expect(filters[2].classList.contains('selected')).to.equal(false);
  });

  it('calls a callback when the user clicks on the Clear completed button', () => {
    let cleared = false;
    const clearCompleted = () => cleared = true;
    const component = renderIntoDocument(
      <TodoTools clearCompleted={clearCompleted} />
    );
    const buttons = scryRenderedDOMComponentsWithTag(component, 'button');
    Simulate.click(buttons[0]);

    expect(cleared).to.equal(true);
  });
});
