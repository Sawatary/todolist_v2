import React, { Component } from 'react';

import NewTaskForm from './components/NewTaskForm/NewTaskForm';
import TaskList from './components/TaskList/TaskList';
import Footer from './components/Footer/Footer';
import './index.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
    };
  }

  deleteTask = (id) => {
    this.setState(({ items }) => {
      const idx = items.findIndex((el) => el.id === id);
      if (idx === -1) return;
      const newArray = [...items.slice(0, idx), ...items.slice(idx + 1)];
      return {
        items: newArray,
      };
    });
  };

  addTask(value) {
    const data = {
      body: value,
      id: this.state.items.length + 1,
      checked: false,
    };
    this.setState(({ items }) => ({ items: [...items, data] }));
  }

  toggleTask = (id) => {
    this.setState(({ items }) => ({
      items: items.map((item) => (item.id === id ? { ...item, checked: !item.checked } : item)),
    }));
  };

  editItem = (id, text) => {
    this.setState(({ items }) => ({
      items: items.map((item) => (item.id === id ? { ...item, body: text } : item)),
    }));
  };

  render() {
    return (
      <div className="todo-app">
        <NewTaskForm onTaskAdd={this.addTask.bind(this)} />
        <TaskList
          todos={this.state.items}
          onDelete={this.deleteTask}
          onToggle={this.toggleTask}
          editItem={this.editItem}
        />
        <Footer />
      </div>
    );
  }
}
