import React from 'react';

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
