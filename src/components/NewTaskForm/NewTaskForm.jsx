import React from 'react';
import PropTypes from 'prop-types';
export default class NewTaskForm extends React.Component {
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
    const { placeholder, title, onTaskAdd } = this.props;
    const handleSubmit = (event) => {
      event.preventDefault();
      if (this.state.value.trim()) {
        onTaskAdd(this.state.value);
        this.setState({ value: '' });
      }
    };
    return (
      <form onSubmit={handleSubmit} className="header">
        <h1>{title}</h1>
        <form className="new-todo-form">
          <input
            className="new-todo"
            placeholder={placeholder}
            onChange={this.handleInputChange}
            value={this.state.value}
          />
          <input className="new-todo-form__timer" placeholder="Min" type="text" maxLength="2" />
          <input className="new-todo-form__timer" placeholder="Sec" type="text" maxLength="2" />
        </form>
        <input
          className="new-todo"
          placeholder={placeholder}
          onChange={this.handleInputChange}
          value={this.state.value}
        />
      </form>
    );
  }
}

NewTaskForm.propTypes = {
  placeholder: PropTypes.string,
  title: PropTypes.string,
  onTaskAdd: PropTypes.func.isRequired,
};

NewTaskForm.defaultProps = {
  placeholder: 'What needs to be done?',
  title: 'Todos',
};
