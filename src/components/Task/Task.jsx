import React, { useState } from 'react';
import { formatDistanceToNow } from 'date-fns';
import KG from 'date-fns/locale/en-AU';
import PropTypes from 'prop-types';

const Task = ({ todo, title, onDelete, onToggle, editItem }) => {
  const [editing, setEditing] = useState(false);
  const [editText, setEditText] = useState('');

  const handleFinish = () => onToggle();

  const handleSubmit = (event) => {
    event.preventDefault();
    editItem(todo.id, editText);
    setEditText('');
    setEditing(false);
  };

  return (
    <li className={todo.checked ? 'completed' : editing ? 'editing' : ''}>
      <div className="view">
        <input className="toggle" type="checkbox" checked={todo.checked} onChange={handleFinish} />
        <label>
          <span className="description">{title}</span>
          <span className="created">{`created ${formatDistanceToNow(todo.date, {
            includeSeconds: true,
            locale: KG,
            addSuffix: true,
          })}`}</span>
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
  }),
  onDelete: PropTypes.func.isRequired,
};

Task.defaultProps = {
  todo: {},
};
