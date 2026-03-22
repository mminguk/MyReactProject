import { useState } from 'react';
import Modal from '../Modal';
import style from './TodoList.module.css';
import TodoListItem from './TodoListItem';
import NewTodo from '../NewTodo/NewTodo';
import Header from '../Header/Header';
import Calendar from '../Calendar/Calendar';

export default function TodoList() {
  const [todoList, setTodoList] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState('todoList');

  function changeModeHandler(mode) {
    setMode(mode);
  }

  let content = (
    <>
      <button className={style.button} onClick={() => setIsOpen(true)}>
        +추가하기
      </button>
      <ul>
        {todoList.length === 0 && <p>아무것도 추가된 것이 없습니다...</p>}
        {todoList.map((todo) => (
          <TodoListItem key={todo.id} id={todo.id} title={todo.title} />
        ))}
      </ul>
    </>
  );

  if (mode === 'Calendar') {
    content = <Calendar />;
  }

  if (mode === 'todoList') {
    content = (
      <>
        <button className={style.button} onClick={() => setIsOpen(true)}>
          +추가하기
        </button>
        <ul>
          {todoList.length === 0 && <p>아무것도 추가된 것이 없습니다...</p>}
          {todoList.map((todo) => (
            <TodoListItem key={todo.id} id={todo.id} title={todo.title} />
          ))}
        </ul>
      </>
    );
  }

  fetch('http://localhost:4000/todoList')
    .then((response) => response.json())
    .then((data) => setTodoList(data));

  return (
    <>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <NewTodo
          onClose={() => setIsOpen(false)}
          nextId={todoList.length + 1}
        />
      </Modal>
      <section className={style.section}>
        <Header onSelect={changeModeHandler} />
        {content}
      </section>
    </>
  );
}
