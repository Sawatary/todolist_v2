import React from 'react';

import Task from '../Task/Task';

const TaskList = ({ todos, onDelete }) => {
  return (
    <ul className="todo-list">
      {todos.map((item) => (
        <Task key={item.id} title={item.title} onDelete={() => onDelete(item.id)} />
      ))}
    </ul>
  );
};

export default TaskList;
