import React from 'react';

export default class Task extends React.Component {
  constructor() {
    super();
    this.state = {
      done: false,
    };
  }
  handleFinish = () => this.setState(({ done }) => ({ done: !done }));
  render() {
    const { title, onDelete } = this.props;
    const { done } = this.state;
    return (
      <ul>
        <li className={done ? 'completed' : ''}>
          <div className="view">
            <input className="toggle" type="checkbox" onClick={this.handleFinish} />
            <label>
              <span className="description">{title}</span>
              <span className="created">created 5 minutes ago</span>
            </label>
            <button className="icon icon-edit"></button>
            <button className="icon icon-destroy" onClick={onDelete}></button>
          </div>
        </li>
      </ul>
    );
  }
}
