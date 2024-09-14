import React from 'react';
import { formatDistanceToNow } from 'date-fns';
import KG from 'date-fns/locale/en-AU';
export default class Task extends React.Component {
  constructor() {
    super();
    this.state = {
      editing: false,
      editText: '',
    };
  }

  handleFinish = () => this.props.onToggle();
  handleSubmit = (event) => {
    event.preventDefault();
    const {
      editItem,
      todo: { id },
    } = this.props;
    editItem(id, this.state.editText);
    this.setState({ editText: '', editing: false });
  };

  render() {
    const { title, onDelete, todo } = this.props;
    const { checked, date } = todo;
    return (
      <li className={checked ? 'completed' : this.state.editing ? 'editing' : ''}>
        <div className="view">
          <input className="toggle" type="checkbox" checked={checked} onChange={this.handleFinish} />
          <label>
            <span className="description">{title}</span>
            <span className="created">{`created ${formatDistanceToNow(date, {
              includeSeconds: true,
              locale: KG,
              addSuffix: true,
            })}`}</span>
          </label>
          <button
            type="button"
            className="icon icon-edit"
            onClick={() => this.setState({ editing: !this.state.editing, editText: this.props.todo.body })}
          ></button>
          <button type="button" className="icon icon-destroy" onClick={onDelete}></button>
        </div>
        {this.state.editing && (
          <form onSubmit={this.handleSubmit}>
            <input
              onChange={(event) => this.setState({ editText: event.target.value })}
              type="text"
              className="edit"
              value={this.state.editText}
            />
          </form>
        )}
      </li>
    );
  }
}
