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
        <label>
          <input
            className="new-todo"
            placeholder={placeholder}
            onChange={this.handleInputChange}
            value={this.state.value}
          />
        </label>
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
