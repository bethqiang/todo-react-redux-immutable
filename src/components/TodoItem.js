import React from 'react';

export default class TodoItem extends React.Component {
  render() {
    return (
      <li className={`todo ${this.props.status === 'completed' ? 'completed' : null} ${this.props.editing ? 'editing' : null}`}>
        <div className="view">
          <input type="checkbox"
            className="toggle"
            defaultChecked={this.props.status === 'completed'}
            onClick={() => this.props.toggleStatus(this.props.id)} />
          <label htmlFor="todo">
            {this.props.text}
          </label>
          <button
            className="destroy"
            onClick={() => this.props.deleteItem(this.props.id)}>
          </button>
        </div>
      </li>
    );
  }
}
