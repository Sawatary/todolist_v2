import React from 'react';

export default class Task extends React.Component {
  constructor() {
    super();
    this.state = {
      editing: false,
      editText: '',
    };
  }
  handleFinish = () => this.props.onToggle();

  render() {
    const { title, onDelete, checked } = this.props;
    return (
      <li className={checked ? 'completed' : ''}>
        <div className="view">
          <input className="toggle" type="checkbox" checked={checked} onChange={this.handleFinish} />
          <label>
            <span className="description">{title}</span>
            <span className="created">created 5 minutes ago</span>
          </label>
          <button type="button" className="icon icon-edit"></button>
          <button type="button" className="icon icon-destroy" onClick={onDelete}></button>
        </div>
      </li>
    );
  }
}
