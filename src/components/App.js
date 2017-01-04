import React from 'react';

import TodoListContainer from './TodoList';
import TodoFilter from './TodoFilter';

const App = () => {
  return (
    <div>
      <section className="todoapp">
        {/* input box to add todos here */}
        <h1>todos</h1>
        <TodoListContainer />
        <TodoFilter />
      </section>
    </div>
  );
};

export default App;
