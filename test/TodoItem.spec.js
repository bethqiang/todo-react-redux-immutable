import React from 'react';
import TestUtils from 'react-addons-test-utils';
import TodoItem from '../src/components/TodoItem';
import { expect } from 'chai';

const { renderIntoDocument, scryRenderedDOMComponentsWithTag, Simulate } = TestUtils;

describe('TodoItem', () => {

  const text = 'React';
  const component = renderIntoDocument(
    <TodoItem text={text} status={'completed'} editing={true} />
  );
  const item = scryRenderedDOMComponentsWithTag(component, 'li');

  it('renders an item', () => {
    expect(item.length).to.equal(1);
    expect(item[0].textContent).to.contain('React');
  });

  it('strikes through if completed', () => {
    expect(item[0].classList.contains('completed')).to.equal(true);
  });

  it('should be checked if completed', () => {
    const input = scryRenderedDOMComponentsWithTag(component, 'input');
    expect(input[0].checked).to.equal(true);
  });

  it('should be unchecked if active', () => {
    const textActive = 'React';
    const componentActive = renderIntoDocument(
      <TodoItem text={textActive} status={'active'} />
    );
    const itemActive = scryRenderedDOMComponentsWithTag(componentActive, 'input');
    expect(itemActive[0].checked).to.equal(false);
  });

  it('should look different when editing', () => {
    expect(item[0].classList.contains('editing')).to.equal(true);
  });

  it('invokes a callback when the delete button is clicked', () => {
    let deleted = false;

    // mock deleteItem function
    const deleteItem = () => {
      deleted = true;
      return deleted;
    };

    const componentDelete = renderIntoDocument(
      <TodoItem text={text} deleteItem={deleteItem} />
    );
    const buttons = scryRenderedDOMComponentsWithTag(componentDelete, 'button');
    Simulate.click(buttons[0]);

    expect(deleted).to.equal(true);
  });
});
