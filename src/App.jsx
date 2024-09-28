import React, { useEffect, useState } from 'react';

import NewTaskForm from './components/NewTaskForm/NewTaskForm';
import TaskList from './components/TaskList/TaskList';
import Footer from './components/Footer/Footer';
import './index.css';

const App = () => {
  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState('All');

  const addTask = (value, timeInSeconds) => {
    const newTask = {
      body: value,
      timeLeft: timeInSeconds,
      id: Date.now(),
      checked: false,
      paused: false,
      date: new Date(),
    };
    setItems((prevItems) => [...prevItems, newTask]);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      tick();
    }, 1000);

    return () => clearInterval(timer);
  }, [items]);

  const tick = () => {
    setItems((prevTasks) =>
      prevTasks.map((task) => {
        if (task.paused) return task; // Не уменьшаем таймер, если задача приостановлена
        if (task.timeLeft > 0) {
          return { ...task, timeLeft: task.timeLeft - 1 };
        } else {
          return { ...task, checked: true }; // Устанавливаем статус задачи как выполненную
        }
      })
    );
  };

  const deleteTask = (id) => {
    setItems((items) => items.filter((item) => item.id !== id));
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

  const pauseTask = (id) => {
    setItems((items) => items.map((item) => (item.id === id ? { ...item, paused: !item.paused } : item)));
  };

  return (
    <div className="todo-app">
      <NewTaskForm onTaskAdd={addTask} />
      <TaskList
        todos={filteredTask()}
        onDelete={deleteTask}
        onToggle={toggleTask}
        editItem={editTask}
        pauseTask={pauseTask}
      />
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
