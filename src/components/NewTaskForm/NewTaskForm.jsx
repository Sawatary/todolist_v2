import React from 'react';

class NewTaskForm extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '',
    };
  }
  handleInputChange = (event) => {
    this.setState({ value: event.target.value });
  };
  render() {
    const { onTaskAdd } = this.props;
    const handleSubmit = (event) => {
      event.preventDefault();
      if (this.state.value.trim()) {
        onTaskAdd(this.state.value);
        this.setState({ value: '' });
      }
    };
    return (
      <form onSubmit={handleSubmit} className="header">
        <h1>Todos</h1>
        <label>
          <input
            className="new-todo"
            placeholder="What needs to be done?"
            onChange={this.handleInputChange}
            value={this.state.value}
          />
        </label>
      </form>
    );
  }
}

export default NewTaskForm;
