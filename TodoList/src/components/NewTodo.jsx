import { useRef } from 'react';
import style from './NewTodo.module.css';

export default function NewTodo({ onClose, onAddTodo }) {
  const input = useRef();

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        const enteredTodo = input.current.value;
        onAddTodo(enteredTodo);
        input.current.value = '';
      }}
    >
      <p className={style.input}>
        <label htmlFor="todo" className={style.label}>
          할 일
        </label>
        <input
          type="text"
          id="todo"
          name="todo"
          className={style.todo}
          ref={input}
          required
        />
      </p>
      <p className={style.action}>
        <button type="button" onClick={onClose} className={style.cancel}>
          취소
        </button>
        <button className={style.save}>저장</button>
      </p>
    </form>
  );
}
