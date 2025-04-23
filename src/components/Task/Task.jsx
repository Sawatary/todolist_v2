import React, { useState } from 'react';
import { formatDistanceToNow } from 'date-fns';
import KG from 'date-fns/locale/en-AU';
import PropTypes from 'prop-types';

const Task = ({ todo, onDelete, onToggle, editItem, onPause }) => {
  const [editing, setEditing] = useState(false);
  const [editText, setEditText] = useState('');

  const handleFinish = () => onToggle(todo.id);

  const handleSubmit = (event) => {
    event.preventDefault();
    editItem(todo.id, editText);
    setEditText('');
    setEditing(false);
  };

  const formatTime = (seconds) => {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
  };

  return (
    <li className={todo.checked ? 'completed' : editing ? 'editing' : ''}>
      <div className="view">
        <input className="toggle" type="checkbox" checked={todo.checked} onChange={handleFinish} />
        <label>
          <span className="description">{todo.body}</span>
          <span className="created">
            {formatDistanceToNow(todo.date, {
              locale: KG,
              addSuffix: true,
            })}
          </span>
          <button type="button" className="pause-button" onClick={onPause}>
            {todo.paused ? 'Resume' : 'Pause'}
          </button>
          <span className="timer">{formatTime(todo.timeLeft)}</span>
        </label>
        <button
          type="button"
          className="icon icon-edit"
          onClick={() => {
            setEditing(!editing);
            setEditText(todo.body);
          }}
        ></button>
        <button type="button" className="icon icon-destroy" onClick={onDelete}></button>
      </div>
      {editing && (
        <form onSubmit={handleSubmit}>
          <input onChange={(event) => setEditText(event.target.value)} type="text" className="edit" value={editText} />
        </form>
      )}
    </li>
  );
};

export default Task;

Task.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number,
    body: PropTypes.string,
    checked: PropTypes.bool,
    date: PropTypes.instanceOf(Date),
    paused: PropTypes.bool.isRequired,
    timeLeft: PropTypes.number.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
  onPause: PropTypes.func.isRequired,
};
