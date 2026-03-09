import { useState } from 'react';
import style from './TodoListItem.module.css';

export default function TodoListItem({ title, onDelete, id }) {
  const [complete, setComplete] = useState(false);
  const classes = complete ? style.complete : '';
  return (
    <li className={style.li}>
      <input
        type="checkbox"
        onClick={() => setComplete(!complete)}
        disabled={complete}
      />
      <p className={classes}>{title}</p>
      <button className={style.button} onClick={() => onDelete(id)}>
        X
      </button>
    </li>
  );
}
