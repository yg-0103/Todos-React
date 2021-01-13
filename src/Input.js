import React, { useState, useRef } from 'react';

export default function InputSample() {
  const [text, setText] = useState({
    name: '',
    nickname: '',
  });

  const nameInput = useRef();
  const { name, nickname } = text;
  const onChange = ({ target }) => {
    const { name, value } = target;
    setText({
      ...text,
      [name]: value,
    });
  };
  const onReset = (e) => {
    setText({
      name: '',
      nickname: '',
    });
    nameInput.current.focus();
  };

  return (
    <div>
      <input
        name="name"
        value={name}
        onChange={onChange}
        placeholder="이름"
        ref={nameInput}
      />
      <input
        name="nickname"
        value={nickname}
        onChange={onChange}
        placeholder="내용"
      />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: {name} </b>
        이름 ({nickname})
      </div>
    </div>
  );
}
