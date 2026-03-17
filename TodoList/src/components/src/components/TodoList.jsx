import { useEffect, useState } from 'react';
import Modal from './Modal';
import style from './TodoList.module.css';
import TodoListItem from './TodoListItem';
import NewTodo from './NewTodo';

export default function TodoList() {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/todoList')
      .then((response) => response.json())
      .then((data) => setTodoList(data));
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <NewTodo
          onClose={() => setIsOpen(false)}
          // onAddTodo={addTodoListHandler}
          nextId={todoList.length + 1}
        />
      </Modal>
      <section className={style.section}>
        <div className={style.header}>투두리스트</div>
        <button className={style.button} onClick={() => setIsOpen(true)}>
          +추가하기
        </button>
        <ul>
          {todoList.map((todo) => (
            <TodoListItem key={todo.id} id={todo.id} title={todo.title} />
          ))}
        </ul>
      </section>
    </>
  );
}
