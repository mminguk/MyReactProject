import style from './CalendarItem.module.css';
import { useState, useEffect } from 'react';

export default function CalendarItem(props) {
  const [todayTodo, setTodayTodo] = useState([]);
  useEffect(() => {
    fetch('http://localhost:4000/calendar')
      .then((response) => response.json())
      .then((data) => setTodayTodo(data));
  }, []);

  return (
    <div className={style.div}>
      {props.date}
      <div>{todayTodo}</div>
    </div>
  );
}
