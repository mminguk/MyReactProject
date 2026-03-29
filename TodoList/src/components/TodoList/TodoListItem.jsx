import { useState, useRef } from 'react';
import style from './TodoListItem.module.css';
import Modal from '../Modal';

export default function TodoListItem({
  title,
  id,
  date,
  onDeleteTodo,
  onUpdateTodo,
}) {
  const [complete, setComplete] = useState(false);
  const [mode, setMode] = useState('read');
  const [deleteBtnTouched, setDeleteBtnTouched] = useState(false);
  const input = useRef();
  let content = <p onClick={() => setMode('update')}>{title}</p>;

  async function deleteHandler() {
    const response = await fetch('http://localhost:4000/delete_todo', {
      method: 'DELETE',
      body: JSON.stringify({
        id,
        title,
        date,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) {
      throw new Error('에러가 발생하였습니다.');
    }
    const resData = await response.json();
    setDeleteBtnTouched(true);
    onDeleteTodo(resData);
  }

  async function updateHandler(event) {
    event.preventDefault();
    const response = await fetch('http://localhost:4000/update_todo', {
      method: 'PUT',
      body: JSON.stringify({
        id,
        title: input.current.value,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) {
      throw new Error('에러가 발생하였습니다.');
    }
    const resData = await response.json();
    setMode('read');
    onUpdateTodo(resData);
  }

  async function completeTodoHandler() {
    const response = await fetch('http://localhost:4000/complete_todo', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id,
        title,
        date,
      }),
    });
    if (!response.ok) {
      throw new Error('에러가 발생하였습니다.');
    }
    const resData = response.json();
    onDeleteTodo(resData);
    completeTodoHandler();
  }

  if (mode === 'update') {
    content = (
      <form onSubmit={updateHandler}>
        <input
          type="text"
          id="title"
          name="title"
          defaultValue={title}
          ref={input}
        />
        <button>완료</button>
      </form>
    );
  }

  return (
      <li className={style.li}>
        <input
          type="checkbox"
          onClick={() => setComplete(!complete)}
          disabled={complete}
        />
        {content}
        <button className={style.button} onClick={deleteHandler}>
          X
        </button>
      </li>
    
  );
}
