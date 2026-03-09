import { useState } from 'react';
import Modal from './Modal';
import style from './TodoList.module.css';
import TodoListItem from './TodoListItem';
import NewTodo from './NewTodo';

export default function TodoList() {
  const [todoList, setTodoList] = useState([
    {
      id: 1,
      title: '영단어 30개 외우기',
    },
    {
      id: 2,
      title: '수학 30문제 풀기',
    },
    {
      id: 3,
      title: '국어 강의 듣기',
    },
  ]);
  const [isOpen, setIsOpen] = useState(false);
  const [Id, setId] = useState(todoList.length + 2);

  function addTodoListHandler(newTodo) {
    setTodoList((prevTodoList) => {
      return [
        {
          id: Id,
          title: newTodo,
        },
        ...prevTodoList,
      ];
    });
    setId(Id + 1);
    setIsOpen(false);
  }

  function removeTodoListHandler(id) {
    setTodoList((prevTodoList) =>
      prevTodoList.filter((todo) => todo.id !== id),
    );
  }

  return (
    <>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <NewTodo
          onClose={() => setIsOpen(false)}
          onAddTodo={addTodoListHandler}
        />
      </Modal>
      <section className={style.section}>
        <div className={style.header}>투두리스트</div>
        <button className={style.button} onClick={() => setIsOpen(true)}>
          +추가하기
        </button>
        <ul>
          {todoList.map((todo) => (
            <TodoListItem
              key={todo.id}
              id={todo.id}
              title={todo.title}
              onDelete={removeTodoListHandler}
            />
          ))}
        </ul>
      </section>
    </>
  );
}
