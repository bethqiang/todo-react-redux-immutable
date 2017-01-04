import React from 'react';
import { connect } from 'react-redux';

import { setFilter } from '../redux';

/* --------------- COMPONENT --------------- */

const TodoFilter = props => {
  return (
    <footer className="footer">
      <span className="todo-count"><strong>0</strong> item left</span>
      <ul className="filters">
        <li>
          <a href="#"
            onClick={() => props.setFilter('all')}
            className={props.filter === 'all' ? 'selected' : null}>
              All
          </a>
        </li>
        <li>
          <a href="#"
            onClick={() => props.setFilter('active')}
            className={props.filter === 'active' ? 'selected' : null}>
              Active
          </a>
        </li>
        <li>
          <a href="#"
            onClick={() => props.setFilter('completed')}
            className={props.filter === 'completed' ? 'selected' : null}>
              Completed
          </a>
        </li>
      </ul>
      <button className="clear-completed">
        Clear completed
      </button>
    </footer>
  );
};

/* --------------- CONTAINER --------------- */

const mapStateToProps = state => ({
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
)(TodoFilter);