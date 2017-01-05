import React from 'react';

import TodoHeader from './TodoHeader';
import TodoListContainer from './TodoList';
import TodoFilter from './TodoFilter';

const App = () => {
  return (
    <div>
      <section className="todoapp">
        <TodoHeader />
        <section className="main">
          <TodoListContainer />
        </section>
        <TodoFilter />
      </section>
    </div>
  );
};

export default App;
