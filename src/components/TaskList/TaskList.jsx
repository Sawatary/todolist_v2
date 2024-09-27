import React from 'react';
import PropTypes from 'prop-types';

import Task from '../Task/Task';

const TaskList = ({ todos, onDelete, onToggle, editItem }) => {
  return (
    <ul className="todo-list">
      {todos.map((item) => (
        <Task
          key={item.id}
          title={item.body}
          onDelete={() => onDelete(item.id)}
          checked={item.checked}
          onToggle={() => onToggle(item.id)}
          editItem={editItem}
          todo={item}
        />
      ))}
    </ul>
  );
};

export default TaskList;

TaskList.propTypes = {
  todos: PropTypes.any,
  changeCheck: PropTypes.func.isRequired,
  editItem: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
};

TaskList.defaultProps = {
  todos: {},
};
