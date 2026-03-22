import { useState } from 'react';
import style from './CalendarItem.module.css';

export default function CalendarItem(props) {
  const [openForm, setOpenForm] = useState(false);
  function openFormHandler() {
    setOpenForm(true);
  }

  function closeFormHandler(event) {
    event.preventDefault();
    setOpenForm(false);
  }
  return (
    <div className={style.div} onClick={openFormHandler}>
      {props.date}
      <div>
        {openForm ? (
          <form onSubmit={closeFormHandler}>
            <input className={style.input} type="text" />
            <button>저장</button>
          </form>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
