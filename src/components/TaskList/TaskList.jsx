import React from 'react';
import PropTypes from 'prop-types';

import Task from '../Task/Task';

const TaskList = ({ todos, onDelete, onToggle, editItem, pauseTask }) => {
  return (
    <ul className="todo-list">
      {todos.map((item) => (
        <Task
          key={item.id}
          todo={item}
          onDelete={() => onDelete(item.id)}
          onToggle={onToggle}
          editItem={editItem}
          timeLeft={item.timeLeft}
          onPause={() => pauseTask(item.id)}
        />
      ))}
    </ul>
  );
};

export default TaskList;

TaskList.propTypes = {
  todos: PropTypes.any,
  editItem: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
};

TaskList.defaultProps = {
  todos: {},
};
