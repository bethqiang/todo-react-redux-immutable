import React from 'react';

import TodoHeader from './TodoHeader';
import TodoListContainer from './TodoList';
import TodoTools from './TodoTools';

const App = () => {
  return (
    <div>
      <section className="todoapp">
        <TodoHeader />
        <section className="main">
          <TodoListContainer />
        </section>
        <TodoTools />
      </section>
    </div>
  );
};

export default App;
