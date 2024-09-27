import React, { useState } from 'react';
import PropTypes from 'prop-types';

const NewTaskForm = ({ placeholder, title, onTaskAdd }) => {
  const [value, setValue] = useState('');

  const handleInputChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (value.trim()) {
      onTaskAdd(value);
      setValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="header">
      <h1>{title}</h1>
      <form className="new-todo-form">
        <input className="new-todo" placeholder={placeholder} onChange={handleInputChange} value={value} />
        <input className="new-todo-form__timer" placeholder="Min" type="text" maxLength="2" />
        <input className="new-todo-form__timer" placeholder="Sec" type="text" maxLength="2" />
      </form>
      <input className="new-todo" placeholder={placeholder} onChange={handleInputChange} value={value} />
    </form>
  );
};

export default NewTaskForm;

NewTaskForm.propTypes = {
  placeholder: PropTypes.string,
  title: PropTypes.string,
  onTaskAdd: PropTypes.func.isRequired,
};

NewTaskForm.defaultProps = {
  placeholder: 'What needs to be done?',
  title: 'Todos',
};
