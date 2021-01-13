import React from 'react';
import Todo from './Todo';

export default function UserList({ todos, setTodos, state }) {
  const active = todos.filter((todo) => !todo.completed);
  const completed = todos.filter((todo) => todo.completed);

  let _todos =
    state === 'all' ? todos : state === 'active' ? active : completed;

  const removeTodo = (id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== +id));
  };

  const onclick = (e) => {
    if (!e.target.matches('.remove-todo')) return;
    removeTodo(e.target.parentNode.id);
  };

  const toggleCompleted = (id) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === +id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const onChange = (e) => {
    toggleCompleted(e.target.parentNode.id);
  };

  return (
    <ul className="todos" onClick={onclick} onChange={onChange}>
      {_todos.map((todo) => (
        <Todo todo={todo} key={todo.id} />
      ))}
    </ul>
  );
}
