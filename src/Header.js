import React, { useState } from 'react';
import TodoList from './TodoList';
import Navigation from './Navigation';
import Footer from './Footer';

export default function Header(props) {
  const [todos, setTodos] = useState([]);

  const [state, setState] = useState('all');

  const addTodo = (() => {
    const genereateId = () =>
      todos.length ? Math.max(...todos.map((todo) => todo.id)) + 1 : 1;

    return (content) => {
      const newTodo = { id: genereateId(), content, completed: false };
      setTodos([newTodo, ...todos]);
    };
  })();

  const keyUp = (e) => {
    if (e.key !== 'Enter' || !e.target.value) return;
    addTodo(e.target.value);
    e.target.value = '';
    e.target.focus();
  };

  return (
    <>
      <h1 className="title">Todos</h1>
      <div className="ver">3.1</div>
      <input
        onKeyUp={keyUp}
        className="input-todo"
        placeholder="What needs to be done?"
      />
      <Navigation setState={setState} />
      <TodoList todos={todos} setTodos={setTodos} state={state} />
      <Footer todos={todos} setTodos={setTodos} />
    </>
  );
}
