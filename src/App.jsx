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
      filter: 'All',
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

  addTask = (value) => {
    const data = {
      body: value,
      id: this.state.items.length + 1,
      checked: false,
      date: new Date(),
    };
    this.setState(({ items }) => ({ items: [...items, data] }));
  };

  toggleTask = (id) => {
    this.setState(({ items }) => ({
      items: items.map((item) => (item.id === id ? { ...item, checked: !item.checked } : item)),
    }));
  };

  editTask = (id, text) => {
    this.setState(({ items }) => ({
      items: items.map((item) => (item.id === id ? { ...item, body: text } : item)),
    }));
  };

  clearCompleted = () => {
    this.setState(({ items }) => ({ items: items.filter((element) => !element.checked) }));
  };

  filteredTask = () => {
    const { items, filter } = this.state;
    return items.filter(({ checked }) => {
      const all = filter === 'All';
      const completed = filter === 'Completed';
      return all ? true : completed ? checked === true : checked === false;
    });
  };

  changeFilter = (data) => {
    this.setState({ filter: data });
  };

  render() {
    return (
      <div className="todo-app">
        <NewTaskForm onTaskAdd={this.addTask} />
        <TaskList
          todos={this.filteredTask()}
          onDelete={this.deleteTask}
          onToggle={this.toggleTask}
          editItem={this.editTask}
        />
        <Footer
          lefts={this.state.items.filter(({ checked }) => !checked).length}
          filter={this.state.filter}
          clearCompleted={this.clearCompleted}
          changeFilter={this.changeFilter}
        />
      </div>
    );
  }
}
