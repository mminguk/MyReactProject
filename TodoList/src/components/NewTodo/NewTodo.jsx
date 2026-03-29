import { useRef, useState } from 'react';
import style from './NewTodo.module.css';
import Modal from '../Modal';

const NewTodo = ({ onClose, nextId, onAddTodo }) => {
  const input = useRef();
  const [isComplete, setIsComplete] = useState(false);
  let id = nextId;

  async function submitHandler(event) {
    event.preventDefault();

    const response = await fetch('http://localhost:4000/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id,
        title: input.current.value,
        date: new Date().toLocaleDateString(),
      }),
    });
    if (!response.ok) {
      throw new Error('에러가 발생하였습니다.');
    }
    const resData = await response.json();
    id = id + 1;
    onAddTodo(resData);
    onClose();
    setIsComplete(true);
    input.current.value = '';
  }

  return (
    <>
      <Modal isOpen={isComplete} onClose={onClose}>
        <h2>완료되었습니다.</h2>
        <button
          type="button"
          className={style.okay}
          onClick={() => setIsComplete(false)}
        >
          확인
        </button>
      </Modal>
      <form onSubmit={submitHandler}>
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
    </>
  );
};

export default NewTodo;
