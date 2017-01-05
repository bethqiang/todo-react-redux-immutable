import React from 'react';
import TestUtils from 'react-addons-test-utils';
import TodoHeader from '../../src/components/TodoHeader';
import { expect } from 'chai';

const { renderIntoDocument, Simulate } = TestUtils;

xdescribe('TodoHeader', () => {
  it('calls a callback when pressing enter', () => {
    const text = 'React';
    let hasDoneEditing = false;
    const doneEditing = () => hasDoneEditing = true;

    const component = renderIntoDocument(
      <TodoHeader text={text} doneEditing={doneEditing} />
    );

    const input = component.refs.itemInput;
    Simulate.keyDown(input, { key: 'Enter', keyCode: 13, which: 13 });

    expect(hasDoneEditing).to.equal(true);
  });

  it('calls a callback when pressing escape or losing focus', () => {
    const text = 'React';
    let hasCanceledEditing = false;
    const cancelEditing = () => hasCanceledEditing = true;

    const component = renderIntoDocument(
      <TodoHeader text={text} cancelEditing={cancelEditing} />
    );

    const input = component.refs.itemInput;
    Simulate.keyDown(input, { key: 'Escape', keyCode: 27, which: 27 });

    expect(hasCanceledEditing).to.equal(true);
  });
});
