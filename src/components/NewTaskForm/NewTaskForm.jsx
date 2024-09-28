import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const NewTaskForm = ({ placeholder, title, onTaskAdd }) => {
  const [value, setValue] = useState('');
  const [minutes, setMinutes] = useState('');
  const [seconds, setSeconds] = useState('');

  const handleInputChange = (event) => {
    setValue(event.target.value);
  };

  const handleMinutesChange = (event) => {
    setMinutes(event.target.value);
  };

  const handleSecondsChange = (event) => {
    setSeconds(event.target.value);
  };

  const handleSubmit = (event) => {
    const totalSeconds = parseInt(minutes || 0) * 60 + parseInt(seconds || 0);
    event.preventDefault();
    if (value.trim()) {
      onTaskAdd(value, totalSeconds);
      setValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="header new-todo-form">
      <h1>{title}</h1>
      <button className="button" type="submit" onClick={handleSubmit}>
        <FontAwesomeIcon icon={faPlus} className="icon" />
      </button>
      <input className="new-todo" placeholder={placeholder} onChange={handleInputChange} value={value} />
      <input
        className="new-todo-form__timer"
        placeholder="Min"
        type="text"
        maxLength="2"
        onChange={handleMinutesChange}
        value={minutes}
      />
      <input
        className="new-todo-form__timer"
        placeholder="Sec"
        type="text"
        maxLength="2"
        onChange={handleSecondsChange}
        value={seconds}
      />
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
