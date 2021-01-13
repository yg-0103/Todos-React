import React, { useRef } from 'react';
export default function Navigation({ setState }) {
  const navigation = useRef();

  const changeState = (target) => {
    [...navigation.current.children].forEach((child) => {
      child.classList.toggle('active', child === target);
    });
    setState(target.id);
  };
  const onClick = (e) => {
    changeState(e.target);
  };

  return (
    <ul className="nav" ref={navigation} onClick={onClick}>
      <li id="all" className="active">
        All
      </li>
      <li id="active">Active</li>
      <li id="completed">Completed</li>
    </ul>
  );
}
