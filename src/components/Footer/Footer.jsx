import React from 'react';

import TaskFilter from '../TaskFilter/TaskFilter';

export default class Footer extends React.Component {
  render() {
    const { lefts, clearCompleted, changeFilter, filter } = this.props;
    return (
      <footer className="footer">
        <span className="todo-count">{lefts} items left</span>
        <TaskFilter filter={filter} changeFilter={changeFilter} />
        <button className="clear-completed" onClick={clearCompleted}>
          Clear completed
        </button>
      </footer>
    );
  }
}
