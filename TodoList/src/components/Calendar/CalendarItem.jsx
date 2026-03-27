import { useState } from 'react';
import style from './CalendarItem.module.css';

export default function CalendarItem(props) {
  const [isActive, setIsActive] = useState(false);
  const [enteredText, setEnteredText] = useState('');

  const today = new Date().toLocaleDateString();

  function submitHandler(event) {
    event.preventDefault();
    setIsActive(false);

    props.onAddCalender(enteredText);
    setEnteredText('');
  }

  return (
    <div
      className={`${style.div} ${props.date === today && style.today}`}
      onClick={() => setIsActive(true)}
    >
      {props.day}
      <div>
        {isActive && props.date === today && (
          <form onSubmit={submitHandler}>
            <input
              type="text"
              className={style.input}
              onChange={(event) => setEnteredText(event.target.value)}
            />
            <button>저장</button>
          </form>
        )}

        {props.date === today &&
          props.data.map((item) => <p key={item}>{item}</p>)}
      </div>
    </div>
  );
}
