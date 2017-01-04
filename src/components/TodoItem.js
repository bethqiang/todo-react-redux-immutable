import React from 'react';

export default class TodoItem extends React.Component {
  render() {
    return (
      <li className={`todo ${this.props.status === 'completed' ? 'completed' : null} ${this.props.editing ? 'editing' : null}`}>
        <div className="view">
          <input type="checkbox"
            className="toggle"
            defaultChecked={this.props.status === 'completed'} />
          <label htmlFor="todo">
            {this.props.text}
          </label>
          <button className="destroy"></button>
        </div>
      </li>
    );
  }
}
