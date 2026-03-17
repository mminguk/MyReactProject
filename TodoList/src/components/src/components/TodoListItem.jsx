import { useEffect, useState } from 'react';
import style from './TodoListItem.module.css';

export default function TodoListItem({ title, onDelete, onUpdate, id }) {
  const [complete, setComplete] = useState(false);
  const [updateTitle, setUpdateTitle] = useState(title);
  const [mode, setMode] = useState('read');
  const classes = complete ? style.complete : '';

  let content = <p onClick={() => setMode('update')}>{updateTitle}</p>;

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

  if (mode === 'update') {
    content = (
      <>
        <input
          type="text"
          defaultValue={title}
          onChange={(event) => setUpdateTitle(event.target.value)}
        />
        <button
          type="button"
          onClick={() => {
            setMode('read');
          }}
        >
          완료
        </button>
      </>
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
