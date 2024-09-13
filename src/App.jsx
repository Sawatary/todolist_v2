import React, { Component } from 'react';

import NewTaskForm from './components/NewTaskForm/NewTaskForm';
import TaskList from './components/TaskList/TaskList';
import Footer from './components/Footer/Footer';
import './index.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        { title: 'Active task', id: 1 },
        { title: 'Active task', id: 2 },
        { title: 'Active task', id: 3 },
      ],
    };
  }
  deleteItem = (id) => {
    this.setState(({ items }) => {
      const idx = items.findIndex((el) => el.id === id);
      if (idx === -1) return;

      const newArray = [...items.slice(0, idx), ...items.slice(idx + 1)];
      return {
        items: newArray,
      };
    });
  };

  render() {
    return (
      <div className="todo-app">
        <NewTaskForm />
        <TaskList todos={this.state.items} onDelete={this.deleteItem} />
        <Footer />
      </div>
    );
  }
}
