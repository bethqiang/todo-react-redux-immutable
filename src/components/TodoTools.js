import React from 'react';
import { connect } from 'react-redux';

import { setFilter } from '../redux';

/* --------------- COMPONENT --------------- */

export class TodoTools extends React.Component {
  render() {
    return (
      <footer className="footer">
        <span className="todo-count"><strong>0</strong> item left</span>
        <ul className="filters">
          <li>
            <a href="#"
              onClick={() => this.props.setFilter('all')}
              className={this.props.filter === 'all' ? 'selected' : null}>
                All
            </a>
          </li>
          <li>
            <a href="#"
              onClick={() => this.props.setFilter('active')}
              className={this.props.filter === 'active' ? 'selected' : null}>
                Active
            </a>
          </li>
          <li>
            <a href="#"
              onClick={() => this.props.setFilter('completed')}
              className={this.props.filter === 'completed' ? 'selected' : null}>
                Completed
            </a>
          </li>
        </ul>
        <button className="clear-completed">
          Clear completed
        </button>
      </footer>
    );
  }
}

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
)(TodoTools);
