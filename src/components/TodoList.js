import React from 'react';

import TodoItem from './TodoItem';

class TodoList extends React.Component {
  filterItems() {
    if (this.props.todos) {
      return this.props.todos.filter(item => (
        item.get('status') === this.props.filter
      ));
    }
  }
  render() {
    return (
      <section className="main">
        <ul className="todo-list">
          {this.filterItems().map(item => (
            <TodoItem key={item.get('text')}
              text={item.get('text')} />
          ))}
        </ul>
      </section>
    );
  }
}

export default TodoList;
