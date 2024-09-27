import React, { useState } from 'react';

import NewTaskForm from './components/NewTaskForm/NewTaskForm';
import TaskList from './components/TaskList/TaskList';
import Footer from './components/Footer/Footer';
import './index.css';

const App = () => {
  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState('All');

  const deleteTask = (id) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };

  const addTask = (value) => {
    const newTask = {
      body: value,
      id: items.length + 1,
      checked: false,
      date: new Date(),
    };
    setItems((prevItems) => [...prevItems, newTask]);
  };

  const toggleTask = (id) => {
    setItems((items) => items.map((item) => (item.id === id ? { ...item, checked: !item.checked } : item)));
  };

  const editTask = (id, text) => {
    setItems((items) => items.map((item) => (item.id === id ? { ...item, body: text } : item)));
  };

  const clearCompleted = () => {
    setItems((items) => items.filter((item) => !item.checked));
  };

  const filteredTask = () => {
    return items.filter((item) => {
      if (filter === 'All') return true;
      if (filter === 'Completed') return item.checked;
      if (filter === 'Active') return !item.checked;
      return true;
    });
  };

  const changeFilter = (filter) => {
    setFilter(filter);
  };

  return (
    <div className="todo-app">
      <NewTaskForm onTaskAdd={addTask} />
      <TaskList todos={filteredTask()} onDelete={deleteTask} onToggle={toggleTask} editItem={editTask} />
      <Footer
        lefts={items.filter((item) => !item.checked).length}
        filter={filter}
        clearCompleted={clearCompleted}
        changeFilter={changeFilter}
      />
    </div>
  );
};

export default App;
