import React from 'react';

export default function User({ todo }) {
  return (
    <li id={todo.id} className="todo-item">
      <input
        className="checkbox"
        type="checkbox"
        id={`ck-${todo.id}`}
        checked={todo.completed}
      />
      <label
        style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
        htmlFor={`ck-${todo.id}`}
      >
        {todo.content}
      </label>
      <i className="remove-todo far fa-times-circle"></i>
    </li>
  );
}
