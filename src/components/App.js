import React from 'react';
import { connect } from 'react-redux';

/* --------------- COMPONENT --------------- */

const App = props => {
  console.log(props);
  return (
    <p>Hello React!</p>
  );
};

/* --------------- CONTAINER --------------- */

const mapStateToProps = state => ({
  todos: state.get('todos')
});

export default connect(mapStateToProps)(App);
