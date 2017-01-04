import React from 'react';
import TestUtils from 'react-addons-test-utils';
import TodoItem from '../src/components/TodoItem';
import { expect } from 'chai';

const { renderIntoDocument, scryRenderedDOMComponentsWithTag } = TestUtils;

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

  it('strikes through an item if it is completed', () => {
    expect(item[0].classList.contains('completed')).to.equal(true);
  });

  it('should look different when editing', () => {
    expect(item[0].classList.contains('editing')).to.equal(true);
  });
});
