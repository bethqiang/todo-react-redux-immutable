import React from 'react';
import { connect } from 'react-redux';

import TodoList from './TodoList';

/* --------------- COMPONENT --------------- */

const App = props => {
  return (
    <div>
      <section className="todoapp">
        {/* input box to add todos here */}
        <h1>todos</h1>
        <TodoList todos={props.todos} />
      </section>
    </div>
  );
};

/* --------------- CONTAINER --------------- */

const mapStateToProps = state => ({
  todos: state.get('todos')
});

export default connect(mapStateToProps)(App);
