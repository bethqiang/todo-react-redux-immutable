import React from 'react';
import { connect } from 'react-redux';

import TodoItem from './TodoItem';

import { toggleStatus, deleteItem } from '../redux';

/* --------------- COMPONENT --------------- */

export class TodoList extends React.Component {
  filterItems() {
    if (this.props.todos) {
      return this.props.todos.filter(item => (
        this.props.filter === 'all' || item.get('status') === this.props.filter
      ));
    } else {
      return [];
    }
  }
  render() {
    return (
      <section className="main">
        <ul className="todo-list">
          {this.filterItems().map(item => (
            <TodoItem key={item.get('text')}
              id={item.get('id')}
              text={item.get('text')}
              status={item.get('status')}
              editing={item.get('editing')}
              toggleStatus={this.props.toggleStatus}
              deleteItem={this.props.deleteItem} />
          ))}
        </ul>
      </section>
    );
  }
}

/* --------------- CONTAINER --------------- */

const mapStateToProps = state => ({
  todos: state.get('todos'),
  filter: state.get('filter')
});

// Once I figure out how to test mapStateToProps and/or this wrapper container, I'd like mapStateToProps to be--

// filteredTodos: state.get('todos')
//   .filter(item => (
//     state.get('filter') === 'all' || item.get('status') === state.get('filter')
//   ))

// and then TodoList could be transformed into a component that just gets the filtered todos, instead of also doing the logic to filter

const mapDispatchToProps = dispatch => ({
  toggleStatus(itemId) {
    dispatch(toggleStatus(itemId));
  },
  deleteItem(itemId) {
    dispatch(deleteItem(itemId));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
