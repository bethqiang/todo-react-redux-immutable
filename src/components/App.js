import React from 'react';
import { connect } from 'react-redux';

import TodoList from './TodoList';
import TodoFilter from './TodoFilter';

import { setFilter } from '../redux';

/* --------------- COMPONENT --------------- */

const App = props => {
  return (
    <div>
      <section className="todoapp">
        {/* input box to add todos here */}
        <h1>todos</h1>
        <TodoList todos={props.todos} filter={props.filter} />
        <TodoFilter filter={props.filter} setFilter={props.setFilter} />
      </section>
    </div>
  );
};

/* --------------- CONTAINER --------------- */

const mapStateToProps = state => ({
  todos: state.get('todos'),
  filter: state.get('filter')
});

const mapDispatchToProps = dispatch => ({
  setFilter(filter) {
    dispatch(setFilter(filter));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
