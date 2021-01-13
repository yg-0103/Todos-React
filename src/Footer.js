import React from 'react';

export default function Footer({ todos, setTodos }) {
  const activeTodo = todos.filter((todo) => !todo.completed).length;
  const completedTodo = todos.filter((todo) => todo.completed).length;

  const completedAll = (target) => {
    setTodos((todos) =>
      todos.map((todo) => ({ ...todo, completed: target.checked }))
    );
  };

  const onClick = (e) => {
    completedAll(e.target);
  };

  const getTodoCompleted = () =>
    todos.length === todos.filter((todo) => todo.completed).length
      ? true
      : false;

  const clearCompleted = () => {
    setTodos((todos) => todos.filter((todo) => !todo.completed));
  };
  return (
    <footer>
      <div className="complete-all">
        <input
          className="checkbox"
          type="checkbox"
          id="ck-complete-all"
          onClick={onClick}
          checked={getTodoCompleted()}
        />
        <label htmlFor="ck-complete-all">Mark all as complete</label>
      </div>
      <div className="clear-completed">
        <button className="btn" onClick={clearCompleted}>
          Clear completed (
          <span className="completed-todos">{completedTodo}</span>)
        </button>
        <strong className="active-todos">{activeTodo}</strong> items left
      </div>
    </footer>
  );
}
