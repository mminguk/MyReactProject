import { useState, useRef } from 'react';
import style from './TodoListItem.module.css';

export default function TodoListItem({ title, onUpdate, id }) {
  const [complete, setComplete] = useState(false);
  const [mode, setMode] = useState('read');
  const classes = complete ? style.complete : '';
  const input = useRef();
  let content = <p onClick={() => setMode('update')}>{title}</p>;

  async function deleteHandler() {
    const response = await fetch('http://localhost:4000/delete_todo', {
      method: 'DELETE',
      body: JSON.stringify({
        id,
        title,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const resData = response.json();
    return resData;
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
    const resData = response.json();
    setMode('read');
    return resData;
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
