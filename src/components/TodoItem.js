import React from 'react';

const TodoItem = props => {
  return (
    <li className="todo">
      <div className="view">
        <input type="checkbox"
          className="toggle" />
        <label htmlFor="todo">
          {props.text}
        </label>
        <button className="destroy"></button>
      </div>
    </li>
  );
};

export default TodoItem;
